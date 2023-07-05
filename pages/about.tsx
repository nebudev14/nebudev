import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const experiences = [
  {
    name: "Sciborgs",
    img: "sciborgs.png",
    role: "Capt",
    time: "Nov 2021 - Present",
    desc: "At my school's robotics team, we write robot code in Java and mess around with robot mechanisms using the WPILIB API.",
    link: "https://www.sciborgs1155.org/",
  },
  {
    name: "Science Olympiad",
    img: "scioly.png",
    role: "Competitor/Marketing Team",
    time: "Oct 2021 - Present",
    desc: "Competed in events like Detector Building, WiFi-Lab, and A&P. Assisted building the website using React and Styled Components",
    link: "https://bxscioly.github.io/",
  },
  {
    name: "AtomHacks",
    img: "AtomHacks.png",
    role: "Head of Programming",
    time: "Oct 2021 - Present",
    desc: "Assisted with event organization, mentored and helped participants with technical difficulties, and helped develop the website!",
    link: "https://atomhacks.org/",
  },
  {
    name: "Lumiere",
    img: "lumiere.png",
    role: "Technology Product Manager",
    time: "Nov 2021 - Jan 2022",
    desc: "Developed portions of the website to improve UI/UX using Next.js and Tailwind CSS.",
    link: "https://lumiere.codes/",
  },
  {
    name: "The Orpheus Show",
    img: "orpheus.png",
    role: "Co-Host and Development",
    time: "Aug 2021 - Sep 2021",
    desc: "Co-hosted podcast episodes, assisted with operations, and developed the website using Next.js and CSS.",
    link: "https://podcast.hackclub.com/",
  },
];

const About: NextPage = () => {
  return (
    <div className="h-full px-4 py-32 mx-40 md:mx-0 md:px-2 md:py-16">
      <h1 className="inline py-2 mb-8 border-b-4 border-pink-600 text-7xl md:text-3xl">
        Experiences
      </h1>
      <h2 className="mt-12 mb-12 text-xl">
        Here are some <span className="text-pink-600">experiences</span>{" "}
        I&apos;ve had throughout my high school career!
      </h2>
      <div className="grid grid-cols-2 gap-12 md:grid-cols-1">
        {experiences.map((exp, i) => (
          <Link key={i} href={exp.link} passHref>
            <div
              className="p-4 px-10 duration-200 border border-gray-400 rounded-3xl hover:border-pink-600 md:p-2 md:px-8 hover:cursor-pointer"
            >
              <h1 className="my-6 text-2xl text-white thin md:text-lg">
                {exp.role}
              </h1>

              <h2 className="mb-4 text-4xl text-white md:text-2xl">
                {exp.name}
              </h2>
              <h3 className="mb-4 text-2xl text-cyan-400 md:text-xl">
                {exp.time}
              </h3>
              <p className="mb-6 text-2xl thin md:text-lg">{exp.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default About;
