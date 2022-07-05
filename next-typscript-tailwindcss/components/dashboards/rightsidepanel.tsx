import Image from "next/image";
import popularthisweek from "../../public/assets_dash/popularthisweekbox";

const rightsidepanel = () => {
  return (
    <div className="fixed bg-white h-screen items-center w-full rounded-tl-3xl p-7 inline-table rounded-bl-3xl">
      <div className="relative flex flex-col justify-between">
        <div className="absolute">
          <Image
            src={popularthisweek.piclarge}
            unoptimized
            width="310" 
            height="390"
            className="rounded-br-3xl z-0"
          />
        </div>
        <div className="">
          <div className="z-40">
            <h2 className="text-white z-40 absolute left-16 top-3">
              Popular this week
            </h2>
            <Image
              src={popularthisweek.uppershadow}
              unoptimized
              width="310"
              height="130"
              className="rounded-br-3xl"
            />
          </div>
          <div className="z-40 h-full inline mb-0">
            <h2 className="text-white z-40 absolute left-16">Jen Smith</h2>
            <Image
              src={popularthisweek.downshadow}
              unoptimized
              width="310"
              height="130"
              className="rounded-br-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default rightsidepanel;
