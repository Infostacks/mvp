import React, { useEffect, useState } from "react";
import { MdExpandMore } from "react-icons/md";
import { motion, useAnimation } from "framer-motion";
import { animList } from "../utils/data";
import { useInView } from "react-intersection-observer";
import Lottie from 'react-lottie-player'
import axios from "axios";

const previewsection = () => {
  const { ref, inView } = useInView({
    threshold: [0, 0.5, 1.0],
  });
  const leftAnimation = useAnimation();
  const rightAnimation = useAnimation();
  const btnAnimation = useAnimation();
  const [animListNo, setAnimListNo] = useState(0);

  const [animationData, setAnimationData] = useState(null);


  console.log("animListNo", animListNo)




  useEffect(() => {
    if (inView) {
      leftAnimation.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 1.5,
          bounce: 0.5,
        },
      });

      rightAnimation.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 1.5,
          bounce: 0.5,
        },
      });

      btnAnimation.start({
        opacity: 1,
        translateY: [30, -25, 20, -15, 10, 0],
        transition: { duration: 3, delay: 0.5, type: "spring" },
      });
    }
    if (!inView) {
      leftAnimation.start({ x: "-5vw", opacity: 0 });
      rightAnimation.start({ x: "5vw", opacity: 0 });
      btnAnimation.start({ opacity: 0, translateY: "-80vh" });
    }
  }, [inView]);







  const loadAnimData = async (sourceUrl) => {
    try {
      const { data } = await axios.get(sourceUrl);
      // const { data } = await axios.get(
      //   "https://assets6.lottiefiles.com/packages/lf20_xsicerbj.json"
      // );
      
      setAnimationData(data)
    } catch (error) {
      console.log("Error", error)
    }
  }


  useEffect(() => {
    loadAnimData(animList[0])

  }, [])

  useEffect(() => {

    const changeNumber = () => {
      let n = Number(animListNo) + 1 === animList.length ? 0 : Number(animListNo) + 1;
      setAnimListNo(n);
      loadAnimData(animList[n])
    }
    let timerID = setInterval(changeNumber, 8000);

    return () => clearInterval(timerID);

  }, [animListNo]);







  return (
    <div className="bubblePattern scrollbar-hide">
      <div
        ref={ref}
        className="flex flex-col md:flex-row lg:flex-row xl:flex-row items-center justify-center h-screen px-20 py-5 gap-5 
     bg-gradient-to-r from-transparent to-white bg-white bg-opacity-70"
      >
        {/* Left Side  */}
        <div className="flex justify-center xl:w-1/2 lg:w-1/2 md:w-1/2 h-1/2 w-screen">
          <div className="flex flex-col justify-center gap-5 w-2/3">
            <h3 className="text-violet-500 text-2xl">
              {"WE CREATE IDEAS".split("").map((character, i) => {
                return (
                  <motion.span
                    initial={{
                      opacity: 0,
                      translateX: i % 2 === 0 ? -50 : 50,
                      translateY: -50,
                    }}
                    animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.2 }}
                    key={i}
                  >
                    {character}
                  </motion.span>
                );
              })}
            </h3>
            <motion.h1
              animate={leftAnimation}
              className="text-3xl font-extrabold text-slate-800"
            >
              Build Stunning <span className="text-violet-500">Website</span>{" "}
              InfoStack Tech
            </motion.h1>
            <motion.p
              animate={rightAnimation}
              className="text-sm text-slate-600"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              repellendus nihil fuga unde voluptas voluptates perspiciatis
              aspernatur.
            </motion.p>
            <div className="flex flex-row items-center justify-start gap-3">
              <motion.button
                animate={btnAnimation}
                className="rounded-full bg-violet-500 p-2 text-3xl text-white"
              >
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
              </motion.button>
              <span className="text-violet-500 font-semibold hover:text-violet-700 hover:cursor-pointer">
                Learn More
              </span>
            </div>
          </div>
        </div>

        {/* Right Side  */}
        <div className="flex flex-col justify-center items-center xl:w-1/2 lg:w-1/2 md:w-1/2  h-1/2 w-screen">
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Lottie loop animationData={animationData} play speed={0.3} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(previewsection);
