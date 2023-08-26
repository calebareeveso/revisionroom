"use client";
import React, { useState, useEffect, useRef } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

const servers = {
  iceServers: [
    {
      urls: ["stun:stun1.l.google.com:19302", "stun:stun2.l.google.com:19302"],
    },
  ],
  iceCandidatePoolSize: 10,
};

const App = () => {
  // web cam
  const audioRef1 = useRef(null);
  const audioRef2 = useRef(null);

  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const [pc, setPC] = useState(new RTCPeerConnection(servers));
  const [callId, setCallId] = useState("0");
  const [answerCandidates, setAnswerCandidates] = useState([]);
  const [offerCandidates, setOfferCandidates] = useState([]);

  useEffect(() => {
    if (localStream) {
      pc.addTrack(localStream.getTracks()[0], localStream);
      // pc.addTrack(localStream.getTracks()[1], localStream);

      pc.ontrack = (event) => {
        setRemoteStream(event.streams[0]);
        let audio = audioRef2.current;
        audio.srcObject = event.streams[0];
      };
    }
  }, [localStream, pc]);

  const startAudio = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: false,
      audio: true,
    });
    setLocalStream(stream);
    let audio = audioRef1.current;
    audio.srcObject = stream;
  };

  const createOffer = async () => {
    const callDoc = firestore.collection("calls").doc(callId);
    const offerCandidatesCol = callDoc.collection("offerCandidates");
    const answerCandidatesCol = callDoc.collection("answerCandidates");

    setCallId(callId);

    pc.onicecandidate = (event) => {
      event.candidate && offerCandidatesCol.add(event.candidate.toJSON());
    };

    const offerDescription = await pc.createOffer();
    await pc.setLocalDescription(offerDescription);

    const offer = {
      sdp: offerDescription.sdp,
      type: offerDescription.type,
    };

    await callDoc.set({ offer });

    callDoc.onSnapshot((snapshot) => {
      const data = snapshot.data();
      if (!pc.currentRemoteDescription && data?.answer) {
        const answerDescription = new RTCSessionDescription(data.answer);
        pc.setRemoteDescription(answerDescription);
      }
    });

    answerCandidatesCol.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          const candidate = new RTCIceCandidate(change.doc.data());
          pc.addIceCandidate(candidate);
        }
      });
    });
  };

  const answerCall = async () => {
    const callDoc = firestore.collection("calls").doc(callId);
    const offerCandidatesCol = callDoc.collection("offerCandidates");
    const answerCandidatesCol = callDoc.collection("answerCandidates");

    pc.onicecandidate = (event) => {
      event.candidate && answerCandidatesCol.add(event.candidate.toJSON());
    };

    const callData = (await callDoc.get()).data();

    const offerDescription = callData.offer;
    await pc.setRemoteDescription(new RTCSessionDescription(offerDescription));

    const answerDescription = await pc.createAnswer();
    await pc.setLocalDescription(answerDescription);

    const answer = {
      type: answerDescription.type,
      sdp: answerDescription.sdp,
    };

    await callDoc.update({ answer });

    offerCandidatesCol.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          let data = change.doc.data();
          pc.addIceCandidate(new RTCIceCandidate(data));
        }
      });
    });
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-20">
      <button
        className="mx-auto bg-black text-white rounded-[3px] px-2 py-1 "
        id="audioButton"
        onClick={startAudio}
      >
        Start audio
      </button>

      <h2>2. Create a new Call</h2>
      <button
        className="mx-auto bg-black text-white rounded-[3px] px-2 py-1 "
        id="callButton"
        disabled={!localStream}
        onClick={createOffer}
      >
        Create Call (offer)
      </button>

      <h2>3. Join a Call</h2>
      <p>Answer the call from a different browser window or device</p>
      <input
        id="callInput"
        value={callId}
        onChange={(e) => setCallId(e.target.value)}
        placeholder="Enter call ID"
      />
      <button
        className="mx-auto bg-black text-white rounded-[3px] px-2 py-1 "
        id="answerButton"
        disabled={!callId || !localStream}
        onClick={answerCall}
      >
        Answer
      </button>

      <h2>4. Hangup</h2>
      <button
        className="mx-auto bg-black text-white rounded-[3px] px-2 py-1 "
        id="hangupButton"
        disabled
      >
        Hangup
      </button>

      <audio
        id="audioAudio"
        // srcObject={localStream}
        ref={audioRef1}
        controls
        autoplay
      ></audio>

      <audio
        id="remoteAudio"
        // srcObject={remoteStream}
        ref={audioRef2}
        controls
        autoplay
      ></audio>
    </div>
  );
};

export default App;
