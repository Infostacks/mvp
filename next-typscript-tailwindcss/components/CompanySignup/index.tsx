import AboutInfo from "./AboutInfo";
import SideAnimation from "./SideAnimation";

const index = () => {
  return (
    <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col m-0 p-0 h-screen w-screen">
      <div className="h-full w-1/3">
        <SideAnimation />
      </div>
      <div className="h-full w-2/3">
        <AboutInfo />
      </div>
    </div>
  );
};

export default index;
