import { useState } from "react";
import Router from "next/router";
import { AnimatePresence, motion } from "framer-motion";

export default function Page({ children }) {
  const [loading, setLoading] = useState(false);

  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

//   Router.onRouteChangeStart = (url) => {
//     setLoading(true);
//   };

//   Router.onRouteChangeComplete = (url) => {
//     setLoading(false);
//   };

  return (
    <div className="px-8 md:flex md:flex-col">
      {loading ? (
        <div className="flex-col items-center justify-center h-screen">
          <AnimatePresence exitBeforeEnter>
          <motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={({ type: "linear" }, { duration: 0.4 })}
            
          >
            <div></div>
          </motion.div>
          <h1>hello</h1>
        </AnimatePresence>
        </div>
      ) : (
        children
      )}
    </div>
  );
}
