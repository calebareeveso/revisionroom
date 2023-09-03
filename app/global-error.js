"use client";

import Link from "next/link";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <div className="w-full h-screen flex items-center justify-around">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl mb-3">
              You Broke Something! 😬
            </h2>
            <Link
              className="w-fit mt-3 mx-auto flex border-primary text-primary border-2 rounded-lg bg-secondaryBg px-4 py-2 text-sm sm:text-base"
              href="/feed"
            >
              Please Go Home!!
            </Link>
            <pre className="rounded-lg bg-secondaryBg px-2 py-2 text-sm w-full">
              {error}
            </pre>
          </div>
        </div>
      </body>
    </html>
  );
}
