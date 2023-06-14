import Image from "next/image";
import Link from "next/link";

import { Social } from "../components/social";
import axios from "axios";
import { FaSpotify, FaMusic } from "react-icons/fa";
import { GetServerSideProps, NextPage } from "next";

interface Props {
  song: string;
  isPlaying: boolean;
  link: string;
}

const Home: NextPage<Props> = (props) => {
  const songName = props.song;
  const isPlaying = props.isPlaying;
  const link = props.link;

  return (
    <div className="flex items-center justify-center h-screen md:flex-col">

      <div className="w-1/2 md:w-full">
        <Social />
        <div className="inline-flex text-8xl md:text-3xl">
          <span className="mr-5 text-left md:mr-3">I&apos;m</span>
          <span className="mr-5 text-pink-600 md:mr-3">Warren</span>
          <span className="text-cyan-400">Yun.</span>
        </div>
        <h1 className="inline-block m-0 text-3xl thin md:text-lg">
          I&apos;m an avid maker from New York interested in robotics, web development, and embedded security.
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
              Currently listening to{" "}
              <u className="text-green-400">
                <Link href={link}>{songName}</Link>
              </u>{" "}
              <FaSpotify
                size={25}
                className="hidden mr-2 text-green-400 md:inline md:ml-1"
              />
            </span>
          ) : (
            <span>{songName}</span>
          )}

          {isPlaying ? (
            <FaMusic size={20} className="ml-2 text-purple-500 md:hidden" />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
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
        song: "Not listening on Spotify right now.",
      },
    };
  } else {
    const isPlaying = fetchedData.is_playing;
    const link = fetchedData.item.external_urls.spotify;
    let song = {};
    if (!isPlaying) {
      song = "Not listening on Spotify right now.";
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
