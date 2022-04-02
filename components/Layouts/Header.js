import { CgHome, CgProfile } from "react-icons/cg";
import { GoProject } from "react-icons/go";
import { FaProjectDiagram } from "react-icons/fa";

const icons = [
  {
    link: "#home",
    icon: <CgHome size={40} />,
  },
  {
    link: "#about",
    icon: <CgProfile size={40} />,
  },
  {
    link: "#skills",
    icon: <FaProjectDiagram size={40} />,
  },
  {
    link: "#projects",
    icon: <GoProject size={40} />,
  },
];

export default function Header() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {icons.map((icon, i) => (
        <a href={`/${icon.link}`} key={i} className="mb-8 duration-200 hover:text-pink-600">
          {icon.icon}
        </a>
      ))}
    </div>
  );
}
