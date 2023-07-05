export const Timeline: React.FC = () => {
  const experiences = [
    {
      name: "Sciborgs",
      img: "sciborgs.png",
      role: "Captain",
      time: "Nov 2021 - Present",
      desc: "At my school's robotics team, we write robot code in Java and mess around with robot mechanisms using the WPILIB API.",
      link: "https://www.sciborgs1155.org/",
    },
    {
      name: "AtomHacks",
      img: "AtomHacks.png",
      role: "Head of Programming",
      time: "Oct 2021 - Present",
      desc: "Assisted with event organization, mentored and helped participants with technical difficulties, and helped develop the website!",
      link: "https://atomhacks.org/",
    },
    {
      name: "Lumiere",
      img: "lumiere.png",
      role: "Technology Product Manager",
      time: "Nov 2021 - Jan 2022",
      desc: "Developed portions of the website to improve UI/UX using Next.js and Tailwind CSS.",
      link: "https://lumiere.codes/",
    },
    {
      name: "The Orpheus Show",
      img: "orpheus.png",
      role: "Co-Host and Development",
      time: "Aug 2021 - Sep 2021",
      desc: "Co-hosted podcast episodes, assisted with operations, and developed the website using Next.js and CSS.",
      link: "https://podcast.hackclub.com/",
    },
  ];

  return (
    <div className="w-full h-full px-16 mx-auto pb-14">
      <div className="relative h-full p-10 overflow-hidden wrap">
        <h1 className="inline px-2 py-2 text-4xl font-bold border-b-4 border-b-pink-600">
          Experiences
        </h1>
        <div
          className="absolute h-full mt-12 border border-gray-200 border-2-2 border-opacity-20"
          style={{ left: "50%" }}
        ></div>

        {experiences.map((experience, i) => (
          <div
            className={`flex items-center justify-between w-full mb-8 py-4 right-timeline ${
              i % 2 != 0 ? `flex-row-reverse text-right` : ``
            }`}
            key={i}
          >
            <div className="order-1 w-5/12"></div>
            <div
              className={`z-20 flex items-center order-1 w-8 h-8  rounded-full shadow-xl ${
                i % 2 == 0 ? `bg-pink-600` : `bg-cyan-400`
              }`}
            >
              <h1 className="mx-auto text-lg font-semibold text-white"></h1>
            </div>
            <div className="order-1 w-5/12 px-5 py-4 shadow-xl rounded-xl bg-zinc-900">
              <h3
                className={`inline-block  py-1 mb-2 text-2xl font-bold text-white border-b-2 ${
                  i % 2 != 0 ? `pl-2 border-b-pink-600` : `pr-2 border-b-cyan-400`
                }`}
              >
                {experience.name}
              </h3>
              <h3 className="mb-2 text-lg text-gray-400">{experience.role}</h3>
              <p className="mb-4 text-base leading-snug tracking-wide text-gray-200 text-opacity-100">
                {experience.desc}
              </p>
              <p className="text-sm text-gray-400">{experience.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
