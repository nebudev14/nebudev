import Layout from "../components/Layouts/Layout";

export default function About() {
    return (
      <div className="flex items-center justify-center flex-auto" id="home">
        <div className="flex flex-col items-center justify-start mr-12">
        </div>
        <div className="w-1/2">
          <div className="inline-flex text-8xl">
            <span className="mr-5 text-left">I&apos;m</span>
            <span className="mr-5 text-pink-600">Warren</span>
            <span className="text-cyan-400">Yun.</span>
          </div>
          <h1 className="inline-block m-0 text-3xl thin">
            I&apos;m a developer from New York ridiculously passionate
            about technology, science, and everything in between.
          </h1>
        </div>
      </div>
    );
  }
  
  About.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
  };
  