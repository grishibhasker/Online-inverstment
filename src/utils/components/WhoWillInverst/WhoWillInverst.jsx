import React from "react";
import "./WhoWillInverst.css";
import { whoWeInvest } from "../../data";
import { motion } from "framer-motion";
import {
  containerVariants,
  tagVariants,
  titleVariants,
} from "../../animations";
const WhoWillInverst = () => {
  return (
    <div className="wwi-wrapper">
      <div className="container">
        <div className="wwi-container">
          <div className="wwi-left">
            <div className="head">
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={tagVariants}
                className="tag"
              >
                Who we invest in
              </motion.span>
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVariants}
                className="title"
              >
                {""}
                Digital businesses
                <br />
                with early traction
              </motion.span>
            </div>
            {/*features */}
            <div className="wwi-features">
              {whoWeInvest.map((feature, i) => (
                <motion.div
                  initial="offscreen"
                  whileInView={"onscreen"}
                  variants={containerVariants(i * 0.05 + 1)}
                  className="wwi-feature"
                >
                  <span className="des">{feature.title}</span>
                  <span className="text">{feature.des}</span>
                </motion.div>
              ))}
            </div>
          </div>
          {/*Right side */}
          <div className="wwi-right">
            <motion.img
              initial="offscreen"
              whileInView={"onscreen"}
              variants={containerVariants(0.5)}
              src="persons.png"
              alt="person"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWillInverst;
