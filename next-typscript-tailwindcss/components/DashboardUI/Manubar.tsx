import Image from "next/image";
import manubar from "../../public/assets_dash/manubar";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import { MdClose } from "react-icons/md";
import { CgProfile } from "react-icons/cg"
import { useState } from "react";
import { motion } from "framer-motion";

export interface InputProps {
  isSidebar: boolean;
}

const Manubar = (props: InputProps) => {
  const [sidebar, setsidebar] = useState(false);
  
  const handleCloseSidebar = () => {
    setsidebar(!sidebar);
    props.isSidebar = sidebar
  };

  return (
    <div className="w-full h-full z-50">
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
