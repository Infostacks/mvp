import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { BsCart2 } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import ToggleButton from "@mui/material/ToggleButton";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";

const Home: NextPage = () => {
  const router = useRouter();
  const [closeToggle, setCloseToggle] = useState(false);
  const [block1, setBlock1] = useState(false);
  const [block2, setBlock2] = useState(false);
  const [block3, setBlock3] = useState(false);

  const handleCloseSidebar = () => {
    if (closeToggle) setCloseToggle(false);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="m-0 w-screen h-screen">
        <div className="w-full h-full">
          <div className="h-full flex">
            {/* main content area */}
            <div className="flex flex-row m-0 w-full h-full">
              {/* block 1 */}
              <motion.div
                initial={{
                  width: "33%",
                }}
                whileHover={{
                  width: "50%",
                  transition: { duration: 0.25 },
                }}
                exit={{
                  width: "33%",
                  transition: { duration: 0.25 },
                }}
                onHoverStart={() => setBlock1(true)}
                onHoverEnd={() => setBlock1(false)}
                className="relative flex flex-col justify-center items-center w-2/6"
              >
                <img
                  src="https://candlefish-assets.s3.amazonaws.com/assets/shop-home.jpg"
                  className="w-full h-full object-cover"
                />
                <div className="absolute w-full h-full bg-black bg-opacity-30 flex flex-col justify-center items-center gap-y-16">
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: block1 ? 1 : 0,
                      y: block1 ? -30 : 0,
                      transition: { duration: 0.25 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.25 },
                    }}
                  >
                    <img
                      src="	https://candlefish-assets.s3.amazonaws.com/assets/panel-expanded-icon.png"
                      className="w-20 h-20"
                    />
                  </motion.div>
                  <motion.h1
                    animate={{
                      scale: block1 ? 2 : 1,
                      transition: { duration: 0.25 },
                    }}
                    exit={{
                      scale: 1,
                      transition: { duration: 0.25 },
                    }}
                    className={`text-white text-5xl font-bold
                    ${block1 ? "tracking-widest" : "tracking-normal"}`}
                  >
                    SHOP
                  </motion.h1>
                  <motion.ul
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: block1 ? 1 : 0,
                      y: block1 ? 30 : 0,
                      transition: { duration: 0.25 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.25 },
                    }}
                    className="text-white text-3xl font-semibold flex flex-col gap-3"
                  >
                    <motion.li
                      initial={{
                        x: 0,
                      }}
                      whileHover={{
                        x: 30,
                        transition: { duration: 0.25 },
                      }}
                      exit={{
                        x: 0,
                        transition: { duration: 0.25 },
                      }}
                      className=" hover:cursor-pointer hover:bg-gradient-to-t from-slate-200"
                    >
                      <Link href="/login">
                        <a>By Collections</a>
                      </Link>
                    </motion.li>
                    <motion.li
                      initial={{
                        x: 0,
                      }}
                      whileHover={{
                        x: 30,
                        transition: { duration: 0.25 },
                      }}
                      exit={{
                        x: 0,
                        transition: { duration: 0.25 },
                      }}
                      className=" hover:cursor-pointer hover:bg-gradient-to-t from-slate-200"
                    >
                      <Link href="/login">
                        <a>Seasonal Picks</a>
                      </Link>
                    </motion.li>
                    <motion.li
                      initial={{
                        x: 0,
                      }}
                      whileHover={{
                        x: 30,
                        transition: { duration: 0.25 },
                      }}
                      exit={{
                        x: 0,
                        transition: { duration: 0.25 },
                      }}
                      className=" hover:cursor-pointer hover:bg-gradient-to-t from-slate-200"
                    >
                      <Link href="/login">
                        <a>Top Sellers</a>
                      </Link>
                    </motion.li>
                    <motion.li
                      initial={{
                        x: 0,
                      }}
                      whileHover={{
                        x: 30,
                        transition: { duration: 0.25 },
                      }}
                      exit={{
                        x: 0,
                        transition: { duration: 0.25 },
                      }}
                      className=" hover:cursor-pointer hover:bg-gradient-to-t from-slate-200"
                    >
                      <Link href="/login">
                        <a>Gift Cards</a>
                      </Link>
                    </motion.li>
                  </motion.ul>
                </div>
              </motion.div>

              {/* block 2 */}
              <motion.div
                initial={{
                  width: "33%",
                }}
                whileHover={{
                  width: "50%",
                  transition: { duration: 0.25 },
                }}
                exit={{
                  width: "33%",
                  transition: { duration: 0.25 },
                }}
                onHoverStart={() => setBlock2(true)}
                onHoverEnd={() => setBlock2(false)}
                className="relative flex flex-col justify-center items-center w-2/6"
              >
                <img
                  src="https://candlefish-assets.s3.amazonaws.com/assets/discover-home.jpg"
                  className="w-full h-full object-cover"
                />
                <div className="absolute w-full h-full bg-black bg-opacity-30 flex flex-col justify-center items-center gap-y-16">
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: block2 ? 1 : 0,
                      y: block2 ? -30 : 0,
                      transition: { duration: 0.25 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.25 },
                    }}
                  >
                    <img
                      src="	https://candlefish-assets.s3.amazonaws.com/assets/panel-expanded-icon.png"
                      className="w-20 h-20"
                    />
                  </motion.div>
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <motion.h1
                      animate={{
                        scale: block2 ? 2 : 1,
                        letterSpacing: block2 ? 5 : 0,
                        transition: { duration: 0.25 },
                      }}
                      exit={{
                        scale: 1,
                        transition: { duration: 0.25 },
                      }}
                      className="text-white text-5xl font-bold"
                    >
                      DISCOVER
                    </motion.h1>
                    <motion.p
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: block2 ? 1 : 0,
                        y: block2 ? 30 : 0,
                        transition: { duration: 0.25 },
                      }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.25 },
                      }}
                      className="text-white text-lg"
                    >
                      See what fragrance you are feeling today
                    </motion.p>
                  </div>
                  <motion.ul
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: block2 ? 1 : 0,
                      y: block2 ? 30 : 0,
                      transition: { duration: 0.25 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.25 },
                    }}
                    className="text-white text-4xl font-bold underline underline-offset-8 flex flex-col gap-3"
                  >
                    <motion.li
                      initial={{
                        x: 0,
                      }}
                      whileHover={{
                        x: 30,
                        transition: { duration: 0.25 },
                      }}
                      exit={{
                        x: 0,
                        transition: { duration: 0.25 },
                      }}
                      className=" hover:cursor-pointer hover:text-right"
                    >
                      <Link href="/login">
                        <a>DISCOVER NOW</a>
                      </Link>
                    </motion.li>
                  </motion.ul>
                </div>
              </motion.div>

              {/* block 3 */}
              <motion.div
                initial={{
                  width: "33%",
                }}
                whileHover={{
                  width: "50%",
                  transition: { duration: 0.25 },
                }}
                exit={{
                  width: "33%",
                  transition: { duration: 0.25 },
                }}
                onHoverStart={() => setBlock3(true)}
                onHoverEnd={() => setBlock3(false)}
                className="relative flex flex-col justify-center items-center w-2/6"
              >
                <img
                  src="https://candlefish-assets.s3.amazonaws.com/assets/library-home.jpg"
                  className="w-full h-full object-cover"
                />
                <div className="absolute w-full h-full bg-black bg-opacity-30 flex flex-col justify-center items-center gap-y-16">
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: block3 ? 1 : 0,
                      y: block3 ? -30 : 0,
                      transition: { duration: 0.25 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.25 },
                    }}
                  >
                    <img
                      src="	https://candlefish-assets.s3.amazonaws.com/assets/panel-expanded-icon.png"
                      className="w-20 h-20"
                    />
                  </motion.div>
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <motion.h1
                      animate={{
                        scale: block3 ? 2 : 1,
                        letterSpacing: block3 ? 5 : 0,
                        transition: { duration: 0.25 },
                      }}
                      exit={{
                        scale: 1,
                        transition: { duration: 0.25 },
                      }}
                      className="text-white text-5xl font-bold"
                    >
                      BROWSE
                      <br />
                      LIBRARY
                    </motion.h1>
                    <motion.p
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: block3 ? 1 : 0,
                        y: block3 ? 30 : 0,
                        transition: { duration: 0.25 },
                      }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.25 },
                      }}
                      className="text-white text-lg"
                    >
                      See what fragrance you are feeling today
                    </motion.p>
                  </div>
                  <motion.ul
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: block3 ? 1 : 0,
                      y: block3 ? 30 : 0,
                      transition: { duration: 0.25 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.25 },
                    }}
                    className="text-white text-4xl font-bold underline underline-offset-8 flex flex-col gap-3"
                  >
                    <motion.li
                      initial={{
                        x: 0,
                      }}
                      whileHover={{
                        x: 30,
                        transition: { duration: 0.25 },
                      }}
                      exit={{
                        x: 0,
                        transition: { duration: 0.25 },
                      }}
                      className=" hover:cursor-pointer hover:text-right"
                    >
                      <Link href="/login">
                        <a>LIBRARY CARD</a>
                      </Link>
                    </motion.li>
                  </motion.ul>
                </div>
              </motion.div>
            </div>

            {/* navbar area */}
            <div
              className={`absolute top-0 left-0 right-0 z-50 flex items-center flex-col justify-between`}
            >
              <div className="w-full flex py-2 px-0 bg-black justify-center">
                <div className="w-full flex justify-center">
                  <a
                    className="underline text-white text-base"
                    href="https://www.candlefish.com/collections/seasonal-favorites"
                    target="_blank"
                  >
                    We are ready for Spring! Shop our fresh and floral Spring
                    Collection here.
                  </a>
                </div>
              </div>

              {/* navbar area */}
              <div className="w-full">
                <div className="flex flex-row justify-between ml-6 mr-5 mt-4">
                  <div className="flex flex-row justify-center items-center gap-2">
                    {/* sidebar icon  */}
                    <span style={{ color: "white", width: "30px" }}>
                      <Link href="/login">
                        <a>
                          <FormatAlignLeftIcon />
                        </a>
                      </Link>
                    </span>
                    {/* logo candlefish  */}

                    <Link href="/login">
                      <a>
                        <h3 className="text-2xl text-white tracking-widest">
                          CANDLEFISH
                        </h3>
                      </a>
                    </Link>
                  </div>
                  {/* cart icon  */}
                  <span>
                    <Link href="/login">
                      <a>
                        <BsCart2
                          style={{ color: "white" }}
                          className="w-10 h-10 mr-5"
                        />
                      </a>
                    </Link>
                  </span>
                </div>

                {/* sidebar  */}
              </div>
            </div>
            {/* end navbar area */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
