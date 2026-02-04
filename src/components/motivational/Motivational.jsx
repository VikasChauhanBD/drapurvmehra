import React, { useState } from "react";
import "./Motivational.css";
import { NavLink } from "react-router-dom";

function Motivational() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const imageData = [
    {
      src: "https://cdn.dribbble.com/userupload/44902162/file/723f3be7642571e62cbb650f1dba0810.png",
      isSecond: false,
      link: "https://www.youtube.com/watch?v=RgIzJ0XiIbo",
      alt: "Motivation Speech by Dr. Apurv Mehra",
    },
    {
      src: "https://cdn.dribbble.com/userupload/44902165/file/7b72031d856c7eff42eef9eaa13a688f.png",
      isSecond: true,
      link: "https://www.youtube.com/watch?v=yYRgQCLVRZ0",
      alt: "Motivation Speech by Dr. Apurv Mehra",
    },
    {
      src: "https://cdn.dribbble.com/userupload/44902163/file/1b1acc4bca832828c48b2eb8ad14997c.png",
      isSecond: false,
      link: "https://www.youtube.com/watch?v=VqVa2xmNErU",
      alt: "Motivation Speech by Dr. Apurv Mehra",
    },
    {
      src: "https://cdn.dribbble.com/userupload/44902164/file/1a1d8bec625f2d929704eb6caf7a2a61.png",
      isSecond: true,
      link: "https://www.youtube.com/watch?v=4UepyNwl-ss",
      alt: "Motivation Speech by Dr. Apurv Mehra",
    },
  ];

  return (
    <div id="motivational" className="motivational-main-container">
      <div className="motivational-inner-container">
        <div className="motivational-image-div1">
          {imageData.slice(0, 2).map((item, index) => (
            <div
              className={`image-wrapper ${
                item.isSecond ? "second-wrapper" : ""
              }`}
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <NavLink to={item.link} target="_blank">
                <img src={item.src} className="banner-wrapper" alt={item.alt} />
              </NavLink>
              {hoveredIndex === index && (
                <div className="hover-message-static">Watch Now</div>
              )}
            </div>
          ))}
        </div>

        <div className="motivational-image-div2">
          {imageData.slice(2).map((item, index) => (
            <div
              className={`image-wrapper ${
                item.isSecond ? "second-wrapper" : ""
              }`}
              key={index + 2}
              onMouseEnter={() => setHoveredIndex(index + 2)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <NavLink to={item.link} target="_blank">
                <img src={item.src} className="banner-wrapper" alt={item.alt} />
              </NavLink>
              {hoveredIndex === index + 2 && (
                <div className="hover-message-static">Watch Now</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Motivational;
