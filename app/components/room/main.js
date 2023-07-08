"use client";
import React, { useEffect, useState } from "react";
// mantine
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";

export default function mainRoom({ className, data }) {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedTag, setSelectedTag] = useState(["maths"]);

  return (
    <section className="pr-2">
      <div className="rounded-t-lg bg-white px-4 py-2">
        <h4 className="font-dm-sans text-xl xs:text-2xl font-medium mb-0">
          Exponential and logarithms revision
        </h4>
        <p className="font-dm-sans text-base xs:text-md font-normal text-secondary mb-1">
          Revision room for student trying to Advanced Exponentials and
          logarithms
        </p>
        <div className="">
          {data.tags.map((tag) => (
            <span className="text-sm font-dm-sans sm:text-base border-[1px] border-secondary px-[6px] py-[2px] rounded-[4px] inline-block mr-1.5 text-secondary">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="block w-full pt-0.5 m-0 bg-secondaryBg"></div>
      <div className="rounded-b-lg bg-white px-4 py-2 flex flex-col space-y-2">
        <div className="flex flex-col xs:flex-row xs:space-x-3 space-y-2 xs:space-y-0 items-center">
          <button className="flex justify-around rounded-[5px] bg-secondaryBg text-primary px-3 py-2 w-full xs:w-fit">
            <span className="font-dm-sans mx-auto items-center flex space-x-2 text-">
              <svg
                className="h-4 w-4"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.351893 0.679688H0.2C0.0895431 0.679688 0 0.769231 0 0.879687V1.79988H0.00679622L0.00167308 4.1212C-0.000674502 5.23289 -0.000645914 6.03356 0.00236012 6.56067H0V7.48086C0 7.59132 0.089543 7.68086 0.2 7.68086H1.1875V7.67395L1.65849 7.67647L1.66232 7.67649L2.96578 7.68305L2.96115 8.3766L2.95419 9.07016L2.62948 9.0811C2.27926 9.09204 2.22128 9.10954 2.10299 9.22768C1.8757 9.45303 1.9476 9.81184 2.25143 9.95843C2.33493 9.99781 2.42538 10 4.92562 10C7.21249 10 7.52328 9.99562 7.59982 9.96499C7.91757 9.84029 8.0057 9.4596 7.77145 9.22768C7.65316 9.10954 7.59518 9.09204 7.24496 9.0811L6.92025 9.07016L6.91329 8.3766L6.90866 7.68305L8.21212 7.67649L8.66876 7.67419V7.68086H9.65626C9.76672 7.68086 9.85626 7.59132 9.85626 7.48086V7.38339L9.86581 7.37018V4.17152V1.81109H9.8681V0.8909C9.8681 0.780443 9.77856 0.6909 9.6681 0.6909H9.56704L9.56661 0.690627L4.96041 0.684064L1.1875 0.680481V0.679688H0.351893Z"
                  fill="#398DFF"
                />
                <g clip-path="url(#clip0_0_1)">
                  <path
                    d="M5.16684 5.53337H4.83351V3.53337L3.91684 4.45004L3.68018 4.21337L5.00018 2.89337L6.32018 4.21337L6.08351 4.45004L5.16684 3.53337V5.53337Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_1">
                    <rect
                      width="4"
                      height="4"
                      fill="white"
                      transform="translate(3 2.20001)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <span>Share Screen</span>
            </span>
          </button>
          <button className="flex justify-around rounded-[5px] bg-secondaryBg text-primary px-3 py-2 w-full xs:w-fit">
            <span className="font-dm-sans mx-auto items-center flex space-x-2 text-">
              <svg
                className="h-4 w-4"
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.75 0C1.28587 0 0.840752 0.17779 0.512563 0.494257C0.184374 0.810725 0 1.23995 0 1.6875V7.3125C0 7.76005 0.184374 8.18927 0.512563 8.50574C0.840752 8.82221 1.28587 9 1.75 9H7.58333C8.04746 9 8.49258 8.82221 8.82077 8.50574C9.14896 8.18927 9.33333 7.76005 9.33333 7.3125V1.6875C9.33333 1.23995 9.14896 0.810725 8.82077 0.494257C8.49258 0.17779 8.04746 0 7.58333 0H1.75ZM14 0.5625C13.9999 0.45132 13.9656 0.342663 13.9015 0.250251C13.8374 0.157839 13.7464 0.0858183 13.6398 0.0432848C13.5333 0.000751248 13.4161 -0.0103873 13.303 0.011276C13.1899 0.0329393 13.086 0.0864325 13.0044 0.165L10.6711 2.415C10.5617 2.52039 10.5001 2.66337 10.5 2.8125V6.1875C10.5 6.33675 10.5614 6.48 10.6711 6.585L13.0044 8.835C13.086 8.91357 13.1899 8.96706 13.303 8.98872C13.4161 9.01039 13.5333 8.99925 13.6398 8.95672C13.7464 8.91418 13.8374 8.84216 13.9015 8.74975C13.9656 8.65734 13.9999 8.54868 14 8.4375V0.5625Z"
                  fill="#398DFF"
                />
                <path
                  d="M4.96665 5.83336H4.63331V3.83336L3.71665 4.75003L3.47998 4.51336L4.79998 3.19336L6.11998 4.51336L5.88331 4.75003L4.96665 3.83336V5.83336Z"
                  fill="white"
                />
              </svg>

              <span>Start Camera</span>
            </span>
          </button>
        </div>
        {/* WHITE BOARD STARTS */}
        <div className="rounded-lg border-tertiary border-2 bg-secondaryBg py-20 text-center font-hi-melody text-3xl">
          <p>White Board</p>
        </div>
        {/* WHITE BOARD ENDS */}
      </div>
    </section>
  );
}
