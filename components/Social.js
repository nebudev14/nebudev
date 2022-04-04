import { BsInstagram, BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const socials = [
  {
    alt: "github",
    img: <BsGithub size={50} />,
    link: "https://github.com/NebuDev14",
  },
  {
    alt: "insta",
    img: <BsInstagram size={50} />,
    link: "https://www.instagram.com/nebudev14/",
  },
  {
    alt: "twitter",
    img: <BsTwitter size={50} />,
    link: "https://twitter.com/nebudev14",
  },
  {
    alt: "email",
    img: <IoMdMail size={55} />,
    link: "mailto:yunw@bxscience.edu",
    color: "text-cyan-600",
  },
  {
    alt: "linkedin",
    img: <BsLinkedin size={50} />,
    link: "https://www.linkedin.com/in/warren-yun-240984216/",
  },
];

export default function Social() {
  return (
    <div className="flex flex-row items-center justify-start mb-4">
      {socials.map((icon, i) => (
        <div
          key={i}
          className="mr-6 duration-200 cursor-pointer hover:text-gray-400"
        >
          <a href={icon.link} target="_blank" rel="noreferrer">
            {icon.img}
          </a>
        </div>
      ))}
    </div>
  );
}
