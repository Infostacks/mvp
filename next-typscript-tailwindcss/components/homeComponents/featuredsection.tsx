import Image from "next/image";
import React, { useEffect } from "react";
import { GrFacebookOption } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { memberData } from "../utils/data";

import ScrollBooster from "scrollbooster";

const featuredsection = () => {
  useEffect(() => {
    new ScrollBooster({
      viewport: document.querySelector(".card-container"),
      content: document.querySelector(".card-container-content"),
      direction: "horizontal",
      scrollMode: "transform",
      bounce: true,
      emulateScroll: true, // scroll on wheel events
    });
  }, []);

  return (
    <div className="bubblePattern">
      <div
        className="example example4 bg-white bg-opacity-80 flex flex-col items-center justify-center h-screen py-5 gap-5"
      >
        {/* Team  */}
        <div className="flex justify-center">
          <h1 className="rounded-xl px-8 py-3 bg-violet-100 text-violet-500 font-semibold">
            Featured Team
          </h1>
        </div>

        <div className="flex justify-center">
          <h1 className="text-violet-900 font-bold text-3xl">
            Our Best Expertise
          </h1>
        </div>

        <div className="App">
          <div className="container drop-shadow-md hover:cursor-grab">
            <div className="card-container flex rounded-2xl">
              <div className="flex flex-row gap-3 p-3 card-container-content">
                {memberData.map((member, index) => {
                  return (
                    <div className="flex flex-row" key={index}>
                      {/* image  */}
                      <div className=" absolute">
                        <Image
                          src={member.img}
                          unoptimized
                          width="310"
                          height="350"
                          className="rounded-2xl"
                        />
                      </div>
                      {/* intro  */}
                      <div className="flex flex-row justify-between bg-white rounded-xl px-4 py-6 z-50 drop-shadow-md mt-72 ml-4 gap-3 w-full">
                        {/* text  */}
                        <div className="flex flex-col flex-wrap justify-center gap-1">
                          <h1 className="text-2xl font-bold text-violet-900">
                            {member.name}
                          </h1>
                          <h3 className="text-xs text-violet-900">
                            {member.designation}
                          </h3>
                        </div>
                        {/* icons  */}
                        <div className="flex flex-row justify-center items-center gap-2">
                          <div className="bg-violet-100 p-3 rounded-full text-violet-500">
                            <GrFacebookOption />
                          </div>
                          <div className="bg-violet-100 p-3 rounded-full text-violet-500">
                            <FaInstagram />
                          </div>
                          <div className="bg-violet-100 p-3 rounded-full text-violet-500">
                            <GrTwitter />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(featuredsection);
