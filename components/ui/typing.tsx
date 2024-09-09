import { useState, useEffect } from "react";

export const Typing: React.FC<{ phrases: string[] }> = ({ phrases }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [backwards, setBackwards] = useState(false);
  let text = phrases[0];
  const delay = 300;

  useEffect(() => {
    if (currentIndex === text.length - 1) setBackwards(true);
    if (currentIndex === 1) {
      setBackwards(false);
      text = phrases[1];
    }

    if (!backwards) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) =>
          prevText.substring(0, prevText.length - 1)
        );
        setCurrentIndex((prevIndex) => prevIndex - 1);
      }, 50);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span>{currentText}</span>;
};
