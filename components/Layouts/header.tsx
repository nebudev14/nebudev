import { CgHome, CgProfile } from "react-icons/cg";
import { GoProject } from "react-icons/go";
import { FaProjectDiagram } from "react-icons/fa";
import { useState } from "react";

import Link from "next/link";

const icons = [
  {
    link: "/",
    icon: <CgHome className="text-4xl md:text-2xl" />,
  },
  {
    link: "#about",
    icon: <CgProfile className="text-4xl md:text-2xl" />,
  },
  {
    link: "/skills",
    icon: <FaProjectDiagram className="text-4xl md:text-2xl" />,
  },
  {
    link: "/projects",
    icon: <GoProject className="text-4xl md:text-2xl" />,
  },
];

export const Header: React.FC = () => {
  const [selected, setSelcted] = useState(0);

  return (
    <div className="fixed z-50 flex flex-col items-center justify-center h-screen mt-4 text-white md:flex-row md:h-full md:relative">
      {icons.map((icon, i) => (
        <div
          key={i}
          className={`mb-6 px-2 py-1 border-l-4 duration-200 hover:text-cyan-400 md:py-2 md:border-b-2 md:border-l-0 hover:cursor-pointer md:mb-0 md:mx-2 ${
            selected === i ? "border-pink-600" : "border-black"
          }`}
        >
          <Link href={icon.link} scroll={false}>
            <div onClick={() => setSelcted(i)}>{icon.icon}</div>
          </Link>
        </div>
      ))}
    </div>
  );
};
