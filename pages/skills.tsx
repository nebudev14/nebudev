import { NextPage } from "next";
import {
  SiJavascript,
  SiJava,
  SiPython,
  SiGoland,
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
  SiGraphql
} from "react-icons/si";

const skills = [
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
    name: "Typescript",
    icon: <SiTypescript size={65} />,
    year: "2022",
    color: "border-cyan-600",
  },
  {
    name: "Java",
    icon: <SiJava size={65} />,
    year: "2020",
    color: "border-orange-500",
  },
  {
    name: "Go",
    icon: <SiGoland size={65} />,
    year: "2021",
    color: "border-cyan-400",
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

const Skills: NextPage = () => {
  return (
    <div className="h-full px-4 py-32 mx-40 md:mx-0 md:px-2 md:py-16">
      <h1 className="inline py-2 mb-8 border-b-4 text-7xl border-cyan-400 md:text-3xl">
        Skills
      </h1>
      <h2 className="py-2 my-8 text-xl">
        Here are the <span className="text-cyan-400">skills</span> I&apos;ve
        developed from personal projects/experiences!
      </h2>
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

export default Skills;
