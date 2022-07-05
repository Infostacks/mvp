import { MdExpandMore } from "react-icons/md";
import Image from "next/image";
import productImages from '../../public/assets/home'
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion"


const promotionsection = () => {
  const {ref, inView} = useInView({
    threshold: 0
  });
  const leftAnimation = useAnimation();
  const rightAnimation = useAnimation();

  useEffect(() => {
    if(inView){
      leftAnimation.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 5, bounce: 0.3
        }
      });

      rightAnimation.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 5,
          bounce: 0.3,
        },
      });
    }
    if(!inView){
      leftAnimation.start({ x: "-100vw", opacity: 0 });
      rightAnimation.start({ x: "100vw", opacity: 0 });
    }
  },[inView])

  return (
    <div
      ref={ref}
      className="flex flex-row items-center justify-center h-screen px-20 py-5 gap-5 w-full 
     bg-gradient-to-r from-violet-300 to-slate-100"
    >
      {/* Left Side  */}
      <div className="flex justify-center w-1/2">
        <motion.div
          // initial={{
          //   opacity: 0,
          // }}
          // animate={{ opacity: 1 }}
          // transition={{ duration: 3, delay: 0.5 }}
          animate={leftAnimation}
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
        <h3 className="text-violet-500 text-xl flex flex-row">
          {"Every Purchase Will Be Made With Pleasure"
            .split("")
            .map((character, i) => {
              return (
                <div>
                  <motion.span
                    initial={{
                      opacity: 0,
                      translateX: i % 2 === 0 ? -50 : 50,
                      translateY: -50,
                    }}
                    animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.5 }}
                  >
                    {character}
                  </motion.span>
                </div>
              );
            })}
        </h3>
        <motion.h1
          animate={rightAnimation}
          // initial={{
          //   opacity: 0,
          //   translateY: -50,
          // }}
          // animate={{ opacity: 1, translateY: [10, -5, 0] }}
          // transition={{ duration: 2 }}
          className="text-3xl font-extrabold text-slate-800"
        >
          Upto <span className="text-violet-500">70%</span> OFF...
        </motion.h1>
        <motion.p
          animate={rightAnimation}
          // initial={{
          //   opacity: 0,
          // }}
          // animate={{ opacity: 1 }}
          // transition={{ duration: 3, delay: 0.5 }}
          className="text-sm text-slate-600"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
          repellendus nihil fuga unde voluptas voluptates perspiciatis
          aspernatur.
        </motion.p>
        <div className="flex flex-row items-center justify-start gap-3">
          <motion.button
            initial={{
              opacity: 0,
              translateY: -250,
            }}
            animate={{ opacity: 1, translateY: [30, -25, 20, -15, 10, 0] }}
            transition={{ duration: 3, delay: 0.5, type: "spring" }}
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
            Shop Now
          </span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(promotionsection);
