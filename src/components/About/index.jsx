import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNodeJs,
  faReact,
  faHtml5,
  faCss3,
  faJs,
  faJsSquare,
  faGit,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";

export default function About() {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={["A", "b", "o", "u", "t", " ", "M", "e"]}
              letterClass={letterClass}
              idx={7}
            />
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            mollitia expedita voluptatibus, dolores nam eligendi alias. Modi
            praesentium alias perferendis?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            mollitia expedita voluptatibus, dolores nam eligendi alias. Modi
            praesentium alias perferendis?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            mollitia expedita voluptatibus, dolores nam eligendi alias. Modi
            praesentium alias perferendis?
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cube-spinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5Ed4F4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faNodeJs} color="green" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faGit} color="#EC4D28" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}
