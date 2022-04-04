import "../styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import Header from "../components/Layouts/Header";

function MyApp({ Component, pageProps, router }) {
  const getLayout = Component.getLayout || ((page) => page);

  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  return (
    <div className="flex flex-row px-8">
      <Header />
      <div className="text-white bg-black">
        <AnimatePresence exitBeforeEnter>
          <motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={({ type: "linear" }, { duration: 0.4 })}
            key={router.asPath}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default MyApp;
