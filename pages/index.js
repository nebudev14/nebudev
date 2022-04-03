import Image from "next/image";
import { useRouter } from "next/router";
import Social from "../components/Social";

import axios from "axios";
import { FaSpotify } from "react-icons/fa";

export default function Home({ props }) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-start mr-12">
        <Image
          src="/warren.png"
          alt="warren"
          width={275}
          height={275}
          className="rounded-3xl"
        />
      </div>
      <div className="w-1/2">
        <Social />
        <div className="inline-flex text-8xl">
          <span className="mr-5 text-left">I&apos;m</span>
          <span className="mr-5 text-pink-600">Warren</span>
          <span className="text-cyan-400">Yun.</span>
        </div>
        <h1 className="inline-block m-0 text-3xl thin">
          I&apos;m a developer from New York ridiculously passionate about
          technology, science, and everything in between.
        </h1>
        <div className="flex flex-row items-center justify-start mt-2">
          <FaSpotify size={30} className="mr-2 text-green-400"/>
          <span>Currently listening to..</span>
        </div>
      </div>
    </div>
  );
}

