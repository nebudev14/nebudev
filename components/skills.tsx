import { NextPage } from "next";
import {
  SiJavascript,
  SiPython,
  SiArduino,
  SiPostgresql,
  SiPrisma,
  SiNodedotjs,
  SiTailwindcss,
  SiGit,
  SiHtml5,
  SiCss3,
  SiReact,
  SiFlutter,
  SiNextdotjs,
  SiTypescript,
  SiGraphql,
  SiDocker,
} from "react-icons/si";
import { BiLogoGoLang, BiLogoJava } from "react-icons/bi";

const skills = [
  {
    name: "Typescript",
    icon: <SiTypescript size={65} />,
    year: "2022",
    color: "border-cyan-600",
  },
  {
    name: "Go",
    icon: <BiLogoGoLang size={65} />,
    year: "2021",
    color: "border-cyan-400",
  },
  {
    name: "Python",
    icon: <SiPython size={65} />,
    year: "2020",
    color: "border-cyan-500",
  },
  {
    name: "Javascript",
    icon: <SiJavascript size={65} />,
    year: "2021",
    color: "border-yellow-400",
  },
  {
    name: "Java",
    icon: <BiLogoJava size={65} />,
    year: "2020",
    color: "border-orange-500",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs size={65} />,
    year: "2021",
    color: "border-green-400",
  },
  {
    name: "Arduino",
    icon: <SiArduino size={65} />,
    year: "2020",
    color: "border-cyan-300",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql size={65} />,
    year: "2021",
    color: "border-blue-400",
  },
  {
    name: "HTML",
    icon: <SiHtml5 size={65} />,
    year: "2020",
    color: "border-orange-400",
  },
  {
    name: "CSS",
    icon: <SiCss3 size={65} />,
    year: "2020",
    color: "border-cyan-400",
  },
];

const frameworks = [
  {
    name: "Next.Js",
    icon: <SiNextdotjs size={65} />,
    year: "2021",
    color: "",
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss size={65} />,
    year: "2021",
    color: "border-cyan-400",
  },
  {
    name: "Prisma",
    icon: <SiPrisma size={65} />,
    year: "2021",
    color: "border-cyan-600",
  },
  {
    name: "GraphQL",
    icon: <SiGraphql size={65} />,
    year: "2021",
    color: "border-pink-500",
  },
  {
    name: "Docker",
    icon: <SiDocker size={65} />,
    year: "2021",
    color: "border-cyan-400",
  },
  {
    name: "Git",
    icon: <SiGit size={65} />,
    year: "2020",
    color: "border-orange-600",
  },
  {
    name: "React",
    icon: <SiReact size={65} />,
    year: "2022",
    color: "border-cyan-400",
  },
  {
    name: "Flutter",
    icon: <SiFlutter size={65} />,
    year: "2021",
    color: "border-cyan-300",
  },
];

export const Skills: React.FC = () => {
  return (
    <div className="w-full h-full px-16 mt-8 md:px-0 pb-14">
      <div className="flex items-end justify-center">
        <h1 className="inline-block px-2 py-2 mb-12 ml-auto font-mono text-2xl font-bold text-right border-b-4 md:py-3 md:text-xl md:text-center border-b-cyan-400">
          skills!
        </h1>
      </div>
      <h2 className="mb-6 text-3xl">Languages</h2>
      <div className="grid grid-cols-2 gap-12 mb-10 md:grid-cols-1">
        {skills.map((skill, i) => (
          <div
            key={i}
            className={`px-10 py-6 border-2 rounded-3xl ${skill.color}`}
          >
            <h1 className="mb-3 text-5xl md:text-2xl">{skill.name}</h1>
            <span className="">{skill.year}</span>
            <div className="mt-4">{skill.icon}</div>
          </div>
        ))}
      </div>
      <h2 className="my-6 text-3xl">Frameworks/Tools</h2>
      <div className="grid grid-cols-2 gap-12 mb-10 md:grid-cols-1">
        {frameworks.map((skill, i) => (
          <div
            key={i}
            className={`px-10 py-6 border-2 rounded-3xl ${skill.color}`}
          >
            <h1 className="mb-3 text-5xl md:text-2xl">{skill.name}</h1>
            <span className="">{skill.year}</span>
            <div className="mt-4">{skill.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
