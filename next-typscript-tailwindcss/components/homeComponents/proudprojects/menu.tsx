import Image from "next/image";
import Link from 'next/link';
import {motion} from 'framer-motion';

const menu = ({ items }) => {
  return (
    <div className="flex flex-row justify-center items-center flex-wrap gap-5 xl:px-28 lg:px-28 md:px-28">
      {items.map((menuItem: any) => {
        const { id, link, img, title } = menuItem;
        return (
          <div key={id} className="">
            <Link
              href=""
            >
              <a>
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{ duration: 1 }}
                >
                  <motion.div
                    className="opacity-50"
                    whileHover={{
                      opacity: 1,
                      scale: 1.15,
                      rotate: id % 2 === 0 ? -5 : 5,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={img}
                      unoptimized
                      width="200"
                      height="200"
                      alt={title}
                    />
                  </motion.div>
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
