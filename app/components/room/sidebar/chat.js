"use client";
import React from "react";
export default function chat({ className, data, slice }) {
  return (
    <aside className={`${className} rounded-lg bg-white px-4 py-2`}>
      <h4 className="font-dm-sans text-md md:text-xl font-medium mb-2">Chat</h4>

      <div className="flex flex-col space-y-3">DATA.MAP()</div>
    </aside>
  );
}
