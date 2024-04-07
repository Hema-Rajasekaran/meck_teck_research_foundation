import React, { useState, useEffect } from "react";
import { Cursor } from "react-simple-typewriter";
import "./Testing.css";

const Typewriter = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const currentWord = words[index];
      setDisplayedText((prevText) => {
        if (prevText === currentWord) {
          setIndex((prevIndex) => (prevIndex + 1) % words.length);
          return "";
        } else {
          return currentWord.slice(0, prevText.length + 1);
        }
      });
    }, 300);

    return () => clearInterval(interval);
  }, [index, words]);

  return <span>{displayedText}</span>;
};

export default function Testing() {
  return (
    <div>
      <div
        className="container"
      >
        We make you expert in
        <span className="highlight">
          <Typewriter words={[" Python", " Java", " IOT"]} />
        </span>
        <Cursor />
      </div>
    </div>
  );
}
