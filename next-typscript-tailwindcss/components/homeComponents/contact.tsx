import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MdExpandMore } from "react-icons/md";

const contact = () => {

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

    const uRef = useRef(null);
    useEffect(() => {
        import("@lottiefiles/lottie-player");
    }, []);

    return (
      <div
        ref={ref}
        className="flex flex-col md:flex-row lg:flex-row xl:flex-row  items-center justify-center h-screen px-20 py-5 gap-5 w-full"
      >
        {/* Left side form */}
        <div className="flex flex-col justify-center items-center xl:gap-5 lg:gap-5 md:gap-5 gap-2 xl:w-1/2 lg:w-1/2 md:w-1/2 h-1/2 w-screen">
          <div className="flex flex-col justify-center items-center gap-5 w-11/12">
            <h1 className="rounded-xl px-3 py-2 w-28 bg-violet-100 text-violet-500 font-semibold">
              Contact Us
            </h1>
            <motion.h1
              animate={leftAnimation}
              className=" xl:text-2xl lg:text-2xl md:text-2xl text-md xl:font-extrabold lg:font-extrabold font-bold text-slate-800"
            >
              We Love To Help Great Companies To Enlarge Their Revenues.
            </motion.h1>
            <form className="flex flex-col gap-2 items-centre z-40 drop-shadow-sm xl:w-3/5 lg:w-3/5 w-5/6">
              <input
                type="text"
                name="user_name"
                className="border-[1px] border-zinc-200 text-sm rounded-full focus:outline-none px-5 py-2 bg-violet-100 w-full"
                placeholder="Name"
              />
              <input
                type="email"
                name="user_email"
                className="border-[1px] border-zinc-200 text-sm rounded-full focus:outline-none px-5 py-2 bg-violet-100 w-full"
                placeholder="Email"
              />
              <textarea
                name="message"
                className="border-[1px] border-zinc-200 text-sm rounded-3xl focus:outline-none px-5 py-2 bg-violet-100 w-full h-[10rem]"
                placeholder="Message"
              />
              <div className="flex flex-row items-center justify-start gap-3">
                <motion.button
                  animate={btnAnimation}
                  type="submit"
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
                  Submit Now
                </span>
              </div>
            </form>
          </div>
        </div>

        {/* Right Side  */}
        <div className="flex flex-col justify-center items-center xl:w-1/2 xl:h-full lg:h-full md:h-full lg:w-1/2 md:w-1/2  h-1/2 w-screen">
          {/* Lottie animation code here */}
          <lottie-player
            id="firstLottie"
            ref={ref}
            autoplay
            loop
            mode="normal"
            src="https://assets8.lottiefiles.com/packages/lf20_7wwm6az7.json"
          ></lottie-player>
        </div>
      </div>
    );
}

export default contact;