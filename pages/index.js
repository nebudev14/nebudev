import Image from "next/image";
import Link from "next/link";

import Social from "../components/Social";
import axios from "axios";
import { FaSpotify, FaMusic } from "react-icons/fa";

export default function Home(props) {
  const songName = props.song;
  const isPlaying = props.isPlaying;
  const link = props.link;

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
        <div className="flex flex-row items-center justify-start mt-3">
          <FaSpotify size={30} className="mr-2 text-green-400" />
          {isPlaying ? (
            <FaMusic size={20} className="mr-2 text-purple-500" />
          ) : (
            ""
          )}

          {isPlaying ? (
            <span>
              Currently listening to{" "}
              <u className="text-green-400">
                <Link href={link}>{songName}</Link>
              </u>{" "}
            </span>
          ) : (
            <span>{songName}</span>
          )}

          {isPlaying ? (
            <FaMusic size={20} className="ml-2 text-purple-500" />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const getData = await axios.get("http://localhost:3000/api/spotify");
  const isPlaying = getData.data.data.body.is_playing;
  const link = getData.data.data.body.item.external_urls.spotify;
  let song = {};
  if (!isPlaying) {
    song = "Not listening on Spotify right now.";
  } else {
    song = getData.data.data.body.item.name;
  }

  return {
    props: {
      isPlaying,
      song,
      link,
    },
  };
};