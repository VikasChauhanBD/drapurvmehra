import React from "react";
import "./Header.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SideMenu from "../sideMenu/SideMenu";

function Header() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
  };

  const [text] = useTypewriter({
    words: [
      "Motivational Speaker",
      "Bestselling Author of Medical PG Books",
      "Founder eConceptual",
      "Co-Founder Cerebellum",
    ],
    loop: {},
  });

  return (
    <div id=" " className="header-container">
      <SideMenu />
      <div className="header-banner">
        <Slider {...settings}>
          <img
            src="https://cdn.dribbble.com/userupload/44901582/file/b031112a040a6ec2b9785428a0b7ce06.webp"
            alt="Robotic Joint Replacement Surgery by Dr. Apurv Mehra "
          />
          <img
            src="https://cdn.dribbble.com/userupload/44901584/file/5588a002c9e935ea9d09b171b6f00f9c.jpg"
            alt="Motivation speech by Dr. Apurv Mehra"
          />
          <img
            src="https://cdn.dribbble.com/userupload/44901581/file/38bba8b551c98ec2f8fe8af308a40875.webp"
            alt="Class session by Dr. Apurv Sir"
          />
          <img
            src="https://cdn.dribbble.com/userupload/44901583/file/91dec966d33d81e8ab32b8f103348115.webp"
            alt="Motivation speech by Dr. Apurv Sir"
          />
        </Slider>
        <div className="header-banner-content">
          <h1>DR. APURV MEHRA</h1>
          <h4>MBBS | MS | MD | DNB (Orthopaedics) | DIP.SCOT - Belgium</h4>
          <p>
            Leading Orthopedician & Robotic Joint Replacement Surgeon, Renowned
            Educator, Founder eConceptual, Co - Founder Cerebellum, Founder
            Vidya Jeevan Education Centre, Founder Vidya Jeevan Clinic for
            Orthopedics, Bestselling Author of Medical PG Books & Motivational
            Speaker
          </p>
          <h5 className="header-typeWriter">
            {text}
            <Cursor />
          </h5>
          <br />
          {/* <button className="header-btn" type="button">
            Get Connected
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
