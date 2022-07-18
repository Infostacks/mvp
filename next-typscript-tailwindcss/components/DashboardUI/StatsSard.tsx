import Image from "next/image";
import statBox from "../../public/assets_dash/statbox";

const statscard = () => {
  return (
    <div className="z-40">
      <div className="flex flex-row w-96 rounded-3xl justify-between items-center bg-white shadow-md">
        <div className="bg-indigo-400 w-1/3 h-48 flex items-center rounded-tl-3xl rounded-bl-3xl rounded-br-3xl z-30">
          <div className="flex flex-col justify-center items-center text-slate-200 text-xs p-0 -rotate-90">
            Statistics
          </div>
          <div className="flex flex-col justify-center items-start gap-4 text-white">
            <div className="flex flex-col justify-start items-start">
              <h3 className="text-xs">Total views</h3>
              <h1 className="font-bold">72.593</h1>
            </div>
            <div className="flex flex-col justify-center items-startr">
              <h3 className="text-xs">This week</h3>
              <h1 className="font-bold">9.308</h1>
            </div>
            <div className="flex flex-col justify-center items-start">
              <h3 className="text-xs">Today</h3>
              <h1 className="font-bold">1.239</h1>
            </div>
          </div>
        </div>

        <div className="w-2/3 h-48 flex items-center">
          <Image
            src={statBox.cardGraphbg}
            unoptimized
            width="310"
            height="132"
            className="rounded-br-3xl"
          />
          <div className="absolute flex justify-center items-center w-2/3 z-50">
            <Image
              src={statBox.graphline}
              unoptimized
              width="100"
              height="1"
              className="z-50"
            />
            <Image
              src={statBox.line}
              unoptimized
              width="100"
              height="1"
              className="absolute z-50"
            />
          </div>
          <ul className="absolute flex flex-row text-xs z-50 ml-5 mt-32 text-slate-500 gap-3">
            <li>Mon</li>
            <li>Tue</li>
            <li>Wed</li>
            <li>Thu</li>
            <li>Fri</li>
            <li className="text-violet-400">Sat</li>
            <li>Sun</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default statscard;
