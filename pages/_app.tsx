import "../styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import Header from "../components/Layouts/Header";
import { Page } from "../components/Layouts/page";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps, router }: AppProps) {

  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  return (
    <Page>
      <Header />
      <div className="flex-row text-white bg-black">
        <AnimatePresence exitBeforeEnter />
          <motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={({ duration: 0.4 })}
            key={router.asPath}
          >
            <Component {...pageProps} />
          </motion.div>
      </div>
    </Page>
  );
}

export default MyApp;
