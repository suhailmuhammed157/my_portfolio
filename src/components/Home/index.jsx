import React from "react";
import "./index.scss";
import LogoTitle from "../../assets/images/logo-s.png";
import { Link } from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters";
import Logo from "./Logo";

export default function Home() {
  const [letterClass, setLetterClass] = React.useState("text-animate");
  const nameArray = ["u", "h", "a", "i", "l", ","];
  const jobArray = [
    "F",
    "u",
    "l",
    "l",
    " ",
    "s",
    "t",
    "a",
    "c",
    "k",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];

  React.useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img alt="dev" src={LogoTitle} />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={20}
          />
        </h1>
        <h2>Nodejs / ReactJs / Flutter / PostgreSQL</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Logo/>
    </div>
  );
}
