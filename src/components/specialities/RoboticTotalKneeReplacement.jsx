import React, { useState, useEffect } from "react";
import "./RoboticTotalKneeReplacement.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPlayCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const videosData = [
  {
    id: 1,
    thumbnail:
      "https://cdn.dribbble.com/userupload/46443486/file/c0d0b99c8c8c63202a2e8e72ad0cf97c.jpg",
    url: "https://www.youtube.com/embed/YgqkSXQhhLY",
  },
  {
    id: 2,
    thumbnail:
      "https://cdn.dribbble.com/userupload/46443491/file/5ded2b4ba95b230d080c947c7eed3422.jpg",
    url: "https://www.youtube.com/embed/3JkrWxZ44nw",
  },
  {
    id: 3,
    thumbnail:
      "https://cdn.dribbble.com/userupload/46443492/file/0baaf6feb64435040b289dcc8d00aeff.jpg",
    url: "https://www.youtube.com/embed/3ePydOHpgo8",
  },
  {
    id: 4,
    thumbnail:
      "https://cdn.dribbble.com/userupload/46443490/file/ba6039e18d31480b1bb3b9d509d8ad51.jpg",
    url: "https://www.youtube.com/embed/oP5HNeE5rFg",
  },
  {
    id: 5,
    thumbnail:
      "https://cdn.dribbble.com/userupload/46443487/file/b7d15ea1517c25887863ed32142095aa.jpg",
    url: "https://www.youtube.com/embed/KPkvYpxFCG0",
  },
  {
    id: 6,
    thumbnail:
      "https://cdn.dribbble.com/userupload/46443494/file/1467be1936a112ec62f2880fec5794ac.jpg",
    url: "https://www.youtube.com/embed/WhzHdwgiCFA",
  },
  {
    id: 7,
    thumbnail:
      "https://cdn.dribbble.com/userupload/46443493/file/194bcf467424747d40421c7628fe12ab.jpg",
    url: "https://www.youtube.com/embed/w46IiY4C8jw",
  },
  {
    id: 8,
    thumbnail:
      "https://cdn.dribbble.com/userupload/46443488/file/a4cffcfa3b331530d5cbf61c47233410.jpg",
    url: "https://www.youtube.com/embed/DI8woneSPQg",
  },
  {
    id: 9,
    thumbnail:
      "https://cdn.dribbble.com/userupload/46443489/file/e0ade98f82960e195579af4fd3ac4ce8.jpg",
    url: "https://www.youtube.com/embed/E3B2jfMVBFQ",
  },
];

function RoboticTotalKneeReplacement() {
  const [activeVideo, setActiveVideo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  return (
    <div className="robotic-main-container">
      <div className="robotic-nav">
        <nav className="robotic-breadcrumb">
          <div className="robotic-breadcrumb-content">
            <span>›</span>
            <span>Home</span>
            <span>›</span>
            <span>Specialities</span>
            <span>›</span>
            <span className="robotic-breadcrumb-current">
              Robotic Total Knee Replacement
            </span>
          </div>

          <button
            className="robotic-breadcrumb-btn"
            onClick={() => navigate("/")}
          >
            Home
          </button>
        </nav>
      </div>

      <h1>Robotic Total Knee Replacement</h1>

      <div className="robotic-cards">
        {videosData
          .slice()
          .reverse()
          .map((video) => (
            <div
              key={video.id}
              className="robotic-card"
              onClick={() =>
                setActiveVideo(activeVideo === video.id ? null : video.id)
              }
              data-aos="fade-up"
            >
              {activeVideo === video.id ? (
                <iframe
                  src={`${video.url}?autoplay=1`}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  frameBorder="0"
                  title={`Video ${video.id}`}
                ></iframe>
              ) : (
                <>
                  <img src={video.thumbnail} alt="video Thumbnail" />
                  <div className="robotic-play-icon">
                    <FaPlayCircle />
                  </div>
                </>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

export default RoboticTotalKneeReplacement;
