import Image from 'next/image'
import { FaInstagram } from 'react-icons/fa';
import { GoDeviceMobile } from 'react-icons/go'
import { BiMapPin } from 'react-icons/bi'
import { GrFacebookOption, GrTwitter } from 'react-icons/gr';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";

const footer = () => {
    return (
      <div className="flex flex-col items-center justify-center xl:px-40 lg:px-40 md:px-24 px-10 py-20 gap-5 w-full bg-gradient-to-t from-violet-500 to-white">
        {/* adress details  */}
        <div className="flex flex-row justify-between w-full items-center">
          {/* <Image 
                    src="https://samartheme1.vercel.app/images/logo-white.png"
                    unoptimized
                    width={100}
                    height={50}/> */}
          <img
            className="h-8 w-8"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
            alt="Workflow"
          />
          <div className="flex flex-row gap-5">
            <div className="flex flex-row gap-3 items-center">
              <div className="hover:cursor-pointer text-4xl text-slate-100 hover:text-violet-900">
                <GoDeviceMobile />
              </div>
              <div className="flex flex-col">
                <div className="text-sm font-semibold">+92 987-3445-54</div>
                <div className="text-sm font-semibold">info@example.com</div>
              </div>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <div className="hover:cursor-pointer text-4xl text-slate-100 hover:text-violet-900">
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
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-col w-1/4 gap-5">
            <div className="font-bold">About Us</div>
            <div className="text-xs">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
              error minima fugit voluptatibus officiis cumque rem modi
              dignissimos nihil rerum.
            </div>
            {/* icons  */}
            <div className="flex flex-row items-center gap-2">
              <div className="bg-violet-100 p-3 rounded-full text-violet-500 hover:cursor-pointer hover:text-violet-100 hover:bg-violet-500">
                <GrFacebookOption />
              </div>
              <div className="bg-violet-100 p-3 rounded-full text-violet-500 hover:cursor-pointer hover:text-violet-100 hover:bg-violet-500">
                <FaInstagram />
              </div>
              <div className="bg-violet-100 p-3 rounded-full text-violet-500 hover:cursor-pointer hover:text-violet-100 hover:bg-violet-500">
                <GrTwitter />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="font-bold">Our Links</div>
            <div className="flex flex-col text-xs gap-2">
              <div className="hover:cursor-pointer hover:translate-x-3">
                Home
              </div>
              <div className="hover:cursor-pointer hover:translate-x-3">
                About Us
              </div>
              <div className="hover:cursor-pointer hover:translate-x-3">
                Services
              </div>
              <div className="hover:cursor-pointer hover:translate-x-3">
                Team
              </div>
              <div className="hover:cursor-pointer hover:translate-x-3">
                Blog
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="font-bold">Our Services</div>
            <div className="flex flex-col text-xs gap-2">
              <div className="hover:cursor-pointer hover:translate-x-3">
                Strategy & Reserch
              </div>
              <div className="hover:cursor-pointer hover:translate-x-3">
                Web Development
              </div>
              <div className="hover:cursor-pointer hover:translate-x-3">
                Web Solution
              </div>
              <div className="hover:cursor-pointer hover:translate-x-3">
                Digital Marketing
              </div>
              <div className="hover:cursor-pointer hover:translate-x-3">
                App Design
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="font-bold">Other Links</div>
            <div className="flex flex-col text-xs gap-2">
              <div className="hover:cursor-pointer hover:translate-x-3">
                FAQ
              </div>
              <div className="hover:cursor-pointer hover:translate-x-3">
                Portfolio
              </div>
              <div className="hover:cursor-pointer hover:translate-x-3">
                Privacy Policy
              </div>
              <div className="hover:cursor-pointer hover:translate-x-3">
                Terms & Conditions
              </div>
              <div className="hover:cursor-pointer hover:translate-x-3">
                Support
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default footer;