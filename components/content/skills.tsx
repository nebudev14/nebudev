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
    borderColor: "border-[#007acc]",
    textColor: "text-[#3178C6]",
  },
  {
    name: "Go",
    icon: <BiLogoGoLang size={65} />,
    year: "2021",
    borderColor: "border-[#29BEB0]",
    textColor: "text-[#29BEB0]",
  },
  {
    name: "C",
    year: "2023",
    borderColor: "border-zinc-600",
    textColor: "text-[#29BEB0]",
  },
  {
    name: "Python",
    icon: <SiPython size={65} />,
    year: "2020",
    borderColor: "border-[#4B8BBE]",
    textColor: "text-[#FFD43B]",
  },
  {
    name: "Java",
    icon: <BiLogoJava size={65} />,
    year: "2020",
    borderColor: "border-[#f89820]",
    textColor: "text-[#5382a1]",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs size={65} />,
    year: "2021",
    borderColor: "border-green-400",
    textColor: "text-[#3c873a]",
  },
  {
    name: "Arduino",
    icon: <SiArduino size={65} />,
    year: "2020",
    borderColor: "border-[#4fccf3]",
    textColor: "text-[#29BEB0]",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql size={65} />,
    year: "2021",
    borderColor: "border-[#0064a5]",
    textColor: "text-[#008bb9]",
  },
  {
    name: "HTML",
    icon: <SiHtml5 size={65} />,
    year: "2020",
    borderColor: "border-[#FF5733]",
    textColor: "text-[#FF5733]",
  },
  {
    name: "CSS",
    icon: <SiCss3 size={65} />,
    year: "2020",
    borderColor: "border-[#264de4]",
    textColor: "text-[#2965f1]",
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
    name: "TRPC",
    year: "2023",
    color: "border-cyan-600",
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
      <div className="flex flex-col items-end justify-center md:items-center">
        <h1 className="inline-block px-2 py-2 mb-12 ml-auto font-mono text-2xl font-bold text-right border-b-4 md:w-full md:mb-16 md:px-2 md:mx-0 md:block md:py-3 md:text-xl md:text-center border-b-cyan-400">
          skills!
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-12 mb-10 md:grid-cols-1">
        {skills.map((skill, i) => (
          <div
            key={i}
            className={`px-10 py-8 flex border-4 rounded-2xl ${skill.borderColor}`}
          >
            <div className="mr-auto">
              <h1 className="mb-3 text-3xl md:text-2xl">{skill.name}</h1>
              <span className="font-mono">{skill.year}</span>
            </div>
            <div className={`mt-4 ${skill.textColor}`}>{skill.icon}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-end justify-center">
        <h1 className="inline-block px-2 py-2 mb-12 ml-auto font-mono text-2xl font-bold text-right md:py-3 md:text-xl md:text-center ">
          frameworks/tools!
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-12 mb-10 md:grid-cols-1">
        {frameworks.map((skill, i) => (
          <div
            key={i}
            className={`px-10 flex py-8 border-4 rounded-2xl ${skill.color}`}
          >
            <div className="mr-auto">
              <h1 className="mb-3 text-3xl md:text-2xl">{skill.name}</h1>
              <span className="font-mono">{skill.year}</span>
            </div>
            <div className="mt-4">{skill.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
