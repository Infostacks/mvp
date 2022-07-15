import Image from "next/image";
import Link from 'next/link';
import {motion} from 'framer-motion';

const menu = ({ items }) => {
  return (
    <div className="flex flex-row justify-center items-center flex-wrap gap-5 xl:px-72 lg:px-40 md:px-40">
      {items.map((menuItem: any) => {
        const { id, link, img, title } = menuItem;
        return (
          <div key={id} className="">
            <Link
              href=""
              // href={link}
            >
              <a>
                <motion.div
                  className="opacity-50"
                  whileHover={{
                    opacity: 1,
                    scale: 1.15,
                    boxShadow: "0px 0px 0px rgb(255,255,255)",
                  }}
                  transition={{ duration: .3 }}
                >
                  <Image
                    src={img}
                    unoptimized
                    width="200"
                    height="200"
                    alt={title}
                  />
                </motion.div>
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default menu;
