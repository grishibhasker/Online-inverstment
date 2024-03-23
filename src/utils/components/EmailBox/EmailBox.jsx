import React from "react";
import "./EmailBox.css";
import { LuMail } from "react-icons/lu";
import { motion } from "framer-motion";
import { containerVariants } from "../../animations";

const EmailBox = () => {
  return (
    <motion.div
      initial={{
        width: ".5rem",
        borderRadius: "100%",
      }}
      whileInView={{
        width: "70%",
        borderRadius: "999px",
        transition: {
          type: "easeOut",
          duration: 1,
        },
      }}
      className="emailBox"
    >
      {/* Icon */}
      <motion.div>
        <LuMail size={30} color="gray" />
      </motion.div>

      {/* Input */}
      <motion.input placeholder="Enter your email" />

      {/* "Get Funded" Button */}
      <motion.div className="getFunded">Get Funded</motion.div>
    </motion.div>
  );
};

export default EmailBox;
