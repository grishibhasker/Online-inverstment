"use client"
import NavBar from "@/src/utils/components/NavBar/NavBar";
import "./page.css"
import Hero from "@/src/utils/components/Hero/Hero";
import BradingVideo from "@/src/utils/components/BradingVideo/BradingVideo";
import WhatWeDo from "@/src/utils/components/WhatWeDo/WhatWeDo";
import OurDifference from "@/src/utils/components/OurDifference/OurDifference";
import {motion,useAnimation} from "framer-motion"
import HowItWorks from "@/src/utils/components/HowItWorks/HowItWorks";
import WhoWillInverst from "@/src/utils/components/WhoWillInverst/WhoWillInverst";
import Testmonials from "@/src/utils/components/Testmonials/Testmonials";
import Footer from "@/src/utils/components/Footer/Footer";
export default function Home() {
const controls=useAnimation();
  return (
    <motion.div className="app" animate={controls}>
      <NavBar></NavBar>
      <Hero/>
      <BradingVideo/>
      <WhatWeDo/>
      <motion.div
      onViewportEnter={()=>controls.start({
        backgroundColor:"var(--secondary-color)",})}
        onViewportLeave={()=>
        controls.start({
          backgroundColor:"white",
        })}
        viewport={{amount:0.4}}
      >
        
      <OurDifference/>
      
      </motion.div>
      <HowItWorks/>
      <motion.div
      onViewportEnter={()=>controls.start({
        backgroundColor:"var(--primary-color)",})}
        onViewportLeave={()=>
        controls.start({
          backgroundColor:"white",
        })}
        viewport={{amount:0.4}}
      >
        
      <WhoWillInverst/>
      
      </motion.div>
      <Testmonials/>
      <Footer/>
    </motion.div>
  );
}
