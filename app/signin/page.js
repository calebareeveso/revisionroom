"use client";
import React, { useState, useEffect } from "react";
import signIn from "../auth/signin";
// auth
import { useAuthContext } from "../context/authContext";
// routing
import { useRouter } from "next/navigation";
// auth error
import getFirebaseErrorMessage from "../../utils/firebase/handlingError/getFirebaseErrorMessage";
// mantine
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
// firestore
import updateUserData from "../../utils/firebase/firestore/update/userData";
function Page() {
  // routing
  const router = useRouter();
  // form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      const errorMessage = getFirebaseErrorMessage(error.code);
      //   alert(errorMessage);
      //   Notifications.show({ message: errorMessage });

      // Most used notification props
      Notifications.show({
        id: "notification",
        withCloseButton: true,
        autoClose: 5000,
        // title: "Error!!",
        message: errorMessage,
        color: "red",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="M2.93 17.07A10 10 0 1 1 17.07 2.93A10 10 0 0 1 2.93 17.07zM11.4 10l2.83-2.83l-1.41-1.41L10 8.59L7.17 5.76L5.76 7.17L8.59 10l-2.83 2.83l1.41 1.41L10 11.41l2.83 2.83l1.41-1.41L11.41 10z"
            />
          </svg>
        ),
        className: "text-white",
        // style: { backgroundColor: "red" },
        styles: {
          root: {
            backgroundColor: "red",
            borderColor: "red",

            "&::before": { backgroundColor: "#ffffff" },
          },

          title: {
            color: "#ffffff",
          },
          description: {
            color: "#ffffff",
            fontWeight: "400",
            fontFamily: "'DM Sans', sans-serif",
            textTransform: "capitalize",
          },
          closeButton: {
            color: "#ffffff",
          },
        },
        sx: { backgroundColor: "red" },
        loading: false,
      });
      return console.log(`${error.code},${error.message},${errorMessage}`);
    }
    const { result: updatedUserDataResult, error: updatedUserDataError } =
      await updateUserData({ active: true });
    // else successful
    // alert("Success Signin ✅");
    console.log(result);
    router.push("/feed");
  };
  //  password
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  // handle auth
  const { user } = useAuthContext();
  useEffect(() => {
    console.log("USER log from feed", user);
    if (user !== null) router.push("/feed");
  }, [user]);
  return (
    <div className="wrapper">
      <Notifications position="top-right" />
      <div className="form-wrapper">
        <form
          onSubmit={handleForm}
          className="px-3 sm:px-8 py-4 sm:py-6 rounded-lg mx-auto bg-white max-w-xl sm:mt-20"
        >
          <h1 className="sm:text-2xl text-xl  font-dm-sans mb-2 font-medium">
            Welcome back to <span className="text-primary">RevsionRoom</span>
          </h1>

          <div className="mt-2">
            <label
              htmlFor="email"
              className="text-sm text-secondary mb-1 block"
            >
              Email{" "}
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
              className="w-full px-2 py-2 rounded-md focus:outline-none bg-secondaryBg"
            />
          </div>

          <div className="mt-2">
            <label
              htmlFor="password"
              className="text-sm text-secondary mb-1 block"
            >
              Password
            </label>

            <div className="flex w-full bg-secondaryBg rounded-md pr-2">
              <input
                onChange={(e) => setPassword(e.target.value)}
                required
                type={passwordShown ? "text" : "password"}
                name="password"
                id="password"
                placeholder="password"
                className="w-full pl-2 mr-2 py-2 focus:outline-none bg-secondaryBg rounded-md"
              />
              <button className="py-2" onClick={togglePasswordVisiblity}>
                {passwordShown ? (
                  <span>
                    {/* close eye  */}
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                ) : (
                  <span>
                    {/* open eye  */}
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                )}
              </button>
            </div>
          </div>

          <button
            className="w-full sm:ml-0 bg-primary font-dm-sans text-white border-[1px] rounded-[6px] px-2 xs:px-2 py-2 xs:py-2 text-sm sm:text-base mt-2 sm:mt-4"
            type="submit"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;
