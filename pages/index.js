import Head from "next/head";
import Image from "next/image";

import Layout from "../components/Layouts/Layout";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-auto">
      <div className="mr-12">
        <Image src="/placeholder.png" alt="warren" width={225} height={225} className='rounded-3xl'/>
      </div>
      <div className="w-1/2">
        <div className="inline-flex text-7xl">
          <span className="mr-5 text-left">I&apos;m</span>
          <span className="mr-5 text-pink-600">Warren</span>
          <span className="text-cyan-400">Yun.</span>
        </div>
        <h1 className="inline-block m-0 text-3xl thin">
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
