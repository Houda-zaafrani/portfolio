import React, { useState } from "react";
import "./navbar.css";

import { Link } from "react-scroll";
import Dropdown from "react-bootstrap/Dropdown";

import { motion } from "framer-motion";
const Navbar = () => {
  const [isHover, setIsHover] = useState(false);

  const handleHover = () => {
    setIsHover(true);
  };
  const handleLeave = () => {
    setIsHover(false);
  };
  const handleLinkClick = () => {
    setIsHover(false); // Set isHover to false when a link is clicked
  };
  return (
    <div className="container-navbar navbarP">
      <div className="left-side">
        H<span>OU</span>DA
      </div>

      <div className="right-side">
        <div className="desctop-menu-portfolio">
          <Link
            activeClass="active"
            to="home"
            className="linkP"
            spy={true}
            smooth={true}
            offset={-50}
            duration={-100}
          >
            Home
          </Link>

          <Link
            activeClass="active"
            to="services"
            className="linkP"
            spy={true}
            smooth={true}
            offset={-45}
            duration={-100}
          >
            Services{" "}
          </Link>

          <Link
            activeClass="active"
            to="portfolio"
            className="linkP"
            spy={true}
            smooth={true}
            offset={-45}
            duration={-100}
          >
            Portfolio{" "}
          </Link>

          <Link
            activeClass="active"
            to="contact"
            className="linkP"
            spy={true}
            smooth={true}
            offset={-45}
            duration={-100}
          >
            Contact{" "}
          </Link>
        </div>

        <div className="mobile-menu-portfolio">
          <Dropdown onMouseEnter={handleHover}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Menue{" "}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {isHover && (
                <motion.div
                  className="mobileMenue"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Link
                    activeClass="active"
                    to="home"
                    className="linkP"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={-100}
                    onClick={handleLinkClick}
                  >
                    Home
                  </Link>

                  <Link
                    activeClass="active"
                    to="services"
                    className="linkP"
                    spy={true}
                    smooth={true}
                    offset={-45}
                    duration={-100}
                    onClick={handleLinkClick}
                  >
                    Services{" "}
                  </Link>

                  <Link
                    activeClass="active"
                    to="portfolio"
                    className="linkP"
                    spy={true}
                    smooth={true}
                    offset={-45}
                    duration={-100}
                    onClick={handleLinkClick}
                  >
                    Portfolio{" "}
                  </Link>

                  <Link
                    activeClass="active"
                    to="contact"
                    className="linkP"
                    spy={true}
                    smooth={true}
                    offset={-45}
                    duration={-100}
                    onClick={handleLinkClick}
                  >
                    Contact{" "}
                  </Link>
                </motion.div>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
