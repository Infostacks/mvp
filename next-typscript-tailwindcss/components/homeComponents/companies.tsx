import { companiesList } from "../utils/data";
import Image from "next/image";

const companies = () => {
    return (
        <div className="flex flex-col items-center justify-evenly px-20 py-5 gap-5 w-full mb-10">
            <h1 className="text-violet-600 font-bold text-2xl">Great software needs great relationships</h1>
            <p className="text-slate-700 text-xs">Beyond our skilled expertise, it is our customers
                and our relationship with them that sets us apart.</p>
            <div className="flex flex-row flex-wrap gap-20 justify-evenly mt-10 ">
                {companiesList && (
                    companiesList.map((company,index) => {
                        return (
                            <Image
                                src={company}
                                unoptimized
                                width="100"
                                height="40"
                                className="hover:cursor-pointer"
                                key={index}
                            />
                        )
                    })
                )}
            </div>
        </div>
    );
}

export default companies;