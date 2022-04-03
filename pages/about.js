import Image from "next/image";

const experiences = [
  {
    name: "Lumiere",
    img: "lumiere.png",
    role: "Technology Product Manager",
    time: "Nov 2021 - Jan 2022",
    desc: "Developed portions of the website to improve UI/UX using Next.js and Tailwind CSS.",
  },
  {
    name: "Science Olympiad",
    img: "scioly.png",
    role: "Competitor",
    time: "Oct 2021 - Present",
    desc: "Competed in events like Detector Building, WiFi-Lab, and A&P. Assisted building the website using React and Styled Components.",
  },
  {
    name: "The Orpheus Show",
    img: "orpheus.png",
    role: "Co-Host and Development",
    time: "Aug 2021 - Sep 2022",
    desc: "Co-hosted podcast episodes, assisted with operations, and developed the website using Next.js and CSS.",
  },
  {
    name: "Midnight Hacks",
    img: "midnight.png",
    role: "Lead organizer",
    time: "Nov 2021",
    desc: "Gained over 260 sign ups, helped organize workshops, built website using Next.js and CSS.",
  },
];

export default function About() {
  return (
    <div className="flex flex-col items-start justify-start h-full px-16 py-32 mx-80">
      <h1 className="mb-16 text-7xl">Experiences</h1>
      <div className="grid grid-cols-2 gap-12">
        {experiences.map((exp, i) => (
          <div
            className="p-4 px-16 border border-gray-400 rounded-3xl"
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
            <h3 className="mb-4 text-2xl text-white">{exp.time}</h3>
            <p className="mb-6 text-2xl thin">{exp.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
