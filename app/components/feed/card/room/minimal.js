"use client";
import Link from "next/link";
import React from "react";

export default function minimal({ number, title, id }) {
  return (
    <Link href={`/room/${id}`}>
      <div className="flex space-x-2 justify-between w-[16rem] md:w-auto px-4 py-3 rounded-lg bg-secondaryBg">
        <div className="flex flex-col space-y-0">
          <h4 className="text-base font-dm-sans font-normal">{title}</h4>
          <p className="flex space-x-1 items-center text-secondary w-full">
            <span className="">
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
            </span>
            <span className="text-sm">{number} listening</span>
          </p>
        </div>
        <button className="h-fit text-[12px] font-dm-sans sm:text-sm border-[1px] border-primary px-[6px] py-[2px] rounded-[4px] inline-block mr-1 text-primary">
          Join
        </button>
      </div>
    </Link>
  );
}
