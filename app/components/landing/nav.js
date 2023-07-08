"use client";
import React, { useEffect, useState } from "react";

// mantine
import { Autocomplete, Popover, Button } from "@mantine/core";
export default function nav() {
  const [userSignedIn, setuserSignedIn] = useState(false);
  // Mobile Search
  const [mobileSearch, setmobileSearch] = useState(false);

  useEffect(() => {
    setuserSignedIn(true);
  }, []);

  // Search
  const [searchInputValue, setsearchInputValue] = useState("");
  return (
    <nav id="primary-navigation" className="bg-white ">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div
          className={`flex items-center  container mx-auto py-2 ${
            userSignedIn ? "" : "justify-between"
          }`}
        >
          <a href="/" className="flex">
            <img
              className={`mr-3 self-center ${
                userSignedIn ? "h-10 xs:h-8 lg:h-10 " : "h-8 lg:h-10 "
              }`}
              src="/images/logo.svg"
            />
          </a>
          {userSignedIn ? (
            <div className="flex space-x-0 items-center w-full justify-end">
              <div className="hidden md:flex items-center bg-secondaryBg px-1 py-2 rounded-lg w-full ml-4">
                {/* <input
                  type="text"
                  className="bg-secondaryBg focus:outline-none px-2 py-1 text-gray-900 sm:text-sm w-full"
                  placeholder="Search for revision rooms..."
                /> */}
                <Autocomplete
                  icon={
                    <svg
                      className=""
                      width={18}
                      height={18}
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                  value={searchInputValue}
                  onChange={setsearchInputValue}
                  variant="unstyled"
                  radius="xs"
                  placeholder="Search for rivision rooms..."
                  data={[
                    "Exponentials",
                    "Logarithms",
                    "Binomial",
                    "Distribution",
                  ]}
                  className="bg-secondaryBg focus:outline-none text-gray-900 sm:text-sm w-full"
                />
              </div>
              <div className="text-center flex justify-between space-x-1 items-center">
                <button
                  onClick={() => setmobileSearch(!mobileSearch)}
                  className="block md:hidden px-2 bg-secondaryBg py-2 rounded-[5px] text-secondary"
                >
                  {mobileSearch !== false ? (
                    <span>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
                          fill="currentColor"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  ) : (
                    <span>
                      <svg
                        className=""
                        width={18}
                        height={18}
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  )}
                </button>

                <Popover
                  arrowPosition="side"
                  width={300}
                  trapFocus
                  position="bottom"
                  withArrow
                  shadow="md"
                  transitionProps={{ transition: "pop" }}
                  radius="md"
                  styles={{ arrow: { marginLeft: "0.5rem" } }}
                >
                  <Popover.Target>
                    <Button
                      unstyled
                      variant="unstyled"
                      className="p-0 m-0 border-0 overflow-visible h-auto w-auto"
                    >
                      <img
                        className="h-6 w-6 mx-2 my-2 md:mx-4 md:my-2 md:h-9 md:w-9 ring-offset-2 ring-2 ring-primary rounded-[100%]"
                        src="/images/speaker_avatar.jpeg"
                        loading={"lazy"}
                      />
                    </Button>
                  </Popover.Target>
                  <Popover.Dropdown style={{ marginLeft: "-0.3rem" }}>
                    <div>
                      <div className="flex flex-col space-y-2">
                        <img
                          className="h-auto w-full rounded-[6px]"
                          src="/images/speaker_avatar.jpeg"
                          loading={"lazy"}
                        />
                        <div className="w-full flex justify-around flex-col">
                          <h3 className="text-xl font-dm-sans">Oliver Smith</h3>
                          <p className="font-dm-sans flex space-x-2 text-base text-secondary mx-auto">
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M21 10h-2V4h1V2H4v2h1v6H3a1 1 0 0 0-1 1v9h20v-9a1 1 0 0 0-1-1zm-7 8v-4h-4v4H7V4h10v14h-3z"
                                />
                                <path
                                  fill="currentColor"
                                  d="M9 6h2v2H9zm4 0h2v2h-2zm-4 4h2v2H9zm4 0h2v2h-2z"
                                />
                              </svg>
                            </span>
                            <span>Wellington College</span>
                          </p>
                        </div>
                        <button className="flex justify-around rounded-[5px] bg-secondaryBg text-primary px-3 py-2">
                          <span className="font-dm-sans mx-auto items-center flex space-x-2 text-">
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12.1464 1.14645C12.3417 0.951184 12.6583 0.951184 12.8535 1.14645L14.8535 3.14645C15.0488 3.34171 15.0488 3.65829 14.8535 3.85355L10.9109 7.79618C10.8349 7.87218 10.7471 7.93543 10.651 7.9835L6.72359 9.94721C6.53109 10.0435 6.29861 10.0057 6.14643 9.85355C5.99425 9.70137 5.95652 9.46889 6.05277 9.27639L8.01648 5.34897C8.06455 5.25283 8.1278 5.16507 8.2038 5.08907L12.1464 1.14645ZM12.5 2.20711L8.91091 5.79618L7.87266 7.87267L8.12731 8.12732L10.2038 7.08907L13.7929 3.5L12.5 2.20711ZM9.99998 2L8.99998 3H4.9C4.47171 3 4.18056 3.00039 3.95552 3.01877C3.73631 3.03668 3.62421 3.06915 3.54601 3.10899C3.35785 3.20487 3.20487 3.35785 3.10899 3.54601C3.06915 3.62421 3.03669 3.73631 3.01878 3.95552C3.00039 4.18056 3 4.47171 3 4.9V11.1C3 11.5283 3.00039 11.8194 3.01878 12.0445C3.03669 12.2637 3.06915 12.3758 3.10899 12.454C3.20487 12.6422 3.35785 12.7951 3.54601 12.891C3.62421 12.9309 3.73631 12.9633 3.95552 12.9812C4.18056 12.9996 4.47171 13 4.9 13H11.1C11.5283 13 11.8194 12.9996 12.0445 12.9812C12.2637 12.9633 12.3758 12.9309 12.454 12.891C12.6422 12.7951 12.7951 12.6422 12.891 12.454C12.9309 12.3758 12.9633 12.2637 12.9812 12.0445C12.9996 11.8194 13 11.5283 13 11.1V6.99998L14 5.99998V11.1V11.1207C14 11.5231 14 11.8553 13.9779 12.1259C13.9549 12.407 13.9057 12.6653 13.782 12.908C13.5903 13.2843 13.2843 13.5903 12.908 13.782C12.6653 13.9057 12.407 13.9549 12.1259 13.9779C11.8553 14 11.5231 14 11.1207 14H11.1H4.9H4.87934C4.47686 14 4.14468 14 3.87409 13.9779C3.59304 13.9549 3.33469 13.9057 3.09202 13.782C2.7157 13.5903 2.40973 13.2843 2.21799 12.908C2.09434 12.6653 2.04506 12.407 2.0221 12.1259C1.99999 11.8553 1.99999 11.5231 2 11.1207V11.1206V11.1V4.9V4.87935V4.87932V4.87931C1.99999 4.47685 1.99999 4.14468 2.0221 3.87409C2.04506 3.59304 2.09434 3.33469 2.21799 3.09202C2.40973 2.71569 2.7157 2.40973 3.09202 2.21799C3.33469 2.09434 3.59304 2.04506 3.87409 2.0221C4.14468 1.99999 4.47685 1.99999 4.87932 2H4.87935H4.9H9.99998Z"
                                fill="currentColor"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            <span>Edit Profile</span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </Popover.Dropdown>
                </Popover>
              </div>
            </div>
          ) : (
            <div className="flex space-x-2 items-center">
              <div className="hidden /*flex*/ items-center bg-secondaryBg px-3 py-2 rounded-lg w-full mx-4">
                <svg
                  className=""
                  width={18}
                  height={18}
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="text"
                  className="bg-secondaryBg focus:outline-none px-2 py-1 text-gray-900 sm:text-sm w-full"
                  placeholder="Search for revision rooms..."
                />
              </div>
              <a
                href="#"
                className="ml-2 sm:ml-0 flex border-primary text-primary border-2 rounded-lg bg-tertiary px-2 xs:px-4 py-1 xs:py-2 text-sm sm:text-base"
              >
                <span className="pr-1">Get</span>
                <span>Started</span>
              </a>
              <a
                href="#"
                className="flex  text-primary underline px-2 sm:px-4 py-2 text-sm sm:text-base"
              >
                <span>LogIn</span>
              </a>
            </div>
          )}
        </div>
      </div>
      {/* Mobile Search Bar */}
      {mobileSearch !== false && (
        <div className="block md:hidden px-4 pb-1">
          {" "}
          <Autocomplete
            icon={
              <svg
                className=""
                width={18}
                height={18}
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            }
            value={searchInputValue}
            onChange={setsearchInputValue}
            variant="unstyled"
            radius="md"
            size="md"
            placeholder="Search for rivision rooms..."
            data={["Exponentials", "Logarithms", "Binomial", "Distribution"]}
            className="bg-secondaryBg focus:outline-none text-gray-900 sm:text-sm w-full rounded-[4px]"
          />
        </div>
      )}
    </nav>
  );
}
