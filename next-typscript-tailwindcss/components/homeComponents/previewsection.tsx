import { MdExpandMore } from "react-icons/md";
// import Image from "next/image";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const previewsection = () => {
  const animList = [
    "https://assets9.lottiefiles.com/packages/lf20_hcwpcdew.json",
    "https://assets2.lottiefiles.com/packages/lf20_01jwptn4.json",
    "https://assets4.lottiefiles.com/packages/lf20_mjr11zfo.json",
    "https://assets4.lottiefiles.com/packages/lf20_pwohahvd.json",
    "https://assets4.lottiefiles.com/packages/lf20_jtbfg2nb.json",
    "https://assets8.lottiefiles.com/packages/lf20_s72aydoa.json",
    "https://assets4.lottiefiles.com/packages/lf20_rhe84poa.json",
    "https://assets4.lottiefiles.com/packages/lf20_fdo4fhy6.json",
    "https://assets4.lottiefiles.com/packages/lf20_wqd1jwoz.json",
    "https://assets4.lottiefiles.com/packages/lf20_8morfz5o/divices2.json",
    "https://assets4.lottiefiles.com/packages/lf20_9oliqaij.json",
    "https://assets4.lottiefiles.com/packages/lf20_2lruogho.json",
    "https://assets4.lottiefiles.com/packages/lf20_xfx6wio6.json",
    "https://assets4.lottiefiles.com/packages/lf20_6YVCqP.json",
    "https://assets8.lottiefiles.com/packages/lf20_yjkyGT.json",
    "https://assets8.lottiefiles.com/private_files/lf30_vAtD7F.json",
    "https://assets8.lottiefiles.com/private_files/lf30_FQVNNa.json",
    "https://assets8.lottiefiles.com/private_files/lf30_51QyOY.json",
  ];

  const [animListNo, setAnimListNo] = useState(0);
  const isMounted = useRef(false);

  useEffect(() => {
    console.log("im here");
    let number = localStorage.getItem("animList");
    console.log("number 1st: ", number);
    // number = animListNo + 1 >= animList.length ? "0" : (animListNo + 1).toString();
    // console.log("number 2nd: ", number);
    // localStorage.setItem("animList", (Number(number)+1).toString());
    // setAnimListNo(Number(number));

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
  },[]);

  return (
    <div
      className="flex flex-row items-center justify-center h-screen px-20 py-5 gap-5 w-full 
     bg-gradient-to-r from-slate-100 to-violet-300"
    >
      {/* Left Side  */}
      <div className="flex justify-center w-1/2">
        <div className="flex flex-col justify-center gap-5 w-2/3">
          <h3 className="text-violet-500 text-lg">WE CREATE IDEAS</h3>
          <h1 className="text-3xl font-extrabold text-slate-800">
            Build Stunning <span className="text-violet-500">Website</span>{" "}
            InfoStack Tech
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
              Learn More
            </span>
          </div>
        </div>
      </div>

      {/* Right Side  */}
      <div className="flex flex-col justify-center items-center w-1/2">
        {/* Lottie animation code here */}
        <lottie-player
          id="firstLottie"
          ref={ref}
          autoplay
          // controls
          loop
          // mode="normal"
          // src="https://assets2.lottiefiles.com/packages/lf20_01jwptn4.json"
          src={animList[animListNo]}
        ></lottie-player>
      </div>
    </div>
  );
};

export default React.memo(previewsection);
