import Image from "next/image";

const experiences = [
  {
    name: "Lumiere",
    img: "lumiere.png",
    role: "Technology Product Manager",
    time: "Nov 2021 - Jan 2022",
    desc: "Developed portions of the website to improve UI/UX using Next.js and Tailwind CSS",
  },
  {
    name: "Lumiere",
    img: "lumiere.png",
    role: "Technology Product Manager",
    time: "Nov 2021 - Jan 2022",
    desc: "Developed portions of the website to improve UI/UX using Next.js and Tailwind CSS",
  },
  {
    name: "Lumiere",
    img: "lumiere.png",
    role: "Technology Product Manager",
    time: "Nov 2021 - Jan 2022",
    desc: "Developed portions of the website to improve UI/UX using Next.js and Tailwind CSS",
  },
  {
    name: "Lumiere",
    img: "lumiere.png",
    role: "Technology Product Manager",
    time: "Nov 2021 - Jan 2022",
    desc: "Developed portions of the website to improve UI/UX using Next.js and Tailwind CSS",
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
            <span className="mb-8 text-2xl text-white">{exp.role}</span>
            <div className="mb-4">
              <Image
                src={`/logos/${exp.img}`}
                alt={exp.name}
                width={125}
                height={125}
                className="fixed rounded-full"
              />
            </div>
            <h2 className="mb-4 text-4xl text-white">{exp.name}</h2>
            <h3 className="mb-4 text-2xl text-white">{exp.time}</h3>
            <p className="text-2xl thin">{exp.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
