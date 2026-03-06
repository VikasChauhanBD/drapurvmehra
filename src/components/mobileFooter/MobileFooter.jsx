import React, { useState, useEffect } from "react";
import "./MobileFooter.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { FaMapLocationDot } from "react-icons/fa6";

function MobileFooter() {
  const [isQuickLinksOpen, setQuickLinksOpen] = useState(false);
  const [isSocialMediaOpen, setSocialMediaOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const navigate = useNavigate();

  const handleButtonToggle = () => setShowNav(!showNav);
  const handleCloseNav = () => setShowNav(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = sectionPosition - 80;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    handleCloseNav();
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

  useEffect(() => {
    if (activeLink) {
      navigate(`/${activeLink}`);
    }
  }, [activeLink, navigate]);

  return (
    <>
      <footer className="footer-mobile">
        <div className="footer-mobile-quick-links">
          <h2 onClick={() => setQuickLinksOpen(!isQuickLinksOpen)}>
            Quick Links <span>{isQuickLinksOpen ? "▲" : "▼"}</span>
          </h2>
          {isQuickLinksOpen && (
            <>
              <NavLink
                to="#about"
                className={activeLink === "about" ? "active" : ""}
                onClick={() => scrollToSection("about")}
              >
                About
              </NavLink>
              <NavLink
                to="#leading-surgeon"
                className={activeLink === "leading-surgeon" ? "active" : ""}
                onClick={() => scrollToSection("leading-surgeon")}
              >
                Leading Surgeon
              </NavLink>
              <NavLink
                to="#specialities"
                className={activeLink === "specialities" ? "active" : ""}
                onClick={() => scrollToSection("specialities")}
              >
                Educator
              </NavLink>
              <NavLink
                to="#ec-cba"
                className={activeLink === "ec-cba" ? "active" : ""}
                onClick={() => scrollToSection("ec-cba")}
              >
                Entrepreneur
              </NavLink>
            </>
          )}
        </div>

        <div className="footer-mobile-social-media">
          <h2 onClick={() => setSocialMediaOpen(!isSocialMediaOpen)}>
            Social Media <span>{isSocialMediaOpen ? "▲" : "▼"}</span>
          </h2>
          {isSocialMediaOpen && (
            <div className="footer-mobile-social-media-links">
              <a
                href="https://x.com/i/flow/login?redirect_after_login=%2FApurvDr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiX />
                <span>X</span>
              </a>
              <a
                href="https://www.facebook.com/drapurvmehra/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
                <span>Facebook</span>
              </a>
              <a
                href="https://www.linkedin.com/in/dr-apurv-mehra-22998917a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://www.youtube.com/channel/UCGwlKO8kzkcc6Bt1u-wsppQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
                <span>YouTube</span>
              </a>
              <a
                href="https://www.instagram.com/apurv.mehra/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
                <span>Instagram</span>
              </a>
            </div>
          )}
        </div>

        <div className="footer-mobile-contact-us">
          <h2>Get In Touch</h2>
          <div className="footer-mobile-contact-info">
            <FaMapLocationDot className="mobile-location-icon" />
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

export default MobileFooter;
