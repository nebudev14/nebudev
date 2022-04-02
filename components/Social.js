import Image from "next/image";

const socials = [
  {
    alt: "github",
    path: "/github.svg",
    link: "https://github.com/NebuDev14",
  },
  {
    alt: "insta",
    path: "/instagram.svg",
    link: "https://www.instagram.com/nebudev14/",
  },
  {
    alt: "twitter",
    path: "/twitter.svg",
    link: "https://twitter.com/nebudev14",
  },
  {
    alt: "linkedin",
    path: "/linkedin.svg",
    link: "https://www.linkedin.com/in/warren-yun-240984216/",
  },
];

export default function Social() {
  return (
    <div className="flex flex-row items-center justify-start mb-4">
      {socials.map((icon, i) => (
        <div
          key={i}
          className="mr-6 duration-200 cursor-pointer hover:scale-125"
        >
          <a href={icon.link} target="_blank" rel="noreferrer">
            <Image
              src={`/social/${icon.path}`}
              alt={icon.alt}
              width={50}
              height={50}
            />
          </a>
        </div>
      ))}
    </div>
  );
}
