import Image from "next/image";
import postNow from "../../public/assets_dash/postnowbox";

const postnow = () => {
  return (
    <div className="z-40">
      <div className="bg-white bg-opacity-70 h-32 w-96 flex flex-row justify-between rounded-3xl shadow-md">
        {/* profile icon  */}
        <div className="mt-5 ml-5">
          <Image
            src={postNow.profilepic}
            unoptimized
            width="35"
            height="35"
            className="shadow-md"
          />
        </div>

        {/* center post panel  */}
        <div className="flex gap-5 flex-col mt-5">
          <input
            type="text"
            className="rounded-full h-8 w-64 p-5 text-sm text-violet-400 border-lime-400 shadow-sm"
            placeholder="My latest trip was to..."
            onChange={(e) => e.target.value}
          />
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row text-xs gap-2 z-50">
              <Image src={postNow.lock} unoptimized width="10" height="15" />
              <div className="text-slate-600">Private post</div>
            </div>

            <div className="flex flex-row items-center text-xs gap-2 z-50">
              <div className="text-slate-600">Post to</div>
              <div className="flex flex-row items-center justify-center">
                <div className="flex flex-row absolute gap-3 font-semibold items-center justify-center z-50 text-xs">
                  <div className="text-violet-600 font-bold">TRAVEL</div>
                  <Image
                    src={postNow.arrow_filled_bo}
                    unoptimized
                    width="8"
                    height="6"
                    className="absolute"
                  />
                </div>
                <Image
                  src={postNow.travelicon}
                  unoptimized
                  width="90"
                  height="25"
                />
              </div>
            </div>
          </div>
        </div>

        {/* post button  */}
        <div className="flex flex-row items-center justify-center hover:cursor-pointer">
          <div className="absolute z-50">
            <Image
              src={postNow.postnowtext}
              unoptimized
              width="15"
              height="60"
            />
          </div>
          <div className="flex flex-row items-center">
            <Image
              src={postNow.postNowBG}
              unoptimized
              width="47"
              height="128"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default postnow;
