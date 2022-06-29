import Image from "next/image";
import topPostBar from "../../public/assets_dash/toppostbar";

const toppostbar = () => {

  const photoList = [
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80",
    "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  ];

  return (
    <div className="flex flex-col gap-10">
      {/* top post panel  */}
      <div className="flex flex-col justify-between items-start gap-3">
        <h2 className="font-bold text-lg text-slate-900">Top Posts</h2>
        <div className="flex flex-col justify-between items-center gap-8">
          {/* post 1 */}
          <div className="relative flex flex-col z-50">
            <Image
              src={photoList[0]}
              unoptimized
              width="370"
              height="270"
              className="shadow-md rounded-3xl z-50 opacity-80"
            />
            <h2 className="absolute flex text-white z-50 left-32 bottom-3 font-semibold">
              Technology
            </h2>
          </div>
          {/* post 2 */}
          <div className="relative flex flex-col z-50">
            <Image
              src={photoList[1]}
              unoptimized
              width="370"
              height="270"
              className="shadow-md rounded-3xl z-50 opacity-80"
            />
            <h2 className="absolute flex text-black bg-white bg-opacity-20 z-50 content-center left-32 bottom-3 font-semibold">
              Latest Trends
            </h2>
          </div>
          {/* post 3 */}
          <div className="relative flex flex-col z-50">
            <Image
              src={photoList[2]}
              unoptimized
              width="370"
              height="270"
              className="shadow-md rounded-3xl z-50 opacity-80"
            />
            <h2 className="absolute flex text-white z-50 left-32 bottom-3 font-semibold">
              Infrastructure
            </h2>
          </div>
          {/* post 4 */}
          <div className="relative flex flex-col z-50">
            <Image
              src={photoList[3]}
              unoptimized
              width="370"
              height="270"
              className="shadow-md rounded-3xl z-50 opacity-80"
            />
            <h2 className="absolute flex text-white z-50 left-32 bottom-3 font-semibold">
              Research
            </h2>
          </div>
        </div>
      </div>

      {/* linked accounts panel  */}
      <div className="flex flex-col justify-center gap-5">
        <h2 className="font-semibold text-slate-800">Linked accounts</h2>
        <div className="flex flex-row items-center w-full gap-28">
          <div className="hover:cursor-pointer">
            <Image src={topPostBar.vimeo} unoptimized width="30" height="30" />
          </div>
          <div className="hover:cursor-pointer">
            <Image
              src={topPostBar.dropbox}
              unoptimized
              width="30"
              height="30"
            />
          </div>
          <div className="hover:cursor-pointer">
            <Image
              src={topPostBar.twitter}
              unoptimized
              width="30"
              height="30"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default toppostbar;
