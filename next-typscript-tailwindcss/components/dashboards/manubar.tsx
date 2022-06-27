import Image from "next/image";
import manubar from "../../public/assets_dash/manubar";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import { MdClose } from "react-icons/md";
import { CgProfile } from "react-icons/cg"
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Manubar = () => {
  const [sidebar, setsidebar] = useState(false);

  const handleCloseSidebar = () => {
    setsidebar(!sidebar);
  };

  return (
    <div className="w-full h-full">
      {/* Collapsed Navebar */}
      {/* <div className="flex w-16 h-full bg-white z-50 rounded-tr-3xl rounded-br-3xl">
        <div className="flex flex-col justify-end pb-24 pl-2 w-full">
          <ul className="flex flex-col items-center justify-center h-full gap-16 w-full">
            <li className="">
              <a className="hover:cursor-pointer active:bg-transparent">
                <Image
                  src={manubar.profile}
                  unoptimized
                  width="15"
                  height="70"
                />
              </a>
            </li>
            <li>
              <a className="hover:cursor-pointer hover:bg-slate-500">
                <Image
                  src={manubar.gallery}
                  unoptimized
                  width="18"
                  height="16"
                />
              </a>
            </li>
            <li>
              <a className="hover:cursor-pointer active:bg-transparent">
                <Image
                  src={manubar.browse}
                  unoptimized
                  width="18"
                  height="15"
                />
              </a>
            </li>
            <li>
              <a className="hover:cursor-pointer active:bg-transparent">
                <Image src={manubar.cloud} unoptimized width="20" height="15" />
              </a>
            </li>
          </ul>
          <div className="flex justify-center">
            <a className="hover:cursor-pointer active:bg-transparent">
              <Image
                src={manubar.settings}
                unoptimized
                width="20"
                height="20"
              />
            </a>
          </div>
        </div>
      </div> */}

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
                duration: 1.5,
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
                  <span className="ml-5 text-lg font-semibold">Profile</span>
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
                  <span className="ml-5 text-lg font-semibold">Gallery</span>
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
                  <span className="ml-5 text-lg font-semibold">Browse</span>
                ) : (
                  ""
                )}
              </a>
            </li>
            <li>
              <a className="hover:cursor-pointer active:bg-transparent flex items-center">
                <Image src={manubar.cloud} unoptimized width="20" height="15" />
                {sidebar ? (
                  <span className="ml-5 text-lg font-semibold">Cloud</span>
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
                <span className="ml-5 text-lg font-semibold">Settings</span>
              ) : (
                ""
              )}
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Manubar;
