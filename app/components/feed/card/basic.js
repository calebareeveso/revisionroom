"use client";
import React from "react";
import Image from "next/image";
export default function basic({ number, title, image, type }) {
  return (
    <div className="flex space-x-2">
      <Image src={image} width={50} height={50} alt="picture" />

      <div className="flex flex-col space-y-0">
        <h4 className="text-base font-dm-sans font-normal">{title}</h4>
        <p className="flex space-x-1 items-center text-secondary">
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
          <span className="text-sm">
            {type == "school"
              ? `${number} students`
              : type == "student"
              ? "Active"
              : "--"}
          </span>
        </p>
      </div>
    </div>
  );
}
