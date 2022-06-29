import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SearchBox from "../../components/dashboards/searchbar";
import { useState } from "react";
import manubar from "../../public/assets_dash/manubar";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import { MdClose } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import WelcomeText from "../../components/dashboards/welcometext";
import StatsCard from '../../components/dashboards/statscard'
import PostNow from '../../components/dashboards/postnow'
import ScreenPlayBox from '../../components/dashboards/screenplay'
import TopPostBar from '../../components/dashboards/toppostbar'
import RightSidePanel from '../../components/dashboards/rightsidepanel'

const dashboard = () => {
  const [sidebar, setsidebar] = useState(false);

  const handleCloseSidebar = () => {
    setsidebar(!sidebar);
  };
  return (
    <div
      className="relative w-screen h-screen flex flex-row justify-between gap-5 xl:flex-row lg:flex-row md:flex-col sm:flex-col 
      bg-no-repeat bg-fixed bg-cover bg-opacity-25
    bg-[url('https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=100')]"
    >
      {/* <Image
        src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=100"
        unoptimized
        layout="fill"
        objectFit="cover"
        className="z-0 opacity-60 fixed"
      /> */}
      {/* Intro/Search Cards column  */}
      <div className="flex flex-col ml-28 mt-5 w-">
        {/* Welcome text Here  */}
        <div className={`flex mt-8`}>
          <WelcomeText />
        </div>

        {/* Search Box here  */}
        <div className={`mt-10 flex shadow-lg`}>
          <SearchBox />
        </div>

        {/* Stats Card here  */}
        <StatsCard />

        {/* Post Now here  */}
        <PostNow />

        {/* ScreenPlay Box here */}
        <ScreenPlayBox />
      </div>

      {/* Top posts column  */}
      <div className="flex flex-col ml-28 mt-10 z-50">
        {/* Top Posts Bar  */}
        <TopPostBar />
      </div>

      {/* Righ side panel */}
      <div className="flex flex-col w-1/5 z-50">
        <RightSidePanel />
      </div>

      {/* Sidebar Here */}
      <div
        className={`fixed w-full h-screen bg-opacity-20 bg-slate-300 shadow-lg
      ${sidebar ? "z-50" : "z-0"}`}
      >
        {!sidebar ? (
          <button
            style={{ width: "30px" }}
            onClick={handleCloseSidebar}
            className="absolute mt-5 ml-3 z-50 p-3 hover:cursor-pointer"
          >
            <FormatAlignLeftIcon className="" />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleCloseSidebar}
            className="absolute mt-5 ml-3 z-50 p-3 hover:rounded-full"
          >
            <MdClose className="text-2xl" />
          </button>
        )}

        {/* Extended Navbar  */}
        <motion.div
          variants={{
            hidden: {
              opacity: 1,
            },
            visible: {
              x: sidebar ? 0 : -20,
              transition: {
                y: {
                  // yoyo: Infinity,
                  duration: 2.5,
                  ease: "easeOut",
                },
              },
            },
            removed: {
              opacity: 1,
            },
          }}
          initial="hidden"
          animate="visible"
          exit="removed"
          className={`flex flex-col justify-end h-full bg-white z-50 rounded-tr-3xl rounded-br-3xl ${
            sidebar ? "w-44" : "w-24"
          }`}
        >
          <div className="flex flex-col h-full w-full justify-end items-center pb-24 pl-2">
            <ul className="flex flex-col items-start justify-center h-full gap-16">
              <li className="">
                <a className="hover:cursor-pointer active:bg-transparent flex items-center">
                  <CgProfile className="text-slate-500" />
                  {sidebar ? (
                    <span className="ml-5 text-lg font-semibold text-violet-400 hover:underline">
                      Profile
                    </span>
                  ) : (
                    ""
                  )}
                </a>
              </li>
              <li>
                <a className="hover:cursor-pointer flex items-center">
                  <Image
                    src={manubar.gallery}
                    unoptimized
                    width="18"
                    height="16"
                  />
                  {sidebar ? (
                    <span className="ml-5 text-lg font-semibold text-violet-400 hover:underline">
                      Gallery
                    </span>
                  ) : (
                    ""
                  )}
                </a>
              </li>
              <li>
                <a className="hover:cursor-pointer active:bg-transparent flex items-center">
                  <Image
                    src={manubar.browse}
                    unoptimized
                    width="18"
                    height="15"
                  />
                  {sidebar ? (
                    <span className="ml-5 text-lg font-semibold text-violet-400 hover:underline">
                      Browse
                    </span>
                  ) : (
                    ""
                  )}
                </a>
              </li>
              <li>
                <a className="hover:cursor-pointer active:bg-transparent flex items-center">
                  <Image
                    src={manubar.cloud}
                    unoptimized
                    width="20"
                    height="15"
                  />
                  {sidebar ? (
                    <span className="ml-5 text-lg font-semibold text-violet-400 hover:underline">
                      Cloud
                    </span>
                  ) : (
                    ""
                  )}
                </a>
              </li>
            </ul>
            <div className="flex justify-center">
              <a className="hover:cursor-pointer active:bg-transparent flex items-center">
                <Image
                  src={manubar.settings}
                  unoptimized
                  width="20"
                  height="20"
                />
                {sidebar ? (
                  <span className="ml-5 text-lg font-semibold text-violet-400 hover:underline">
                    Settings
                  </span>
                ) : (
                  ""
                )}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default dashboard;
