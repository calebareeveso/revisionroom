"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
export default function room({ listeners, title, id, description, tags }) {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <>
      {domLoaded && (
        <Link href={`/room/${id}`}>
          <div className="w-full inline-block mr-4">
            <div className="bg-primary px-4 pt-3 pb-1 rounded-t-lg">
              <div className="flex space-x-2 items-center">
                <span>
                  <svg
                    width={12}
                    height={12}
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle opacity="0.5" cx={6} cy={6} r={6} fill="#D9E9FF" />
                    <circle cx="6.0002" cy="6.0002" r="2.8" fill="white" />
                  </svg>
                </span>
                <span className="text-white font-dm-sans font-medium text-sm sm:text-base">
                  LIVE
                </span>
              </div>
              <h3 className="text-white text-xl font-dm-sans sm:pb-3 pt-1">
                {title}
              </h3>
              <div className="hidden sm:block">
                {tags.map((tag) => (
                  <span className="text-[12px] font-dm-sans sm:text-sm border-[1px] border-tertiary px-[6px] py-[2px] rounded-[4px] inline-block mr-1.5 text-tertiary">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex space-x-2 items-center sm:mt-2">
                <div className="flex -space-x-2 items-center">
                  {listeners.profiles.slice(0, 3).map(({ photoURL }) => (
                    <img
                      className=" h-6 w-6 border-[1px] border-primary rounded-[100%]"
                      src={photoURL}
                      loading={"lazy"}
                    />
                  ))}
                </div>
                <span className="text-sm font-dm-sans sm:text-sm block my-2 mr-2 text-tertiary">
                  {listeners.noOfListeners} listening
                </span>
              </div>
            </div>
            <div className="bg-[#2983FF] py-2 px-4 rounded-b-lg">
              <div className="flex items-center justify-between">
                <div>
                  <span className="bg-[#398DFF] px-2 py-1 rounded-[5px] text-[10px] font-dm-sans sm:text-sm text-tertiary">
                    About Room
                  </span>
                  <span className="text-[12px] font-dm-sans sm:text-sm block my-2 mr-2 text-white pl-1">
                    {description}
                  </span>
                </div>
                <Link href={`/room/${id}`} className="">
                  <span>
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20ZM10.47 6.47C10.6106 6.32955 10.8012 6.25066 11 6.25066C11.1988 6.25066 11.3894 6.32955 11.53 6.47L14.53 9.47C14.6705 9.61063 14.7493 9.80125 14.7493 10C14.7493 10.1988 14.6705 10.3894 14.53 10.53L11.53 13.53C11.4613 13.6037 11.3785 13.6628 11.2865 13.7038C11.1945 13.7448 11.0952 13.7668 10.9945 13.7686C10.8938 13.7704 10.7938 13.7518 10.7004 13.7141C10.607 13.6764 10.5222 13.6203 10.451 13.549C10.3797 13.4778 10.3236 13.393 10.2859 13.2996C10.2482 13.2062 10.2296 13.1062 10.2314 13.0055C10.2332 12.9048 10.2552 12.8055 10.2962 12.7135C10.3372 12.6215 10.3963 12.5387 10.47 12.47L12.19 10.75H6C5.80109 10.75 5.61032 10.671 5.46967 10.5303C5.32902 10.3897 5.25 10.1989 5.25 10C5.25 9.80109 5.32902 9.61032 5.46967 9.46967C5.61032 9.32902 5.80109 9.25 6 9.25H12.19L10.47 7.53C10.3295 7.38937 10.2507 7.19875 10.2507 7C10.2507 6.80125 10.3295 6.61063 10.47 6.47Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}
