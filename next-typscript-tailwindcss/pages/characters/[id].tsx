import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import imageLoader from "../../imageLoader";
import { Character } from "../../types";
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useEffect } from 'react';
import Link from "next/link";

function CharacterPage({character}: {character: Character}) {
    const router = useRouter();

    const variants = {
      animationOne: {
        // x: [0, -100],
        y: [0, 0, 0, 100, 100, -1000, 0],
        transition: {
          // x: {
          //     yoyo: Infinity,
          //     duration: 1,
          // },
          y: {
            // yoyo: Infinity,
            duration: 1.5,
            ease: "easeOut",
          },
        },
      },
      animationTwo: {
        // x: [0, -100],
        y: [0, -100, 0, -100, 0, -100, 0, -1000],
        transition: {
          // x: {
          //     yoyo: Infinity,
          //     duration: 1,
          // },
          y: {
            // yoyo: Infinity,
            duration: 1,
            ease: "easeOut",
          },
        },
      },
    };

  return (
    <div className="flex flex-col justify-center gap-5 items-center">
      <div className="flex flex-row items-center justify-between h-20 w-full bg-slate-500 drop-shadow-xl">
        <h1 className="ml-5 text-2xl font-bold text-white">NavBar Logo</h1>
        <div className="mr-10 font-semibold text-lg flex items-center gap-5">
          <Link href="/characters">
            <a className="text-white hover:text-xl hover:underline hover:text-orange-400">
              Home
            </a>
          </Link>
          <Link href="/aboutus">
            <a className="text-white hover:text-xl hover:underline hover:text-orange-400">
              About Us
            </a>
          </Link>
          <Link href="/contactus">
            <a className="text-white hover:text-xl hover:underline hover:text-orange-400">
              Contact Us
            </a>
          </Link>
          <Link href="/login">
            <a className="text-white bg-rose-500 rounded-full drop-shadow-xl pl-5 pt-2 pb-2 pr-5 hover:text-xl hover:bg-rose-600">
              Logout
            </a>
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center gap-5 border-2 w-5/12 bg-slate-100 rounded-3xl py-5">
        <h1 className="text-5xl font-semibold">{character.name}</h1>

        <motion.div
          variants={variants}
          initial="initial"
          animate="animationOne"
        >
          <div className="drop-shadow-xl">
            <Image
              loader={imageLoader}
              unoptimized
              src={character.image}
              alt={character.name}
              width="400"
              height="400"
              className="rounded-3xl border-4 border-orange-500"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

CharacterPage.getLayout = function getLayout(page: typeof CharacterPage){
    return <Layout>{page}</Layout>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${context.query.id}`);
    const character: Character = await res.json();

    return {
        props: {
            character,
        },
    };
}

export default CharacterPage;