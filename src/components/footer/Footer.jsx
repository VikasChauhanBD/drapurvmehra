// import React, { useState, useEffect } from "react";
// import "./Footer.css";
// import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
// // import { SiX } from "react-icons/si";
// import { FaMapLocationDot } from "react-icons/fa6";
// import FooterIcon from "../../assets/images/logo.png";
// import { NavLink, useNavigate } from "react-router-dom";

// function Footer() {
//   const [showNav, setShowNav] = useState(false);
//   const navigate = useNavigate();

//   const handleButtonToggle = () => {
//     setShowNav(!showNav);
//   };

//   const handleCloseNav = () => {
//     setShowNav(false);
//   };

//   const scrollToSection = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       const sectionPosition =
//         section.getBoundingClientRect().top + window.scrollY;
//       const offsetPosition = sectionPosition - 80; // 80 for navbar
//       window.scrollTo({
//         top: offsetPosition,
//         behavior: "smooth",
//       });
//     }

//     handleCloseNav();
//   };

//   const [activeLink, setActiveLink] = useState("");
//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = document.querySelectorAll("section[id]");
//       const scrollPosition = window.scrollY;
//       const windowHeight = window.innerHeight;
//       sections.forEach((section) => {
//         const top = section.getBoundingClientRect().top + scrollPosition;
//         const height = section.offsetHeight;
//         if (
//           scrollPosition >= top - windowHeight * 0.5 &&
//           scrollPosition < top + height - windowHeight * 0.5
//         ) {
//           setActiveLink(section.id);
//         }
//       });
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     if (activeLink) {
//       navigate(`/${activeLink}`);
//     }
//   }, [activeLink, navigate]);

//   return (
//     <>
//       <footer className="footer-container">
//         <div className="footer-icons-div">
//           <img src={FooterIcon} alt="" />
//         </div>

//         <div className="footer-quick-links">
//           <h2>Quick Links</h2>
//           <NavLink
//             to="#about"
//             className={activeLink === "about"}
//             onClick={() => scrollToSection("about")}
//           >
//             About
//           </NavLink>

//           <NavLink
//             to="#leading-surgeon"
//             className={activeLink === "leading-surgeon"}
//             onClick={() => scrollToSection("leading-surgeon")}
//           >
//             Leading Surgeon
//           </NavLink>

//           <NavLink
//             to="#specialities"
//             className={activeLink === "specialities"}
//             onClick={() => scrollToSection("specialities")}
//           >
//             Educator
//           </NavLink>

//           <NavLink
//             to="#ec-cba"
//             className={activeLink === "ec-cba"}
//             onClick={() => scrollToSection("ec-cba")}
//           >
//             Entrepreneur
//           </NavLink>
//         </div>

//         <div className="footer-social-media">
//           <h2>Social Media</h2>
//           <div className="footer-social-media-links">
//             {/* <NavLink
//               to="https://x.com/i/flow/login?redirect_after_login=%2FApurvDr"
//               target="_blank"
//             >
//               <SiX />
//               <span>X</span>
//             </NavLink> */}
//             <NavLink
//               to="https://www.facebook.com/drapurvmehra/"
//               target="_blank"
//             >
//               <FaFacebook />
//               <span>Facebook</span>
//             </NavLink>
//             <NavLink
//               to="https://www.linkedin.com/in/dr-apurv-mehra-22998917a/%20"
//               target="_blank"
//             >
//               <FaLinkedin />
//               <span>LinkedIn</span>
//             </NavLink>
//             <NavLink
//               to="https://www.youtube.com/channel/UCGwlKO8kzkcc6Bt1u-wsppQ"
//               target="_blank"
//             >
//               <FaYoutube />
//               <span>Youtube</span>
//             </NavLink>
//             <NavLink
//               to="https://www.instagram.com/apurv.mehra/?hl=en"
//               target="_blank"
//             >
//               <FaInstagram />
//               <span>Instagram</span>
//             </NavLink>
//           </div>
//         </div>

//         <div className="footer-contact-us">
//           <h2>Get In Touch</h2>

//           <div className="footer-contact-info">
//             <FaMapLocationDot className="location-icon" />
//             <h4>
//               28 Vigyan Vihar, Surajmal Vihar, Adjacent to Yamuna Sports Complex
//               Gate No.2, Delhi – 110092
//             </h4>
//           </div>
//         </div>
//       </footer>

//       <footer className="lower-footer">
//         <hr />
//         <p>© 2025 Dr. Apurv Mehra</p>
//       </footer>
//     </>
//   );
// }

// export default Footer;

import React, { useState, useEffect } from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import FooterIcon from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

function Footer() {
  const [activeLink, setActiveLink] = useState("");

  const scrollToSection = (sectionId, e) => {
    e.preventDefault(); // ✅ prevent URL change
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = sectionPosition - 80; // adjust for navbar
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // ✅ Track current active section while scrolling
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

      <footer className="lower-footer">
        <hr />
        <p>
          &copy; 2026 Dr. Apurv Mehra. All rights reserved | Designed & Managed
          By: <NavLink>Believers Destination Pvt Ltd</NavLink>
        </p>
      </footer>
    </>
  );
}

export default Footer;
