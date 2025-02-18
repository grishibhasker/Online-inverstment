import React from "react";
import "./OurDiffernce.css";
import { features, ourDiffFeatures } from "../../data";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  containerVariants,
  desVariants,
  tagVariants,
  titleVariants,
} from "../../animations";

const OurDifference = () => {
  return (
    <div className="od-wrapper">
      <div className="container">
        <div className="od-container">
          <div className="od-head">
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVariants}
              className="tag"
            >
              Our Difference
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className="title"
            >
              Fair Capital, Hassle Free
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
              className="text"
            >
              {""}
              Our mission is to level the playing field for early stage growth
              capital.
              <br /> We provide capital that is unbiased, flexible and non
              dilutive with the execution support to accelerate value creation.
            </motion.span>
          </div>
          <div className="od-features">
            {ourDiffFeatures.map((feature, i) => (
              <motion.div
                initial="offscreen"
                whileInView={"onscreen"}
                variants={containerVariants((i + 1) * 0.1)}
                key={i}
                className="od-feature"
              >
                <Image
                  src={feature.icon}
                  alt="features"
                  width={120}
                  height={128}
                />
                <span className="sec-title">{feature.title}</span>
                <span className="text">{feature.des}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurDifference;
