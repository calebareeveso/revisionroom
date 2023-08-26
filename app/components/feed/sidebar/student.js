"use client";
import React from "react";
import BasicCard from "../card/basic";
export default function student({ className, data, slice }) {
  return (
    <aside className={`${className} rounded-lg bg-white px-4 py-2`}>
      <h4 className="font-dm-sans text-md md:text-xl font-medium mb-2">
        People
      </h4>
      <div className="md:h-[82vh] md:overflow-y-scroll">
        {data.filter(({ active }) => active !== false).length > 0 && (
          <div>
            <h5 className="text-sm text-secondary font-dm-sans font-medium mb-2">
              ONLINE
            </h5>
            <div className="flex flex-col space-y-3 ">
              {/* doc.data().active !== false */}
              {data
                .filter(({ active }) => active !== false)
                .slice(0, slice)
                .map(({ number, fullname, photoURL, active }) => (
                  <BasicCard
                    key={photoURL}
                    number={number}
                    fullname={fullname}
                    photoURL={photoURL}
                    type="student"
                    active={active}
                  />
                ))}
            </div>
          </div>
        )}
        {data.filter(({ active }) => active !== true).length > 0 && (
          <div className="mt-6">
            <h5 className="text-sm text-secondary font-dm-sans font-medium my-2">
              OFFLINE
            </h5>
            <div className="flex flex-col space-y-3 ">
              {data
                .filter(({ active }) => active !== true)
                .slice(0, slice)
                .map(({ number, fullname, photoURL }) => (
                  <BasicCard
                    key={photoURL}
                    number={number}
                    fullname={fullname}
                    photoURL={photoURL}
                    type="student"
                  />
                ))}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
