import { CgHome, CgProfile } from "react-icons/cg";
import { GoProject } from "react-icons/go";
import { FaProjectDiagram } from "react-icons/fa";

import Link from "next/link";


const icons = [
  {
    link: "/",
    icon: <CgHome className="text-4xl md:text-2xl" />,
  },
  {
    link: "/about",
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

  return (
    <div className="fixed z-50 flex flex-col items-center justify-center h-screen mt-4 text-white md:flex-row md:h-full md:relative">
      {icons.map((icon, i) => (
        <div
          key={i}
          className="mb-8 duration-200 hover:text-pink-600 hover:cursor-pointer md:mb-0 md:mx-3"
        >
          <Link href={icon.link} scroll={false}>{icon.icon}</Link>
        </div>
      ))}
    </div>
  );
}
