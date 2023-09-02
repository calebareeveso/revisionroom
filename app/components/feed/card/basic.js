"use client";
import React, { useEffect } from "react";
export default function basic({ number, fullname, photoURL, type, active }) {
  useEffect(() => {
    console.log("photoURL::", photoURL);
    console.log(`is active ${fullname}???::`, active);
  }, []);

  return (
    <div className="flex space-x-2">
      <img
        src={photoURL}
        className=" h-12 w-12 border-[1px] border-primary rounded-lg"
        loading={"lazy"}
        alt="picture"
      />

      <div className="flex flex-col space-y-0">
        <h4 className="text-base font-dm-sans font-normal">{fullname}</h4>
        <p className="flex space-x-1 items-center text-secondary">
          <span className="">
            {active == true ? (
              <svg
                className="w-4 h-4"
                width="7"
                height="8"
                viewBox="0 0 7 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3.5" cy="4" r="3.5" fill="#F5F8FC" />
                <circle cx="3.5" cy="4" r="2.5" fill="#398DFF" />
              </svg>
            ) : (
              <svg
                className="w-4 h-4"
                width="7"
                height="8"
                viewBox="0 0 7 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3.5" cy="4" r="3.5" fill="#F7F0E9" />
                <circle cx="3.5" cy="4" r="2.5" fill="#E2CAB0" />
              </svg>
            )}
          </span>
          <span className="text-sm font-dm-sans">
            {active == true ? "Active" : "Idle"}
          </span>
        </p>
      </div>
    </div>
  );
}
