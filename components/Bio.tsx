import * as React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const bioText = `Hey! Welcome to my website. I'm a Full-Stack Developer from Seattle, WA. I
specialize in Front-End React frameworks but I have done work in C#, Ruby
on Rails, Python, and a handful of other languages and tools.`;

const Bio = () => {
  const [text, setText] = React.useState("");

  // Similar to componentDidMount and componentDidUpdate:
  React.useEffect(() => {
    const delay = (Math.random() * (1000 - 1) + 1) / 2;
    setTimeout(() => {
      if (text.length < bioText.length) {
        setText(text + bioText[text.length]);
      }
    }, delay);
  });

  return <p className={styles.description}>{text}</p>;
};

export default Bio;
