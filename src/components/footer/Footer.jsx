import React, { useState, useEffect } from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import FooterIcon from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

function Footer() {
  const [activeLink, setActiveLink] = useState("");

  const scrollToSection = (sectionId, e) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = sectionPosition - 80;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top + scrollPosition;
        const height = section.offsetHeight;
        if (
          scrollPosition >= top - windowHeight * 0.5 &&
          scrollPosition < top + height - windowHeight * 0.5
        ) {
          setActiveLink(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <footer className="footer-container">
        <div className="footer-icons-div">
          <img src={FooterIcon} alt="Footer logo" />
        </div>

        {/* ✅ Quick Links Section */}
        <div className="footer-quick-links">
          <h2>Quick Links</h2>

          <NavLink
            to="#about"
            className={activeLink === "about" ? "active" : ""}
            onClick={(e) => scrollToSection("about", e)}
          >
            About
          </NavLink>

          <NavLink
            to="#leading-surgeon"
            className={activeLink === "leading-surgeon" ? "active" : ""}
            onClick={(e) => scrollToSection("leading-surgeon", e)}
          >
            Leading Surgeon
          </NavLink>

          <NavLink
            to="#specialities"
            className={activeLink === "specialities" ? "active" : ""}
            onClick={(e) => scrollToSection("specialities", e)}
          >
            Educator
          </NavLink>

          <NavLink
            to="#econceptual-and-cerebellum-academy"
            className={
              activeLink === "econceptual-and-cerebellum-academy"
                ? "active"
                : ""
            }
            onClick={(e) =>
              scrollToSection("econceptual-and-cerebellum-academy", e)
            }
          >
            Entrepreneur
          </NavLink>
        </div>

        {/* ✅ Social Media Section */}
        <div className="footer-social-media">
          <h2>Social Media</h2>
          <div className="footer-social-media-links">
            <NavLink
              to="https://www.facebook.com/drapurvmehra/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
              <span>Facebook</span>
            </NavLink>

            <NavLink
              to="https://www.linkedin.com/in/dr-apurv-mehra-22998917a/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </NavLink>

            <NavLink
              to="https://www.youtube.com/channel/UCGwlKO8kzkcc6Bt1u-wsppQ"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube />
              <span>YouTube</span>
            </NavLink>

            <NavLink
              to="https://www.instagram.com/apurv.mehra/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
              <span>Instagram</span>
            </NavLink>
          </div>
        </div>

        {/* ✅ Contact Info Section */}
        <div className="footer-contact-us">
          <h2>Get In Touch</h2>
          <div className="footer-contact-info">
            <FaMapLocationDot className="location-icon" />
            <h4>
              28 Vigyan Vihar, Surajmal Vihar, Adjacent to Yamuna Sports Complex
              Gate No.2, Delhi – 110092
            </h4>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
