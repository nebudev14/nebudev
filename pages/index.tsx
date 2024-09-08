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
      <MetaData/>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center h-screen md:mt-16 md:flex-col md:justify-start">
          <div className="w-1/2 md:w-full">
            <Social />
            <div className="inline-flex font-semibold text-8xl md:text-3xl font-open">
              <span className="mr-5 text-left md:mr-3">I&apos;m</span>
              <span className="mr-5 text-pink-600 md:mr-3 ">Warren</span>
              <span className="text-cyan-400">Yun.</span>
            </div>
            <h1 className="inline-block m-0 text-4xl md:text-lg text-zinc-500 font-bricolage ">
              I&apos;m an avid maker from New York interested in{" "}
              <span className="">robotics</span>,{" "}
              <span className="hover:text-purple-500">full-stack development</span>,
              and <span className="hover:text-cyan-700">embedded security</span>
              .
            </h1>
            <div className="flex flex-row items-center justify-start mt-3 font-bricolage text-zinc-400 md:text-sm md:flex-col md:items-start">
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
          <ShootingStars starWidth={15} trailColor="#db2777" starColor="#0891b2" minSpeed={8} maxSpeed={15} starHeight={5} minDelay={2000} maxDelay={3000} />
          <StarsBackground starDensity={0.00060} twinkleProbability={0.85} />
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
