import Image from "next/image";
import Link from "next/link";
import MetaImage from "../public/warrenog.png";

import { Social } from "../components/social";
import axios from "axios";
import { FaSpotify, FaMusic } from "react-icons/fa";
import { GetServerSideProps, NextPage } from "next";
import { Timeline } from "../components/timeline";
import { Skills } from "../components/skills";
import { useRouter } from "next/router";
import Head from "next/head";

interface Props {
  song: string;
  isPlaying: boolean;
  link: string;
}

const Home: NextPage<Props> = (props) => {
  const { song, isPlaying, link } = props;

  const router = useRouter();

  return (
    <>
      <Head>
        <title>Warren Yun - Personal Website</title>
        <meta
          name="description"
          content="I'm Warren Yun! I do stuff from robotics, to software engineering, to embedded security and a little more."
          key="desc"
        />
        <link rel="shortcut icon" href="/warren.jpeg" />
        <meta
          property="og:description"
          content="I'm Warren! I like to mess around with robotics, full-stack web development, embedded security, and a whole bunch of other things that may or may not be tanegntially related."
        />
        <meta property="og:image" content="https://www.wyun.dev/warrenog.png" />
        <meta property="og:url" content="https://www.wyun.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Warren Yun - Personal Website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="wyun.dev" />
        <meta property="twitter:url" content="https://www.wyun.dev/" />
        <meta name="twitter:title" content="Warren Yun - Personal Website" />
        <meta
          name="twitter:description"
          content="I'm Warren! I like to mess around with robotics, full-stack web development, embedded security, and a whole bunch of other things that may or may not be tanegntially related."
        />
        <meta
          name="twitter:image"
          content="https://www.wyun.dev/warrenog.png"
        />
      </Head>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center h-screen md:mt-16 md:flex-col md:justify-start">
          <div className="flex flex-col items-center justify-center mr-12 md:mr-0 md:mb-6">
            <h1
              onClick={async () => await router.push("/resume.pdf")}
              className="py-1 mb-4 font-mono text-sm text-gray-200 duration-150 border-b-4 border-gray-600 hover:cursor-pointer hover:border-green-500 hover:-translate-y-2"
            >
              view my resume!
            </h1>
            <Image
              src="/warren.jpeg"
              alt="warren"
              width={275}
              height={275}
              className="rounded-3xl"
            />
          </div>
          <div className="w-1/2 md:w-full">
            <Social />
            <div className="inline-flex text-8xl md:text-3xl">
              <span className="mr-5 text-left md:mr-3">I&apos;m</span>
              <span className="mr-5 text-pink-600 md:mr-3">Warren</span>
              <span className="text-cyan-400">Yun.</span>
            </div>
            <h1 className="inline-block m-0 font-mono text-4xl md:text-lg ">
              I&apos;m an avid maker from New York interested in{" "}
              <span className="hover:text-yellow-400">robotics</span>,{" "}
              <span className="hover:text-purple-500">web development</span>,
              and <span className="hover:text-cyan-700">embedded security</span>
              .
            </h1>
            <div className="flex flex-row items-center justify-start mt-3 md:text-sm md:flex-col md:items-start">
              <FaSpotify size={30} className="mr-2 text-green-400 md:hidden" />
              {isPlaying ? (
                <FaMusic size={20} className="mr-2 text-purple-500 md:hidden" />
              ) : (
                ""
              )}

              {isPlaying ? (
                <span className="md:mt-2">
                  <div className="inline-block mr-2 md:block">
                    Currently jamming to{" "}
                  </div>
                  <span>
                    <u className="font-mono text-green-400">
                      <Link href={link}>{song}</Link>
                    </u>{" "}
                    <FaSpotify
                      size={25}
                      className="hidden mr-2 text-green-400 md:inline md:ml-1"
                    />
                  </span>
                </span>
              ) : (
                <span>{song}</span>
              )}

              {isPlaying ? (
                <FaMusic size={20} className="ml-2 text-purple-500 md:hidden" />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <h1 className="font-mono text-lg text-gray-400 mb-28 ">
          <span className="md:hidden">business inquiries? reach me at</span>{" "}
          <span className="font-extrabold text-gray-300">
            hi [at] wyun [dot] dev
          </span>
        </h1>

        <div>
          <Timeline />
        </div>
      </div>
      <div>
        <Skills />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  require("dotenv").config();

  const getData = await axios.get(`${process.env.DOMAIN}/api/spotify`);
  const fetchedData = getData.data.data.body;
  if (Object.keys(fetchedData).length === 0) {
    return {
      props: {
        isPlaying: false,
        song: "Currently not jamming right now :(",
      },
    };
  } else {
    const isPlaying = fetchedData.is_playing;
    const link = fetchedData.item.external_urls.spotify;
    let song = {};
    if (!isPlaying) {
      song = "Currently not jamming right now :(";
    } else {
      song = fetchedData.item.name;
    }

    return {
      props: {
        isPlaying,
        song,
        link,
      },
    };
  }
};

export default Home;
