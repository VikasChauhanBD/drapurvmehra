import React, { useState, useEffect } from "react";
import "./ComplexTrauma.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPlayCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const videosData = [
  {
    id: 1,
    thumbnail:
      "https://cdn.dribbble.com/userupload/46445544/file/e17fd2c89ebe25e6a2483e1d5df1fa10.jpg",
    url: "https://www.youtube.com/embed/oyCxetv-fXc",
  },
];

function ComplexTrauma() {
  const [activeVideo, setActiveVideo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  return (
    <div className="trauma-main-container">
      <Helmet>
        <title>
          Complex Trauma & Pelvic Acetabular Surgeries - Dr. Apurv Mehra
        </title>
        <meta
          name="description"
          content="Dr. Apurv Mehra offers expert care in complex trauma and pelvic acetabular surgeries using advanced techniques for stability recovery and mobility."
        />
      </Helmet>

      <div className="trauma-nav">
        <nav className="trauma-breadcrumb">
          <div className="trauma-breadcrumb-content">
            <span>›</span>
            <span>Home</span>
            <span>›</span>
            <span>Specialities</span>
            <span>›</span>
            <span className="trauma-breadcrumb-current">
              Complex Trauma & Pelvic - Acetabular Surgeries
            </span>
          </div>

          <button
            className="trauma-breadcrumb-btn"
            onClick={() => navigate("/")}
          >
            Home
          </button>
        </nav>
      </div>

      <h1>Complex Trauma & Pelvic - Acetabular Surgeries</h1>

      <div className="trauma-cards" data-aos="fade-up">
        {videosData
          .slice()
          .reverse()
          .map((video) => (
            <div
              key={video.id}
              className="trauma-card"
              onClick={() =>
                setActiveVideo(activeVideo === video.id ? null : video.id)
              }
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
                  <div className="trauma-play-icon">
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

export default ComplexTrauma;
