import "./index.scss";
import React from "react";
import Loader from "react-loaders";
import { useState } from "react";
import { useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters";
import portfolioData from "../../data/portfolio.json";
import img from "../../assets/portfolio/chilled-grape/chilled-grape.png";

export default function Portfolio() {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  function renderPortfolio(portfolioArray) {
    return portfolioArray.map((item, idx) => {
      return (
        <div className="image-box" key={idx}>
          <img src={item.cover} alt="img" className="portfolio-image" />
        </div>
      );
    });
  }

  return (
    <div className="container portfolio-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            strArray={["P", "o", "r", "t", "f", "o", "l", "i", "o"]}
            letterClass={letterClass}
            idx={7}
          />
        </h1>
      </div>
      {/* <div className="images-container">
        {renderPortfolio(portfolioData.portfolio)}
      </div> */}
      <Loader type="pacman" />
    </div>
  );
}
