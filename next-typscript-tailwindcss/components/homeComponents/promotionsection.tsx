import { MdExpandMore } from "react-icons/md";
import Image from "next/image";
import productImages from '../../public/assets/home'
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import animData from "../utils/data.js";


const promotionsection = () => {
  const animList = animData;

  const [animListNo, setAnimListNo] = useState(0);

  useEffect(() => {
    let number = localStorage.getItem("animList");

    if (number === undefined) {
      setAnimListNo(0);
      localStorage.setItem("animList", "0");
    } else {
      number =
      Number(number) + 1 >= animList.length
      ? "0"
      : (Number(number) + 1).toString();
      console.log("number 2nd: ", number);
      localStorage.setItem("animList", number);
      setAnimListNo(Number(number));
    }
  
  }, []);

  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  }, []);

  return (
    <div
      className="flex flex-row items-center justify-center h-screen px-20 py-5 gap-5 w-full 
     bg-gradient-to-r from-violet-300 to-slate-100"
    >
      {/* Left Side  */}
      <div className="flex justify-center w-1/2">
        <motion.div
          variants={{
            hidden: {
              opacity: 1,
            },
            visible: {
              opacity: 1,
              transition: {
                opacity: {
                  yoyo: Infinity,
                  duration: 1,
                  delay: 1,
                  type: "spring",
                },
              },
            },
            removed: {
              opacity: 1,
            },
          }}
          initial="hidden"
          animate="visible"
          className=""
        >
          <Image
            src={productImages.product1}
            unoptimized
            width="370"
            height="270"
            className="shadow-md rounded-3xl z-50 opacity-80"
          />
        </motion.div>
      </div>

      {/* Right Side  */}
      <div className="flex flex-col justify-center items-center w-1/2"></div>
      <div className="flex flex-col justify-center gap-5 w-2/3">
        <h3 className="text-violet-500 text-xl">
          Every Purchase Will Be Made With Pleasure
        </h3>
        <h1 className="text-3xl font-extrabold text-slate-800">
          Upto <span className="text-violet-500">70%</span> OFF...
        </h1>
        <p className="text-sm text-slate-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
          repellendus nihil fuga unde voluptas voluptates perspiciatis
          aspernatur.
        </p>
        <div className="flex flex-row items-center justify-start gap-3">
          <button className="rounded-full bg-violet-500 p-2 text-3xl text-white">
            <motion.div
              variants={{
                hidden: {
                  opacity: 1,
                },
                visible: {
                  rotateZ: [25, -25],
                  transition: {
                    rotateZ: {
                      yoyo: Infinity,
                      duration: 1,
                      delay: 1,
                      type: "spring",
                    },
                  },
                },
                removed: {
                  opacity: 1,
                },
              }}
              initial="hidden"
              animate="visible"
            >
              <MdExpandMore />
            </motion.div>
          </button>
          <span className="text-violet-500 font-semibold hover:text-violet-700 hover:cursor-pointer">
            Shop Now
          </span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(promotionsection);
