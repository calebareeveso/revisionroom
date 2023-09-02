import React from "react";

export default function footer() {
  return (
    <footer
      style={{ backgroundImage: 'url("/images/pattern_bg.svg")' }}
      className="block bg-center bg-no-repeat bg-cover"
    >
      <div className="max-w-7xl mx-auto">
        <div className="container mx-auto ">
          <div className="text-center py-28 w-full ">
            <p className="text-white text-2xl sm:text-3xl font-dm-sans mb-6">
              Revise with students <br />
              from across England
            </p>
            <a
              href="#"
              className="mx-auto text-primary rounded-lg bg-white px-4 py-2 txet-base sm:text-xl font-dm-sans"
            >
              <span className="pr-1">Get Started</span>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 md:px-0">
          <div className="container mx-auto ">
            <div className="py-4 flex flex-col xs:flex-row text-center xs:justify-between">
              <a href="/" className="flex justify-around">
                <img
                  className="h-4 mr-3 self-center "
                  src="/images/logo_footer.svg"
                />
              </a>
              <span className="text-white text-sm mt-2 xs:mt-0 font-dm-sans">
                Copyright © 2023 RevisionRoom
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
