import { companiesList } from "../utils/data";
import Image from "next/image";

const companies = () => {
    return (
        <div className="flex flex-col items-center justify-evenly h-screen px-20 py-5 gap-5 w-full bg-gradient-to-r from-slate-100 to-violet-300">
            <h1 className="text-violet-600 font-bold text-2xl">Great software needs great relationships</h1>
            <p className="text-slate-700 text-xs">Beyond our skilled expertise, it is our customers
                and our relationship with them that sets us apart.</p>
            <div className="flex flex-row justify-around gap-10 flex-wrap">
                {companiesList && (
                    companiesList.map((company) => {
                        return (
                            <Image
                                src={company}
                                unoptimized
                                width="50"
                                height="40"
                                className=""
                            />
                        )
                    })
                )}
            </div>
        </div>
    );
}

export default companies;