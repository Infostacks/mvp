import { FaInstagram } from 'react-icons/fa';
import { GoDeviceMobile } from 'react-icons/go'
import { BiMapPin } from 'react-icons/bi'
import { GrFacebookOption, GrTwitter } from 'react-icons/gr';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';

const footer = () => {
  
  const { inView } = useInView({
    threshold: [0, 0.5, 1.0],
  });
  const hoverAnimation = useAnimation();

  useEffect(()=>{
    if(inView){
      hoverAnimation.start({
      x: 30,
      transition: { duration: 0.25 },
    });
    }
    if(!inView){
      hoverAnimation.start({
        x: 0,
        transition: { duration: 0.25 },
      });
    }
  })

    return (
      <div className="footerPattern">
        <div className="flex flex-col justify-center xl:px-40 lg:px-40 md:px-24 px-10 py-20 gap-5 w-full bg-gradient-to-b from-white to-transparent bg-violet-100 bg-opacity-70">
          {/* adress details  */}
          <div className="flex flex-row justify-between w-full items-center">
            <img
              className="h-8 w-8"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              alt="Workflow"
            />
            <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col gap-5">
              <div className="flex flex-row gap-3 items-center">
                <div className="hover:cursor-pointer text-4xl xl:text-slate-300 lg:text-slate-100 md:text-slate-150 text-violet-800 hover:text-violet-900">
                  <GoDeviceMobile />
                </div>
                <div className="flex flex-col">
                  <div className="text-sm font-semibold">+92 987-3445-54</div>
                  <div className="text-sm font-semibold">info@example.com</div>
                </div>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <div className="hover:cursor-pointer text-4xl xl:text-slate-300 lg:text-slate-100 md:text-slate-150 text-violet-800 hover:text-violet-900">
                  <BiMapPin />
                </div>
                <div className="flex flex-col">
                  <div className="text-sm font-semibold">Wapda Town</div>
                  <div className="text-sm font-semibold">Lahore, Pakistan</div>
                </div>
              </div>
            </div>
          </div>
          {/* horizontal line  */}
          <div className="w-full h-[1px] bg-black"></div>

          {/* navigation links  */}
          <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col justify-between xl:gap-0 lg:gap-0 md:gap-0 gap-3 w-full">
            <div className="flex flex-col xl:w-1/4 lg:w-1/4 md:w-1/4 w-11/12 gap-5">
              <div className="font-bold">About Us</div>
              <div className="text-xs">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
                error minima fugit voluptatibus officiis cumque rem modi
                dignissimos nihil rerum.
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="font-bold">Our Links</div>
              <div className="flex flex-col text-xs gap-2">
                <motion.div
                  whileHover={{
                    x: 15,
                    transition: { duration: 0.25 },
                  }}
                  exit={{
                    x: 0,
                    transition: { duration: 0.25 },
                  }}
                  className="hover:cursor-pointer hover:translate-x-3"
                >
                  Home
                </motion.div>
                <motion.div
                  whileHover={{
                    x: 15,
                    transition: { duration: 0.25 },
                  }}
                  exit={{
                    x: 0,
                    transition: { duration: 0.25 },
                  }}
                  className="hover:cursor-pointer hover:translate-x-3"
                >
                  About Us
                </motion.div>
                <motion.div
                  whileHover={{
                    x: 15,
                    transition: { duration: 0.25 },
                  }}
                  exit={{
                    x: 0,
                    transition: { duration: 0.25 },
                  }}
                  className="hover:cursor-pointer hover:translate-x-3"
                >
                  Services
                </motion.div>
                <motion.div
                  whileHover={{
                    x: 15,
                    transition: { duration: 0.25 },
                  }}
                  exit={{
                    x: 0,
                    transition: { duration: 0.25 },
                  }}
                  className="hover:cursor-pointer hover:translate-x-3"
                >
                  Team
                </motion.div>
                <motion.div
                  whileHover={{
                    x: 15,
                    transition: { duration: 0.25 },
                  }}
                  exit={{
                    x: 0,
                    transition: { duration: 0.25 },
                  }}
                  className="hover:cursor-pointer hover:translate-x-3"
                >
                  Blog
                </motion.div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="font-bold">Our Services</div>
              <div className="flex flex-col text-xs gap-2">
                <motion.div
                  whileHover={{
                    x: 15,
                    transition: { duration: 0.25 },
                  }}
                  exit={{
                    x: 0,
                    transition: { duration: 0.25 },
                  }}
                  className="hover:cursor-pointer hover:translate-x-3"
                >
                  Strategy & Reserch
                </motion.div>
                <motion.div
                  whileHover={{
                    x: 15,
                    transition: { duration: 0.25 },
                  }}
                  exit={{
                    x: 0,
                    transition: { duration: 0.25 },
                  }}
                  className="hover:cursor-pointer hover:translate-x-3"
                >
                  Web Development
                </motion.div>
                <motion.div
                  whileHover={{
                    x: 15,
                    transition: { duration: 0.25 },
                  }}
                  exit={{
                    x: 0,
                    transition: { duration: 0.25 },
                  }}
                  className="hover:cursor-pointer hover:translate-x-3"
                >
                  Web Solution
                </motion.div>
                <motion.div
                  whileHover={{
                    x: 15,
                    transition: { duration: 0.25 },
                  }}
                  exit={{
                    x: 0,
                    transition: { duration: 0.25 },
                  }}
                  className="hover:cursor-pointer hover:translate-x-3"
                >
                  Digital Marketing
                </motion.div>
                <motion.div
                  whileHover={{
                    x: 15,
                    transition: { duration: 0.25 },
                  }}
                  exit={{
                    x: 0,
                    transition: { duration: 0.25 },
                  }}
                  className="hover:cursor-pointer hover:translate-x-3"
                >
                  App Design
                </motion.div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="font-bold">Other Links</div>
              <div className="flex flex-col text-xs gap-2">
                <motion.div
                  whileHover={{
                    x: 15,
                    transition: { duration: 0.25 },
                  }}
                  exit={{
                    x: 0,
                    transition: { duration: 0.25 },
                  }}
                  className="hover:cursor-pointer hover:translate-x-3"
                >
                  FAQ
                </motion.div>
                <motion.div
                  whileHover={{
                    x: 15,
                    transition: { duration: 0.25 },
                  }}
                  exit={{
                    x: 0,
                    transition: { duration: 0.25 },
                  }}
                  className="hover:cursor-pointer hover:translate-x-3"
                >
                  Portfolio
                </motion.div>
                <motion.div
                  whileHover={{
                    x: 15,
                    transition: { duration: 0.25 },
                  }}
                  exit={{
                    x: 0,
                    transition: { duration: 0.25 },
                  }}
                  className="hover:cursor-pointer hover:translate-x-3"
                >
                  Privacy Policy
                </motion.div>
                <motion.div
                  whileHover={{
                    x: 15,
                    transition: { duration: 0.25 },
                  }}
                  exit={{
                    x: 0,
                    transition: { duration: 0.25 },
                  }}
                  className="hover:cursor-pointer hover:translate-x-3"
                >
                  Terms & Conditions
                </motion.div>
                <motion.div
                  whileHover={{
                    x: 15,
                    transition: { duration: 0.25 },
                  }}
                  exit={{
                    x: 0,
                    transition: { duration: 0.25 },
                  }}
                  className="hover:cursor-pointer hover:translate-x-3"
                >
                  Support
                </motion.div>
              </div>
            </div>
          </div>

          {/* icons  */}
          <div className="flex flex-row items-center gap-2">
            <div className="bg-violet-300 p-3 rounded-full text-white hover:cursor-pointer hover:text-violet-150 hover:bg-violet-500">
              <GrFacebookOption />
            </div>
            <div className="bg-violet-300 p-3 rounded-full text-white hover:cursor-pointer hover:text-violet-150 hover:bg-violet-500">
              <FaInstagram />
            </div>
            <div className="bg-violet-300 p-3 rounded-full text-white hover:cursor-pointer hover:text-violet-150 hover:bg-violet-500">
              <GrTwitter />
            </div>
          </div>
        </div>
      </div>
    );
}

export default footer;