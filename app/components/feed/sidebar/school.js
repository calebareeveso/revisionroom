"use client";
import React from "react";
import BasicCard from "../card/basic";
export default function school({ className, data, slice }) {
  return (
    <aside className={`${className} rounded-lg bg-white px-4 py-2`}>
      <h4 className="font-dm-sans text-md md:text-xl font-medium mb-2">
        Schools
      </h4>

      <div className="flex flex-col space-y-3">
        {data.slice(0, slice).map(({ number, title, image }) => (
          <BasicCard
            key={image}
            number={number}
            title={title}
            image={image}
            type="school"
          />
        ))}
      </div>
    </aside>
  );
}
