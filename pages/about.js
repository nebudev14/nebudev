import Image from "next/image";
import Link from 'next/link';

const experiences = [
  {
    name: "Sciborgs",
    img: "sciborgs.png",
    role: "Member",
    time: "Nov 2021 - Present",
    desc: "At my school's robotics team, we write robot code in Java and mess around with robot mechaisms.",
    link: 'https://www.sciborgs1155.org/'
  },
  {
    name: "Science Olympiad",
    img: "scioly.png",
    role: "Competitor",
    time: "Oct 2021 - Present",
    desc: "Competed in events like Detector Building, WiFi-Lab, and A&P. Assisted building the website using React and Styled Components. Also met some pretty awesome people :)",
    link: 'https://bxscioly.github.io/' 
  },
  {
    name: "Lumiere",
    img: "lumiere.png",
    role: "Technology Product Manager",
    time: "Nov 2021 - Jan 2022",
    desc: "Developed portions of the website to improve UI/UX using Next.js and Tailwind CSS.",
    link: 'https://lumiere.codes/' 
  },
  {
    name: "The Orpheus Show",
    img: "orpheus.png",
    role: "Co-Host and Development",
    time: "Aug 2021 - Sep 2022",
    desc: "Co-hosted podcast episodes, assisted with operations, and developed the website using Next.js and CSS.",
    link: 'https://podcast.hackclub.com/'
  },
  {
    name: "Midnight Hacks",
    img: "midnight.png",
    role: "Lead organizer",
    time: "Nov 2021",
    desc: "Gained over 260 sign ups, helped organize workshops, built website using Next.js and CSS.",
    link: 'https://midnighthacks.tech/'
  },
];

export default function About() {
  return (
    <div className="h-full px-16 py-32 mx-40">
      <h1 className="inline py-2 mb-8 border-b-4 border-pink-600 text-7xl">Experiences</h1>
      <h2 className="mt-12 mb-12 text-xl">Here are some <span className="text-pink-600">experiences</span> I&apos;ve had throughout my high school career currently!</h2>
      <div className="grid grid-cols-2 gap-12">
        {experiences.map((exp, i) => (
          <div
            className="p-4 px-16 duration-200 border border-gray-400 rounded-3xl hover:border-pink-600"
            key={i}
          >
            <h1 className="my-10 text-2xl text-white">{exp.role}</h1>
            <div className="mb-4">
              <Image
                src={`/logos/${exp.img}`}
                alt={exp.name}
                width={150}
                height={150}
                className="fixed rounded-3xl"
              />
            </div>
            <h2 className="mb-4 text-4xl text-white">{exp.name}</h2>
            <h3 className="mb-4 text-2xl text-cyan-400">{exp.time}</h3>
            <p className="mb-6 text-2xl thin">{exp.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
