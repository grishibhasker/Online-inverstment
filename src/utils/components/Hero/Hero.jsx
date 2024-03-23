"use client";
import React from "react";
import "./Hero.css";
import EmailBox from "../EmailBox/EmailBox";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { HeroData } from "../../data";

const Hero = () => {
  const variants = (delay) => ({
    initial: {
      y: "18rem",
    },
    animate: {
      y: "0",
      transition: {
        type: "spring",
        damping: 25,
        duration: 2.5,
        delay,
      },
    },
  });
  const imgVariants = () => ({
    initial: {
      y: "18rem",
    },
    animate: {
      y: "0rem",
      transition: {
        type: "spring",
        duration: 2,
        stiffness: 30,
      },
    },
  });

  return (
    <div className="h-wrapper">
      <div className="container">
        <img src="hero/hero-arrow.png" alt="" className="h-arrow" />
        <div className="h-container">
          {/*left side */}
          <div className="h-left">
            <div className="image-row">
              {HeroData.slice(0, 3).map((person, i) => (
                <div className="person-pill" key={i}>
                  <motion.div
                    initial="initial"
                    animate="animate"
                    variants={variants(person.delay)}
                    style={{ backgroundColor: person.bg }}
                    className="person-pill-bg"
                  >
                    <motion.img
                      src={person.src}
                      alt={person.src}
                      variants={imgVariants()}
                      initial="initial"
                      animate="animate"
                    />
                  </motion.div>
                </div>
              ))}
            </div>
            <div className="image-row">
              {HeroData.slice(3, 6).map((person, i) => (
                <div className="person-pill" key={i}>
                  <motion.div
                    className="person-pill-bg"
                    variants={variants(person.delay)}
                    style={{ backgroundColor: person.bg }}
                    initial="initial"
                    animate="animate"
                  >
                    <motion.img
                      src={person.src}
                      alt={person.src}
                      variants={imgVariants()}
                      initial="initial"
                      animate="animate"
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          {/*Right side */}
          <div className="h-right">
            <div className="h-title">
              <span>Redefine How</span>
              <span>You Grrow Your</span>
              <span>Digital Business</span>
            </div>
            <div className="h-des">
              Revenue based funding and execution support designed for early
              stage founders
            </div>
            <EmailBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
