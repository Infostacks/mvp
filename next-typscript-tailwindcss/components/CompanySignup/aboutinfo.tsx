import { useInView } from "react-intersection-observer";
import React, { useEffect, useRef, useState } from "react";

const aboutinfo = () => {

    const uRef = useRef(null);
    useEffect(() => {
        import("@lottiefiles/lottie-player");
    }, []);

    const [files, setFile] = useState([]);
    const [message, setMessage] = useState();

    const handleFile = (e) => {
        setMessage("");
        let file = e.target.files;

        for (let i = 0; i < file.length; i++) {
            const fileType = file[i]['type'];
            const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
            if (validImageTypes.includes(fileType)) {
                setFile([...files, file[i]]);
            } else {
                setMessage("only images accepted");
            }

        }



    };
    const removeImage = (i) => {
        setFile(files.filter(x => x.name !== i));
    }

    return (
        <div className="flex justify-between w-screen">
            {/* Left Side Logo  */}
            <div
                className="xl:w-1/3 lg:w-1/3 md:h-1/3 sm:h-1/3 xl:h-screen lg:h-screen md:w-screen sm:w-screen text-white bg-violet-100 drop-shadow-sm z-50 fixed"
            >
                <div className="">
                    <lottie-player
                        id="firstLottie"
                        ref={uRef}
                        autoplay
                        loop
                        mode="normal"
                        speed={0.4}
                        src="https://assets2.lottiefiles.com/packages/lf20_u8o7BL.json"
                    ></lottie-player>
                </div>
            </div>

            {/* Registation Form  */}
            <div className="xl:w-2/3 lg:w-2/3 md:h-2/3 sm:h-2/3 xl:h-full lg:h-full md:w-full sm:w-full bg-slate-50 flex flex-col justify-center">
                <div className="flex flex-col gap-3">
                    <h1 className="text-2xl font-semibold text-slate-600">Register Here</h1>

                    <div className="flex gap-5 items-center justify-between">
                        <div className="flex flex-col gap-2">
                            <label className="text-xs text-slate-500">
                                Company Legal Name:
                            </label>
                            <input
                                id="fullname"
                                name="fullname"
                                type="text"
                                className={`w-72 h-7 pl-2 border-[1px] rounded-sm text-md z-12`}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xs text-slate-500">
                                Username:
                            </label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                className={`w-72 h-7 pl-2 border-[1px] rounded-sm text-md z-12`}
                            />
                        </div>
                    </div>

                    <div className="flex gap-5 items-center justify-between">
                        <div className="flex flex-col gap-2">
                            <label className="text-xs text-slate-500">
                                Industry:
                            </label>
                            <input
                                id="industry"
                                name="industry"
                                type="text"
                                className={`w-72 h-7 pl-2 border-[1px] rounded-sm text-md z-12`}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xs text-slate-500">
                                Address:
                            </label>
                            <input
                                id="address"
                                name="address"
                                type="text"
                                className={`w-72 h-7 pl-2 border-[1px] rounded-sm text-md z-12`}
                            />
                        </div>
                    </div>

                    <div className="flex gap-5 items-center justify-between">
                        <div className="flex flex-col gap-2">
                            <label className="text-xs text-slate-500">
                                Location/ City:
                            </label>
                            <input
                                id="location"
                                name="location"
                                type="text"
                                className={`w-72 h-7 pl-2 border-[1px] rounded-sm text-md z-12`}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xs text-slate-500">
                                Country:
                            </label>
                            <input
                                id="country"
                                name="country"
                                type="text"
                                className={`w-72 h-7 pl-2 border-[1px] rounded-sm text-md z-12`}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-xs text-slate-500">
                            About Company:
                        </label>
                        <textarea
                            id="about"
                            name="about"
                            className={`w-full h-40 pl-2 border-[1px] rounded-sm text-md z-12`}
                        />
                    </div>

                    {/* horizontal line  */}
                    <div className='w-full h-[1px] bg-slate-400'></div>

                    <div className="flex flex-row gap-5 items-center">
                        <h1 className="text-2xl font-semibold text-slate-600">Add Projects</h1>
                        <span className="bg-slate-200 text-white text-3xl px-10 py-1 rounded-full hover:cursor-pointer hover:bg-violet-300">+</span>
                    </div>

                    <div className="flex gap-5 items-center justify-between">
                        <div className="flex flex-col gap-2">
                            <label className="text-xs text-slate-500">
                                Project Name:
                            </label>
                            <input
                                id="projectname"
                                name="projectname"
                                type="text"
                                className={`w-72 h-7 pl-2 border-[1px] rounded-sm text-md z-12`}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xs text-slate-500">
                                Tech Stack:
                            </label>
                            <input
                                id="techstack"
                                name="techstack"
                                type="text"
                                className={`w-72 h-7 pl-2 border-[1px] rounded-sm text-md z-12`}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-xs text-slate-500">
                            Image URL:
                        </label>
                        <div className="p-3 bg-white rounded-md w-full">
                            <span className="flex justify-center items-center text-[12px] mb-1 text-red-500">{message}</span>
                            <div className="h-32 w-full relative border-2 items-center rounded-md cursor-pointer bg-gray-300 border-gray-400 border-dotted">
                                <input type="file" onChange={handleFile} className="h-full w-full bg-green-200 opacity-0 z-10 absolute" multiple="multiple" name="files[]" />
                                <div className="h-full w-full bg-gray-200 absolute z-1 flex justify-center items-center top-0">
                                    <div className="flex flex-col">
                                        <i className="mdi mdi-folder-open text-[30px] text-gray-400 text-center"></i>
                                        <span className="text-[12px]">{`Drag and Drop a file`}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-2">

                                {files.map((file, key) => {
                                    return (
                                        <div key={key} className="overflow-hidden relative">
                                            <i onClick={() => { removeImage(file.name) }} className="mdi mdi-close absolute right-1 hover:text-white cursor-pointer"></i>
                                            <img className="h-20 w-20 rounded-md" src={URL.createObjectURL(file)} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-xs text-slate-500">
                            Link To:
                        </label>
                        <input
                            id="linkto"
                            name="linkto"
                            type="text"
                            className={`w-full h-7 pl-2 border-[1px] rounded-sm text-md z-12`}
                        />
                    </div>

                    {/* horizontal line  */}
                    <div className='w-full h-[1px] bg-slate-400 '></div>

                    <button
                        type="submit"
                        className={`rounded-sm w-28 text-white pt-1 pb-1 text-sm `}
                        style={{ backgroundColor: "#5B85AA" }}
                    >
                        Submit Info
                    </button>
                </div>
            </div>
        </div>
    );
}



export default aboutinfo;