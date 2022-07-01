import { MdExpandMore } from "react-icons/md";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { GrFacebookOption } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import  {memberData}  from "../utils/data";

const featuredsection = () => {

console.log(memberData)

  return (
    <div
      className="flex flex-col items-center justify-center h-screen px-20 py-5 gap-5 w-full 
     bg-white"
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

      <div className="flex justify-center drop-shadow-md">
        <div className="flex flex-row w-4/5 overflow-hidden items-center justify-center">
        {
            memberData.map((member)=>{
                return(
                       <div className="flex flex-col p-3">
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
              <div className="flex flex-row justify-between bg-white rounded-xl px-7 py-7 z-50 drop-shadow-md mt-72 ml-7 gap-3">
                {/* text  */}
                <div className="flex flex-col justify-center gap-1">
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
                )
            })
        }

        </div>
      </div>
    </div>
  );
};

export default React.memo(featuredsection);
