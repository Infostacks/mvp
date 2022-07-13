import Image from "next/image";
import Link from 'next/link'

const menu = ({ items }) => {
  return (
    <div className="w-4/5 my-0 mx-auto flex flex-row justify-start gap-5 flex-wrap">
      {items.map((menuItem: any) => {
        const { id, link, img, title } = menuItem;
        return (
          <div key={id} className="">
            <Link href={link}>
              <a>
                <Image
                  src={img}
                  unoptimized
                  width="200"
                  height="200"
                  alt={title}
				  className="opacity-90"
                />
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default menu;
