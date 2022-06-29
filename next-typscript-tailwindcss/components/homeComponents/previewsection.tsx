import { MdExpandMore } from "react-icons/md";

const previewsection = () => {
  return (
    <div className="flex flex-row justify-center items-center p-5 gap-5 w-full">
      {/* Left Side  */}
      <div className="flex flex-col justify-start items-center w-1/2">
        <h3>WE CREATE IDEAS</h3>
        <h1>
          Build Stunning <span className="text-violet-500">Website</span>{" "}
          InfoStack Tech
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
          repellendus nihil fuga unde voluptas voluptates perspiciatis
          aspernatur.
        </p>
        <div className="flex flex-row items-center justify-start gap-3">
          <button className="rounded-full bg-violet-500 p-2 text-3xl text-white">
            <MdExpandMore />
          </button>
          <span>Learn More</span>
        </div>
      </div>

      {/* Right Side  */}
      <div className="flex flex-col justify-center items-center w-1/2">
        <div
          className="bg-[url('https://samartheme1.vercel.app/images/move/pic2.png')]
      bg-no-repeat"
        ></div>
      </div>
    </div>
  );
};

export default previewsection;
