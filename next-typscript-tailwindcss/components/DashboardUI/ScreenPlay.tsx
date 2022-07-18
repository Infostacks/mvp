import Image from "next/image";
import screenPlay from "../../public/assets_dash/screenplaybox";
import styles from "../../styles/Global.js";

const screenplay = () => {
  return (
    <div className="z-40 mt-10">
      <div className="absolute flex ml-0 mt-6 rounded-3xl m-0 p-0">
        {/* Left side content  */}
        <div className="w-1/3 flex items-center ml-0 rounded-tl-3xl rounded-bl-3xl rounded-br-3xl z-30">
          <div className="flex flex-col justify-center items-center text-slate-200 text-xs p-0 -rotate-90">
            SCREEN PLAY
          </div>
          <div className="flex flex-col justify-center items-start gap-4 text-white">
            <div className="flex flex-col justify-start items-start">
              <h3 className="text-xs">Rewarded</h3>
              <h1 className="font-bold">173 min</h1>
            </div>
            <div className="flex flex-col justify-center items-startr">
              <h3 className="text-xs">Today</h3>
              <h1 className="font-bold">12 min</h1>
            </div>
          </div>
        </div>
      </div>
      {/* Right side content  */}
      <div className="absolute flex flex-row justify-around ml-36 gap-32 mt-5 z-30 text-xs font-semibold">
        <div>Goal progress</div>
        <div className="ml-14">Daily Records</div>
      </div>
      <Image
        src={screenPlay.screenplayBG}
        unoptimized
        width={`${styles.xlWidth ? "683" : "383"}`}
        height={`${styles.xlWidth ? "320" : "185"}`}
        className="rounded-br-3xl"
      />
    </div>
  );
};


export default screenplay;
