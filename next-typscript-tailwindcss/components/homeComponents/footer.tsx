import Image from 'next/image'
import { FaInstagram } from 'react-icons/fa';
import { GrFacebookOption, GrTwitter } from 'react-icons/gr';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";

const footer = () => {
    return (
        <div className="flex flex-col items-center justify-center px-40 py-20 gap-5 w-full bg-gradient-to-t from-violet-500 to-white">
            {/* adress details  */}
            <div className="flex flex-row justify-between w-full items-center">
                {/* <Image 
                    src="https://samartheme1.vercel.app/images/logo-white.png"
                    unoptimized
                    width={100}
                    height={50}/> */}
                <div>Logo</div>
                <div className='flex flex-row gap-5'>
                    <div className='flex flex-row gap-3 items-center'>
                        <div className='hover:cursor-pointer'>svg</div>
                        <div className='flex flex-col'>
                            <div className='text-sm font-semibold'>+92 987-3445-54</div>
                            <div className='text-sm font-semibold'>info@example.com</div>
                        </div>
                    </div>
                    <div className='flex flex-row gap-3 items-center'>
                        <div className='hover:cursor-pointer'>svg</div>
                        <div className='flex flex-col'>
                            <div className='text-sm font-semibold'>Wapda Town</div>
                            <div className='text-sm font-semibold'>Lahore, Pakistan</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* horizontal line  */}
            <div className='w-full h-[1px] bg-black'></div>

            {/* navigation links  */}
            <div className="flex flex-row justify-between w-full">
                <div className='flex flex-col w-1/4 gap-5'>
                    <div className='font-bold'>
                        About Us
                    </div>
                    <div className='text-xs'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Enim, error minima fugit voluptatibus officiis cumque rem
                        modi dignissimos nihil rerum.
                    </div>
                    {/* icons  */}
                    <div className="flex flex-row items-center gap-2">
                        <div className="bg-violet-100 p-3 rounded-full text-violet-500 hover:cursor-pointer">
                            <GrFacebookOption />
                        </div>
                        <div className="bg-violet-100 p-3 rounded-full text-violet-500 hover:cursor-pointer">
                            <FaInstagram />
                        </div>
                        <div className="bg-violet-100 p-3 rounded-full text-violet-500 hover:cursor-pointer">
                            <GrTwitter />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='font-bold'>
                        Our Links
                    </div>
                    <div className='flex flex-col text-xs gap-2'>
                        <div className='hover:cursor-pointer'>Home</div>
                        <div className='hover:cursor-pointer'>About Us</div>
                        <div className='hover:cursor-pointer'>Services</div>
                        <div className='hover:cursor-pointer'>Team</div>
                        <div className='hover:cursor-pointer'>Blog</div>
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='font-bold'>
                        Our Services
                    </div>
                    <div className='flex flex-col text-xs gap-2'>
                        <div className='hover:cursor-pointer'>Strategy & Reserch</div>
                        <div className='hover:cursor-pointer'>Web Development</div>
                        <div className='hover:cursor-pointer'>Web Solution</div>
                        <div className='hover:cursor-pointer'>Digital Marketing</div>
                        <div className='hover:cursor-pointer'>App Design</div>
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='font-bold'>
                        Other Links
                    </div>
                    <div className='flex flex-col text-xs gap-2'>
                        <div className='hover:cursor-pointer'>FAQ</div>
                        <div className='hover:cursor-pointer'>Portfolio</div>
                        <div className='hover:cursor-pointer'>Privacy Policy</div>
                        <div className='hover:cursor-pointer'>Terms & Conditions</div>
                        <div className='hover:cursor-pointer'>Support</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default footer;