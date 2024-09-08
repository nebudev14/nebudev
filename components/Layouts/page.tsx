import React, { useState } from "react";
import Image from "next/image";
import Router from "next/router";
import { AnimatePresence, motion } from "framer-motion";

export const Page: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };


  return (
    <div className="md:flex md:flex-col">
      {loading ? (
        <div className="">
          <AnimatePresence />
            <motion.div
              initial="hidden"
              animate="enter"
              exit="exit"
              variants={variants}
              transition={({ duration: 0.4 })}
              >
              <div className="flex flex-col items-center justify-center h-screen">
                <Image
                  src="/warrenLoading.jpg"
                  alt="warren loading"
                  width={160}
                  height={160}
                  className="rounded-full"
                />
                <h1 className="p-4 mt-6 text-6xl text-center text-pink-600 border-b-4 border-cyan-400">
                  Loading...
                </h1>
              </div>
            </motion.div>
        </div>
      ) : (
        children
      )}
    </div>
  );
};
