import { MdExpandMore } from "react-icons/md";
import Image from "next/image";
import productImages from "../../public/assets/home";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const promotionsection = () => {
  const { ref, inView } = useInView({
    threshold: [0, 0.5, 1.0],
  });
  const leftAnimation = useAnimation();
  const rightAnimation = useAnimation();
  const btnAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      leftAnimation.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 1,
          bounce: 0.3,
        },
      });

      rightAnimation.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 1,
          bounce: 0.3,
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

  return (
    <div className="bubblePattern">
      <div
        ref={ref}
        className="flex flex-col md:flex-row lg:flex-row xl:flex-row items-center justify-center h-screen px-20 py-5 gap-5 w-full 
     bg-gradient-to-r from-white to-transparent bg-white bg-opacity-70"
      >
        {/* Left Side  */}
        <div className="flex justify-center items-center xl:w-1/2 lg:w-1/2 md:w-1/2 h-1/2 w-full">
          <motion.div
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
        <div className="flex flex-col justify-center items-center gap-5  xl:w-1/2 lg:w-1/2 md:w-1/2 h-1/2 w-screen">
          <div className="flex flex-col justify-center gap-5 w-2/3">
            <motion.h3
              animate={leftAnimation}
              className="text-violet-500 text-xl flex flex-row"
            >
              Every Purchase Will Be Made With Pleasure
            </motion.h3>
            <motion.h1
              animate={rightAnimation}
              className="text-3xl font-extrabold text-slate-800"
            >
              Upto <span className="text-violet-500">70%</span> OFF...
            </motion.h1>
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3, delay: 0.5 }}
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
      </div>
    </div>
  );
};

export default React.memo(promotionsection);
