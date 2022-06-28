import Image from "next/image";
import topPostBar from "../../public/assets_dash/toppostbar";

const toppostbar = () => {
  return (
    <div className="flex flex-col gap-10">
      {/* top post panel  */}
      <div className="flex flex-col justify-between items-start gap-3">
        <h2 className="font-bold text-slate-300">Top Posts</h2>
        <div className="flex flex-col justify-between items-center gap-8">
          {/* post 1 */}
          <div className="relative flex flex-col z-50">
            <div className="absolute">
              <Image
                src={topPostBar.postBG}
                unoptimized
                width="170"
                height="130"
                className="shadow-md"
              />
            </div>
            <div className="">
              <Image
                src={topPostBar.post1}
                unoptimized
                width="170"
                height="130"
              />
            </div>
            {/* <h2 className="absolute flex">Synergy</h2> */}
          </div>
          {/* post 2 */}
          <div className="flex flex-col z-50">
            <div className="absolute">
              <Image
                src={topPostBar.postBG}
                unoptimized
                width="170"
                height="130"
                className="shadow-md"
              />
            </div>
            <div>
              <Image
                src={topPostBar.post2}
                unoptimized
                width="170"
                height="130"
                className="shadow-md"
              />
            </div>
          </div>
          {/* post 3 */}
          <div className="flex flex-col z-50">
            <div className="absolute">
              <Image
                src={topPostBar.postBG}
                unoptimized
                width="170"
                height="130"
                className="shadow-md"
              />
            </div>
            <div>
              <Image
                src={topPostBar.post3}
                unoptimized
                width="170"
                height="130"
                className="shadow-md"
              />
            </div>
          </div>
          {/* post 4 */}
          <div className="flex flex-col z-50">
            <div className="absolute">
              <Image
                src={topPostBar.postBG}
                unoptimized
                width="170"
                height="130"
                className="shadow-md"
              />
            </div>
            <div>
              <Image
                src={topPostBar.post4}
                unoptimized
                width="170"
                height="130"
                className="shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* linked accounts panel  */}
      <div className="flex flex-col justify-center gap-5">
        <h2 className="font-semibold text-slate-800">Linked accounts</h2>
        <div className="flex flex-row items-center gap-10">
          <div className="hover:cursor-pointer">
            <Image
              src={topPostBar.vimeo}
              unoptimized
              width="30"
              height="30"
              className=""
            />
          </div>
          <div className="hover:cursor-pointer">
            <Image
              src={topPostBar.dropbox}
              unoptimized
              width="30"
              height="30"
              className=""
            />
          </div>
          <div className="hover:cursor-pointer">
            <Image
              src={topPostBar.twitter}
              unoptimized
              width="30"
              height="30"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default toppostbar;
