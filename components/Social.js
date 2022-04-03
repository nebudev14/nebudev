import { BsInstagram, BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";

const socials = [
  {
    alt: "github",
    img: <BsGithub size={50} />,
    link: "https://github.com/NebuDev14",
    color: "text-pink-600",
  },
  {
    alt: "insta",
    img: <BsInstagram size={50} />,
    link: "https://www.instagram.com/nebudev14/",
    color: "text-pink-500",
  },
  {
    alt: "twitter",
    img: <BsTwitter size={50} />,
    link: "https://twitter.com/nebudev14",
    color: "text-cyan-400",
  },
  {
    alt: "linkedin",
    img: <BsLinkedin size={50} />,
    link: "https://www.linkedin.com/in/warren-yun-240984216/",
    color: "text-cyan-600",
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
