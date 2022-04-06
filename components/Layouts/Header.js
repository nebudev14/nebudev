import { CgHome, CgProfile } from "react-icons/cg";
import { GoProject } from "react-icons/go";
import { FaProjectDiagram } from "react-icons/fa";

import Link from "next/link";


const icons = [
  {
    link: "/",
    icon: <CgHome size={40} />,
  },
  {
    link: "/about",
    icon: <CgProfile size={40} />,
  },
  {
    link: "/skills",
    icon: <FaProjectDiagram size={40} />,
  },
  {
    link: "/projects",
    icon: <GoProject size={40} />,
  },
];

export default function Header() {

  return (
    <div className="fixed z-50 flex flex-col items-center justify-center h-screen text-white">
      {icons.map((icon, i) => (
        <div
          key={i}
          className="mb-8 duration-200 hover:text-pink-600 hover:cursor-pointer"
        >
          <Link href={icon.link} scroll={false}>{icon.icon}</Link>
        </div>
      ))}
    </div>
  );
}
