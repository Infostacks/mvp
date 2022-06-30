import { MdExpandMore } from "react-icons/md";
import Image from "next/image";
import myGif from "../../public/jsonanims/previewBG.gif";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import * as LottiePlayer from "@lottiefiles/lottie-player";
import growBusiness from '../../public/jsonanims/growBusiness.json'
import styles from '../../styles/Global.js'

const previewsection = () => {
    // const container = useRef(null);

    const ref = useRef(null);
    React.useEffect(() => {
      import("@lottiefiles/lottie-player");
    });

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: growBusiness,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    // useEffect(() =>{
    //     lottie.loadAnimation({
    //       container: container.current,
    //       renderer: "svg",
    //       loop: true,
    //       autoplay: true,
    //       animationData: require("../../public/jsonanims/growBusiness.json"),
    //     });
    //     lottie.setSpeed(0.4);
    // }, [])

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

        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        <lottie-player
          id="firstLottie"
          ref={ref}
          autoplay
          // controls
          loop
          // mode="normal"
          src="https://assets2.lottiefiles.com/packages/lf20_01jwptn4.json"
          // style={{ width: "300px", height: "300px" }}
        ></lottie-player>
      </div>
    </div>
  );
};

export default previewsection;
