import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Layout from "../../components/Layout";
import imageLoader from "../../imageLoader";
import mainBGImage from "../../public/assets_dash/bg2.png";
import dashBGImage from "../../public/assets_dash/bg1.png";
import Manubar from "../../components/dashboards/manubar";

const dashboard = () => {
  return (
    <div className="w-screen h-screen flex flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col max-w-5xl">
      <Image
        src="https://images.unsplash.com/photo-1569982175971-d92b01cf8694?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
        unoptimized
        width="100%"
        height="100%"
        layout="fill"
        className="z-0"
      />
      <div className="absolute h-screen w-screen bg-opacity-20 bg-white z-50">
        <Manubar />
      </div>

      {/* code here  */}
    </div>
  );
};

export default dashboard;
