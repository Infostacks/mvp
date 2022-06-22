import Image from "next/image";
import bgImage from "../../public/assets/bg.jpg";
import moonImage from "../../public/assets/moon.png";
import mountainImage from "../../public/assets/mountain.png";
import roadImage from "../../public/assets/road.png";
import imageLoader from "../../imageLoader";
import style from "../../styles/parallex.module.css";

const parallex = () => {
  return (
    <main className={style.main}>
      <section className={style.section}>
        <Image
          loader={imageLoader}
          unoptimized
          src={bgImage}
          alt="BG Image"
          className="img"
        />

        <Image
          loader={imageLoader}
          unoptimized
          src={moonImage}
          alt="Moon Image"
          className="img"
        />

        <Image
          loader={imageLoader}
          unoptimized
          src={mountainImage}
          alt="Mountain Image"
          className="img"
        />

        <Image
          loader={imageLoader}
          unoptimized
          src={roadImage}
          alt="Road Image"
          className="img"
        />

        <h2 className="text">Moon Light</h2>
      </section>
    </main>
  );
};

export default parallex;
