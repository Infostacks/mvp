import Image from "next/image";
import searchBox from "../../public/assets_dash/searchbox";

const searchbar = () => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-row justify-end z-30">
        <div className="flex absolute flex-row items-center justify-center hover:cursor-pointer">
          <div className="absolute z-50">
            <Image
              src={searchBox.searchIcon}
              unoptimized
              width="15"
              height="15"
            />
          </div>
          <div className="flex flex-row items-center -mr-1">
            <Image src={searchBox.iconBG} unoptimized width="50" height="49" />
          </div>
        </div>
        <input
          type="text"
          className="rounded-full h-12 w-96 p-5 text-md text-violet-400 border-lime-400 shadow-md"
          placeholder="Search something here..."
          onChange={(e)=>e.target.value}
        />
      </div>
    </div>
  );
};

export default searchbar;
