export const Timeline: React.FC = () => {
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

        <div className="flex items-center justify-between w-full mb-8 right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 w-8 h-8 bg-pink-600 rounded-full shadow-xl">
            <h1 className="mx-auto text-lg font-semibold text-white"></h1>
          </div>
          <div className="order-1 w-5/12 px-6 py-4 rounded-lg shadow-xl bg-zinc-900">
            <h3 className="mb-3 text-xl font-bold text-white">Lorem Ipsum</h3>
            <p className="text-sm leading-snug tracking-wide text-gray-200 text-opacity-100">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>

        <div className="flex flex-row-reverse items-center justify-between w-full mb-8 left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 w-8 h-8 rounded-full shadow-xl bg-cyan-400">
            <h1 className="mx-auto text-lg font-semibold text-white"></h1>
          </div>
          <div className="order-1 w-5/12 px-6 py-4 rounded-lg shadow-xl bg-zinc-900">
            <h3 className="mb-3 text-xl font-bold text-white">Lorem Ipsum</h3>
            <p className="text-sm leading-snug tracking-wide text-gray-200 text-opacity-100">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between w-full mb-8 right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 w-8 h-8 bg-pink-600 rounded-full shadow-xl">
            <h1 className="mx-auto text-lg font-semibold text-white"></h1>
          </div>
          <div className="order-1 w-5/12 px-6 py-4 rounded-lg shadow-xl bg-zinc-900">
            <h3 className="mb-3 text-xl font-bold text-white">
              Lorem Ipsum
            </h3>
            <p className="text-sm leading-snug tracking-wide text-gray-200 text-opacity-100">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>

        <div className="flex flex-row-reverse items-center justify-between w-full mb-8 left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 w-8 h-8 rounded-full shadow-xl bg-cyan-400">
            <h1 className="mx-auto text-lg font-semibold text-white"></h1>
          </div>
          <div className="order-1 w-5/12 px-6 py-4 rounded-lg shadow-xl bg-zinc-900">
            <h3 className="mb-3 text-xl font-bold text-white">
              Lorem Ipsum
            </h3>
            <p className="text-sm leading-snug tracking-wide text-gray-200 text-opacity-100">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
