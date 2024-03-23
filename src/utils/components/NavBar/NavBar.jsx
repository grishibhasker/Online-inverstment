"use client";

import React, { useState } from "react";
import "./NavBar.css";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Link } from "react-scroll";
const NavBar = () => {
  const [mobileMenuOpened, setMobileOpened] = useState(false);
  const [navStyle, setNavStyle] = useState("");
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.2) {
      setNavStyle("sticky");
    } else {
      setNavStyle("");
    }
  });
  return (
    <div className={`n-wrapper ${navStyle}`}>
      {/*DeskTop version */}
      <div className="container">
        <div className="n-container">
          {/*left side */}
          <div className="n-logo">
            <span>RBN CREATIONS</span>
          </div>
          {/*Right side */}
          <div className="n-right">
            <div className="n-menu">
              <Link to="wwd-wrapper" spy={true} smooth={true}>
                <span>What we do</span>
              </Link>
              <Link to="hiw-wrapper" spy smooth offset={100}>
                <span>How it works</span>
              </Link>
              <Link to="wwi-wrapper" spy smooth>
                <span>Who we inverst</span>
              </Link>
              <Link to="t-wrapper" spy smooth offset={100}>
                <span>Testimonials</span>
              </Link>
            </div>
            <div className="fund-button">Get Funded</div>
          </div>
        </div>
      </div>
      {/*Mobile/tab version */}
      <div className="nm-container">
        {/*logo */}
        <span>RBN CREATIONS</span>
        {/* menu icons*/}
        {!mobileMenuOpened ? (
          <BiMenuAltRight size={30} onClick={() => setMobileOpened(true)} />
        ) : (
          <RxCross2 size={30} onClick={() => setMobileOpened(false)} />
        )}

        {/*mobile menu */}

        <div
          className="nm-menu"
          style={{
            transform: mobileMenuOpened
              ? "translateX(0%)"
              : "translateX(-100%)",
          }}
        >
          <Link
            onClick={() => setMobileOpened(false)}
            to="wwd-wrapper"
            spy={true}
            smooth={true}
          >
            <span>What we do</span>
          </Link>
          <Link
            onClick={() => setMobileOpened(false)}
            to="hiw-wrapper"
            spy
            smooth
            offset={100}
          >
            <span>How it works</span>
          </Link>
          <Link
            onClick={() => setMobileOpened(false)}
            to="wwi-wrapper"
            spy
            smooth
          >
            <span>Who we inverst</span>
          </Link>
          <Link
            onClick={() => setMobileOpened(false)}
            to="t-wrapper"
            spy
            smooth
            offset={100}
          >
            <span>Testimonials</span>
          </Link>
          <div className="m-funded-button">Get Funded</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
