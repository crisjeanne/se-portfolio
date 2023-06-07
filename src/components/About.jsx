import React, { useState, useLayoutEffect } from 'react';
import './About.css';

function About() {
  const mainTexts = ['Cris Jeanne Pador', 'Software Engineer'];
  const cardTexts = [
    "I am a passionate developer, transitioning my career to the tech industry. Through Avion School's bootcamp, I gained practical expertise in various programming languages and frameworks.",
    "Equipped with a solid foundation in software development, I excel in building web applications, crafting intuitive interfaces, and developing cutting-edge solutions.",
    "I am driven by dedication, passion, and a commitment to excellence, continuously expanding my knowledge to deliver high-quality solutions that empower user experiences.",
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isContentAnimating, setIsContentAnimating] = useState(false);

  useLayoutEffect(() => {
    const interval = setInterval(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % mainTexts.length);
        setIsFadingOut(false);
      }, 500); // Adjust the duration for each text (in milliseconds)
    }, 5000); // Adjust the interval between text changes (in milliseconds)

    return () => {
      clearInterval(interval);
    };
  }, [mainTexts.length]);

  const toggleContentVisibility = () => {
    setIsContentAnimating(true);
    setTimeout(() => {
      setIsContentVisible(!isContentVisible);
      setIsContentAnimating(false);
    }, 300); // Adjust the animation duration (in milliseconds)
  };

  return (
    <section id="about">
      {!isContentVisible && (
        <div onClick={toggleContentVisibility}>
          <h1 className={`fade ${isFadingOut ? 'fade-out' : 'fade-in'}`}>
            <p style={{ display: 'inline' }}>&lt;&#47;</p> {mainTexts[currentTextIndex]}{' '}
            <p style={{ display: 'inline' }}>&gt;</p>
          </h1>
        </div>
      )}
      {isContentVisible && (
        <div className={`content ${isContentAnimating ? 'fade-out' : 'fade-in'}`} onClick={toggleContentVisibility}>
          {cardTexts.map((text, index) => (
            <div key={index} className="card">
              <p className={`fade ${isFadingOut ? 'fade-out' : 'fade-in'}`}>{text}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default About;
