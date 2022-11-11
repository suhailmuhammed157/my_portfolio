import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react';

export default function About(){
    const [letterClass, setLetterClass] = useState("text-animate");
  

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);
    return(
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    strArray={['A','b','o','u','t',' ','M','e']}
                    letterClass={letterClass}
                    idx={15}
                    />
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis mollitia expedita voluptatibus, dolores nam eligendi alias. Modi praesentium alias perferendis?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis mollitia expedita voluptatibus, dolores nam eligendi alias. Modi praesentium alias perferendis?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis mollitia expedita voluptatibus, dolores nam eligendi alias. Modi praesentium alias perferendis?</p>
            </div>
        </div>
    )
}