import Image from "next/image";
import welText from "../../public/assets_dash/profilepic";

const welcometext = () => {
  return (
    <div className="flex flex-row justify-center items-center z-30 gap-4">
      {/* profile pic  */}
      <div className="flex flex-col items-end justify-end">
        <div className="z-40">
          <Image src={welText.profilePic} unoptimized width="55" height="55" />
        </div>
        <div className="absolute flex flex-row items-center">
          <Image src={welText.online} unoptimized width="15" height="15" />
        </div>
      </div>

      {/* text area  */}
      <div className="flex flex-col justify-start items-centet">
        <h2 className="text-lg font-semibold">Hi Sandra,</h2>
        <h1 className="text-3xl font-semibold text-slate-900">Welcome back!</h1>
      </div>
    </div>
  );
};

export default welcometext;
