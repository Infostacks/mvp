import React, { useState, useRef } from "react";
import styles from '../../styles/Global.js'
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const aboutinfo = () => {
  const [files, setFile] = useState([]);
  const [message, setMessage] = useState();
  const ref = useRef(null);

  // const handleFile = (e) => {
  //   setMessage("");
  //   let file = e.target.files;

  //   for (let i = 0; i < file.length; i++) {
  //     const fileType = file[i]["type"];
  //     const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
  //     if (validImageTypes.includes(fileType)) {
  //       setFile([...files, file[i]]);
  //     } else {
  //       setMessage("only images accepted");
  //     }
  //   }
  // };
  // const removeImage = (i) => {
  //   setFile(files.filter((x) => x.name !== i));
  // };

  Events.scrollEvent.register("begin", function () {
    console.log("begin", arguments);
  });

  Events.scrollEvent.register("end", function () {
    console.log("end", arguments);
  });

  return (
    <div className="w-full bg-slate-50 flex flex-col gap-3 pb-10 overflow-y-hidden">
      <h1 className="text-2xl font-semibold text-slate-600 p-10">Register Here</h1>
      <Element
        name="test1"
        id="1"
        className="flex justify-center items-center h-screen w-full bg-slate-300 font-bold flex-col"
      >
        1
        <button
          type="button"
          className="text-white bg-green-600 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          // onClick={handleClick}
        >
          <Link
            activeClass="active"
            to="test2"
            spy={true}
            smooth={true}
            duration={500}
          >
            Next
          </Link>
        </button>
      </Element>
      <Element
        name="test2"
        id="2"
        ref={ref}
        className="flex justify-center items-center h-screen w-full bg-orange-600 font-bold flex-col"
      >
        2
        <Link
          activeClass="active"
          to="test3"
          spy={true}
          smooth={true}
          duration={500}
        >
          <button type="button" className={styles.greenBtn}>
            Next
          </button>
        </Link>
      </Element>
      <Element
        name="test3"
        id="3"
        className="flex justify-center items-center h-screen w-full bg-fuchsia-500 font-bold flex-col"
      >
        3
        <Link
          activeClass="active"
          to="test3"
          spy={true}
          smooth={true}
          duration={500}
        >
          <button type="button" className={styles.greenBtn}>
            Next
          </button>
        </Link>
      </Element>
      <Element
        name="test4"
        id="4"
        className="flex justify-center items-center h-screen w-full bg-lime-500 font-bold flex-col"
      >
        4
        <button type="button" className={styles.greenBtn}>
          Next
        </button>
      </Element>
    </div>
  );
};

export default aboutinfo;
