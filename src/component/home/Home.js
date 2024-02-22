import React, { useState } from "react";
import { useEffect } from "react";

import "./home.css";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-scroll";
const Home = ({ data }) => {
  const controlsTest = useAnimation();
  const controlsImage = useAnimation();

  const runAnimationText = async () => {
    await controlsTest.start({ x: 140 });
    await controlsTest.start({ x: 0 });
  };

  const runAnimationTextImage = async () => {
    await controlsImage.start({ x: -140 });
    await controlsImage.start({ x: -15 });
  };

  useEffect(() => {
    runAnimationText();
  }, []);

  useEffect(() => {
    runAnimationTextImage();
  }, []);
  // controle animation
  const shouldAnimateDesIntro = window.innerWidth > 500;
  const shouldAnimateImgIntro = window.innerWidth > 500;

  return (
    <div className="container-home home" id="home">
      {/* ****left part*** */}

      <motion.div
        className="left-side-home"
        initial={{ opacity: 1 }}
        animate={shouldAnimateDesIntro ? controlsTest : {}}
        transition={{ duration: shouldAnimateDesIntro ? 1 : 0 }}
      >
        <span className="item1">Hello!</span>
        <span className="item2">
          I'm
          <span className="item3"> Houda</span>
        </span>

        <span className="skill">{data.intro}</span>

        <Link to="contact">
          <button className="contactB bout">Here me</button>
        </Link>
      </motion.div>

      {/* ****right part*** */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={shouldAnimateImgIntro ? controlsImage : {}}
        transition={{ duration: shouldAnimateImgIntro ? 1 : 0 }}
       className="right-side-home"
      >
        <img src={data.image} alt=""  className="me-home"/>
      </motion.div>
    </div>
  );
};

export default Home;
