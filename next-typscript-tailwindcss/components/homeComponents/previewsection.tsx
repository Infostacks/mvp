import { MdExpandMore } from "react-icons/md";
import Image from "next/image";
import { motion } from "framer-motion";

const previewsection = () => {
  return (
    <div
      className="flex flex-row items-center justify-center px-20 py-5 gap-5 w-full 
     bg-gradient-to-r from-slate-100 to-violet-300"
    >
      {/* Left Side  */}
      <div className="flex flex-col justify-center gap-5 w-1/2">
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
                      duration: 1.5,
                      delay: 1.5,
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
          <span className="text-violet-500 font-semibold hover:text-violet-700">
            Learn More
          </span>
        </div>
      </div>

      {/* Right Side  */}
      <div className="flex flex-col justify-center items-center w-1/2">
        <motion.div
          variants={{
            hidden: {
              opacity: 1,
            },
            visible: {
              rotateZ: [1, -1],
              transition: {
                rotateZ: {
                  yoyo: Infinity,
                  duration: 1.5,
                  delay: 2.5,
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
          <Image
            src="https://samartheme1.vercel.app/images/move/pic2.png"
            unoptimized
            width="310"
            height="300"
            className="rounded-br-3xl z-0"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default previewsection;
