import Head from "next/head";
import Image from "next/image";

import Layout from "../components/Layouts/Layout";

export default function Home() {
  return (
    <div className="flex flex-row items-center justify-center text-left">
      <div className="mr-12">
        <Image src="/warren.png" alt="warren" width={275} height={275} className='rounded-3xl'/>
      </div>
      <div className="flex flex-col items-start justify-center w-1/3 text-left">
        <div className="text-8xl">
          <span className="mr-5 text-left">I&apos;m</span>
          <span className="mr-5 text-pink-600">Warren</span>
          <span className="text-cyan-400">Yun.</span>
        </div>

        <h1 className="text-3xl thin">
          I&apos;m a student developer from New York ridiculously passionate
          about technology, science, and everything in between.
        </h1>
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
