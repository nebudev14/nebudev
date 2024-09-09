import Image from "next/image";
import Link from "next/link";
import MetaImage from "../public/warrenog.png";

import { Social } from "../components/social";
import axios from "axios";
import { FaSpotify, FaMusic } from "react-icons/fa";
import { GetServerSideProps, NextPage } from "next";
import { Timeline } from "../components/timeline";
import { useRouter } from "next/router";
import Head from "next/head";
import MetaData from "../components/metadata";
import { StarsBackground } from "../components/stars-background";
import { ShootingStars } from "../components/shooting-stars";
import { FlipWords } from "../components/flip-words";
import { LayoutGrid } from "../components/image-grid";

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
      <MetaData />
      <div className="flex flex-col items-center justify-center">
        <ShootingStars
          starWidth={15}
          trailColor="#db2777"
          starColor="#db2777"
          minSpeed={8}
          maxSpeed={15}
          starHeight={5}
          minDelay={2000}
          maxDelay={3000}
        />
        <StarsBackground starDensity={0.001} twinkleProbability={0.6} />
        <div className="grid grid-cols-2 px-8 md:grid-cols-1 border-b-[1px] border-b-neutral-800">
          <div className="z-10 flex items-center justify-center h-screen md:flex-col">
            <div className="pl-20 md:pl-0 md:w-full">
              <Social />
              <div className="inline-flex font-semibold text-8xl md:text-3xl font-open">
                <span className="mr-5 text-left md:mr-3">I&apos;m</span>
                <span className="mr-5 text-pink-600 md:mr-3 ">Warren</span>
                <span className="text-cyan-400">Yun.</span>
              </div>
              <h1 className="inline-block m-0 text-4xl md:text-lg text-zinc-500 font-bricolage ">
                I&apos;m
                <span>
                  <FlipWords
                    duration={4500}
                    words={[
                      "an avid maker",
                      "a hackathon addict",
                      "a sleep-deprived engineer",
                      "a software developer",
                      "a Redbull enthusiast",
                    ]}
                  />
                </span>
                from New York City doing{" "}
                <span className="hover:text-yellow-600">robotics</span>,{" "}
                <span className="hover:text-purple-500">
                  full-stack development
                </span>
                , and{" "}
                <span className="hover:text-cyan-700">embedded security</span>.
              </h1>
              <div className="flex flex-row items-center justify-start mt-3 font-bricolage text-zinc-400 md:text-sm md:flex-col md:items-start">
                <FaSpotify
                  size={30}
                  className="mr-2 text-green-400 md:hidden"
                />
                {isPlaying ? (
                  <FaMusic
                    size={20}
                    className="mr-2 text-purple-500 md:hidden"
                  />
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
                  <FaMusic
                    size={20}
                    className="ml-2 text-purple-500 md:hidden"
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-32 text-3xl md:py-16 md:text-lg text-zinc-400 font-bricolage">
        <div className="w-1/5 border border-yellow-600 md:w-1/12 " />
        <h1 className="mx-20 md:mx-4">
          <i>professional do-er of things.</i>
        </h1>
        <div className="w-1/5 border border-yellow-600 md:w-1/12" />
      </div>

      <div className="grid grid-cols-2 gap-4 px-20 md:grid-cols-1 md:px-4">
        <div className="flex flex-col items-center justify-center h-full gap-4">
          <img src="/display/tfc.png" className="w-full rounded-3xl" />
          <img src="/display/pcb.png" className="w-full rounded-3xl" />
        </div>
        <img src="/display/card.png" className="w-full rounded-3xl" />
      </div>
      <div className="px-20 md:px-4">
        <img src="/display/swag.jpeg" className="w-full mt-4 rounded-3xl" />
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
