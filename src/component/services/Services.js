import React, { useState } from "react";
import "./services.css";

import cv from "./cv.docx";
import { motion } from "framer-motion";

const Services = ({ data }) => {
  const [showCardFront, setShowCardFront] = useState(false);
  const [showCardBack, setShowCardBack] = useState(false);

  const [isHovred, setIsHovred] = useState(false);

  const handleOnMouseHover = () => {
    setIsHovred(true);
  };

  const HandleOnMouseLeave = () => {
    setIsHovred(false);
  };
  return (
    <div
      className="container-services"
      id="services"
      onMouseEnter={handleOnMouseHover}
      onMouseLeave={HandleOnMouseLeave}
    >
      {/* ******left part****** */}
      <div className="left-side-services">
        <div
        className="left-animation"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovred ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <div className="container-items-services">
            <span className="item1">My Awsome </span>
            <span className="item1 item2">Services</span>
          </div>

          <p className="port-skill-services">{data.services}</p>

          <a href={cv} download>
            <button className="contactB b-ser">Download CV</button>
          </a>
        </div>
      </div>

      {/* ******reight part****** */}
      <div className="right-side-services">
        <motion.div
          className="card-frontend"
          whileHover={{
            scale: 1.04,
          }}
          transition={{
            layout: {
              duration: 1,
              type: "spring",
            },
          }}
          layout
          onClick={() => setShowCardFront(!showCardFront)}
        >
          <motion.p className="card-front">Front-end skills </motion.p>

          {showCardFront && (
            <motion.p
              className="images-front"
              style={{ width: "300px" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <img src={data.frontendSkills.react} alt="" className="react" />
              <img src={data.frontendSkills.html} alt="" className="html" />
              <img src={data.frontendSkills.redux} alt="" className="redux" />
              <img src={data.frontendSkills.css} alt="" className="css" />
              <img
                src={data.frontendSkills.javascript}
                alt=""
                className="javascript"
              />
              <img src={data.frontendSkills.motion} alt="" className="motion" />
            </motion.p>
          )}
        </motion.div>
        {/* ****************************** */}
        <motion.div
          className="card-backend"
          whileHover={{
            scale: 1.07,
          }}
          transition={{
            layout: {
              duration: 1,
              type: "spring",
            },
          }}
          layout
          onClick={() => setShowCardBack(!showCardBack)}
        >
          <motion.p className="card-back">Bach-end skills</motion.p>

          {showCardBack && (
            <motion.p
              className="images-back"
              style={{ width: "300px" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <img src={data.backendSkills.node} alt="" className="node" />
              <img
                src={data.backendSkills.express}
                alt=""
                className="express"
              />
              <img
                src={data.backendSkills.mongodb}
                alt=""
                className="mongoose"
              />
              <img
                src={data.backendSkills.thunder}
                alt=""
                className="thunder"
              />
            </motion.p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
