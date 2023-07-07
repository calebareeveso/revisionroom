"use client";
import React from "react";
import BasicCard from "../card/basic";
import Minimal from "../card/room/minimal";
export default function Popular({ className, data }) {
  return (
    <aside className={`${className} `}>
      <div className="rounded-lg bg-white px-4 py-2 my-4 md:my-0 mr-2 md:mr-0">
        <h4 className="font-dm-sans text-md md:text-xl font-medium mb-2">
          Popular Rooms
        </h4>

        <div className="flex space-x-2 w-full overflow-x-scroll md:flex-col md:space-x-0 md:space-y-3 pb-2 md:pb-0">
          {data.map(({ listeners, title, id }) => (
            <Minimal
              key={id}
              number={listeners.noOfListeners}
              title={title}
              id={id}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}
