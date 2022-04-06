import {
  SiJavascript,
  SiJava,
  SiPython,
  SiGoland,
  SiCplusplus,
  SiPostgresql,
  SiPrisma,
  SiNodedotjs,
  SiNextdoor,
  SiTailwindcss,
  SiGit,
  SiHtml5,
  SiCss3,
  SiReact,
  SiStyledcomponents,
  SiFlutter,
  SiAndroidstudio,
} from "react-icons/si";

const skills = [
  {
    name: "Python",
    icon: <SiPython size={65} />,
    year: "2020",
    color: "border-cyan-400"
  },
  {
    name: "Javascript",
    icon: <SiJavascript size={65} />,
    year: "2021",
    color: "border-yellow-400"
  },
  {
    name: "Java",
    icon: <SiJava size={65} />,
    year: "2020",
    color: "border-orange-500"
  },
];

export default function Skills() {
  return (
    <div className="h-full px-16 py-32 mx-40 ">
      <h1 className="mb-8 text-7xl">Skills</h1>
      <h2 className="mb-16 text-xl">
        Here are the <span className="text-cyan-400">skills</span> I&apos;ve
        developed from personal projects/experiences!
      </h2>
      <div className="grid grid-cols-2 gap-12">
        {skills.map((skill, i) => (
          <div
            key={i}
            className={`px-10 py-6 border rounded-3xl ${skill.color}`}
          >
            <h1 className="mb-3 text-5xl">{skill.name}</h1>
            <span className="">{skill.year}</span>
            <div className="mt-4">{skill.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
