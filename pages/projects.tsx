import { NextPage } from "next";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const projects = [
  {
    name: "MeetupMap-API",
    stars: "1",
    desc: "Backend server for Meetup Map.",
    tags: ["Javascript", "GraphQL", "Prisma.Js"],
    link: "https://github.com/MeetupMap/api",
  },
  {
    name: "Lumiere",
    stars: "12",
    desc: "A media publication platform that accelerates CompSci content creators.",
    tags: ["Javascript", "Prisma.Js", "TailwindCSS"],
    link: "https://github.com/project-lumiere/lumiere.codes",
  },
  {
    name: "G.O.A.T-Notes",
    stars: "2",
    desc: "A chrome extension that allows you to easily take online notes during class, as well as access them afterwards. Made during HackOn 2.0.",
    tags: ["Javascript", "CSS", "Svelte"],
    link: "https://github.com/NebuDev14/G.O.A.T-Notes",
  },
  {
    name: "v3",
    stars: "1",
    desc: "Version 3 of my personal website.",
    tags: ["Javascript", "Next.Js", "TailwindCSS"],
    link: "https://github.com/NebuDev14/nebudev",
  },
  {
    name: "FRQ-Submission",
    stars: "0",
    desc: "Website for submitting APCS FRQ responses.",
    tags: ["Javascript", "Next.Js", "TailwindCSS"],
    link: "https://github.com/NebuDev14/FRQ-Submission",
  },
  {
    name: "eduHub",
    stars: "3",
    desc: "A website dedicated to finding educational resources easily. Made during CodeOverflow 2022.",
    tags: ["Next.Js", "TailwindCSS", "MongoDB"],
    link: "https://github.com/NebuDev14/eduHub",
  },
  {
    name: "Control-Panel",
    stars: "1",
    desc: "An app designed for my tablet to interact with things on my computer.",
    tags: ["Flutter", "Python", "Flask"],
    link: "https://github.com/NebuDev14/Control-Panel",
  },
  {
    name: "AutoZoom",
    stars: "7",
    desc: "Automatically opens your zoom meetings/google meets at scheduled times.",
    tags: ["Python"],
    link: "https://github.com/NebuDev14/AutomaticZoom",
  },
  {
    name: "Diseasy-Peasy",
    stars: "2",
    desc: "Identify diseases based on what symptoms you have.",
    tags: ["Go", "Prisma.Js"],
    link: "https://github.com/NebuDev14/Diseasy-Peasy",
  },
  {
    name: "bxscioly.github.io",
    stars: "1",
    desc: "The website for Bronx Science's Scioly Team.",
    tags: ["React", "Styled Components"],
    link: "https://github.com/NebuDev14/bxscioly.github.io",
  },
  {
    name: "Shopping-Spree",
    stars: "1",
    desc: "A website that gathers the cheapest products for you to buy. Made during Explore Hacks 2021.",
    tags: ["Typescript", "Next.Js", "CSS"],
    link: "https://github.com/NebuDev14/Shopping-Spree",
  },
  {
    name: "TheraTracker",
    stars: "1",
    desc: "A website that tracks nearby therapists. Built for Mental Health Hacks 2021.",
    tags: ["React", "Python", "Flask"],
    link: "https://github.com/NebuDev14/TheraTracker",
  },
  {
    name: "Rona-Radar",
    stars: "1",
    desc: "An app that displays nearby hospitals and live updates on Covid-19. Won 3rd place at HackKU 2021.",
    tags: ["Java", "Android"],
    link: "https://github.com/Rona-Radar/app",
  },
  {
    name: "Music-Player",
    stars: "3",
    desc: "A circuit that simulates the track buttons on your keyboard. Won 1st place at Surprise Hacks 2021.",
    tags: ["Arduino"],
    link: "https://github.com/NebuDev14/Music-Player",
  },
  {
    name: "Auto-Fan",
    stars: "1",
    desc: "Automatically turns on a fan when the temperature is above a certain number. Made at Hack from the Past 2021.",
    tags: ["Arduino"],
    link: "https://github.com/NebuDev14/AutoFan",
  },
];

const Project: NextPage = () => {
  return (
    <div className="h-full px-16 py-32 mx-40 md:mx-0 md:px-2 md:py-16">
      <h1 className="inline py-2 mb-8 border-b-4 border-green-400 text-7xl md:text-3xl">
        Projects
      </h1>
      <h2 className="mt-12 mb-2 text-xl">
        Some of the <span className="text-green-400">projects</span> I&apos;ve
        worked on!
      </h2>
      <span className="mb-6 text-xl thin md:text-lg"></span>
      <div className="grid grid-cols-2 gap-16 my-10 md:grid-cols-1">
        {projects.map((repo, i) => (
          <Link key={i} href={repo.link} passHref>
            <div className="px-6 py-4 duration-200 border border-gray-400 hover:border-green-400 hover:cursor-pointer rounded-3xl md:px-4 md:py-3">
              <div className="pb-4 mb-4 border-b-4 border-green-400">
                <h1 className="py-2 text-2xl">{repo.name}</h1>
                <div className="flex flex-wrap mt-2">
                  {repo.tags.map((tag, i) => (
                    <div
                      className="px-2 py-2 mb-3 mr-3 border border-purple-500 rounded-xl"
                      key={i}
                    >
                      <p className="text-xs">{tag}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-row items-center justify-start mt-2">
                  <FaStar size={20} className="text-yellow-400" />
                  <h1 className="ml-2 text-lg">{repo.stars}</h1>
                </div>
              </div>

              <span className="mb-8 text-xl thin">{repo.desc}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Project;
