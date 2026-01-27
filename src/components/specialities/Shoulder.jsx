import React, { useState, useEffect } from "react";
import "./Shoulder.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPlayCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const videosData = [
  {
    id: 1,
    thumbnail:
      "https://cdn.dribbble.com/userupload/46456792/file/2f8a7cac8c5808fb56de2ef9e31d93a9.jpg",
    url: "https://www.youtube.com/embed/o6LlQm5SblA",
  },
  //   {
  //     id: 2,
  //     thumbnail:
  //       "https://cdn.dribbble.com/userupload/46445543/file/bced630ec6aea5973a1ab12a5670e8ce.jpg",
  //     url: "https://www.youtube.com/embed/orvrakiOEks",
  //   },
];

function Shoulder() {
  const [activeVideo, setActiveVideo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  return (
    <div className="shoulder-main-container">
      <Helmet>
        <title>Shoulder & Rotator Cuff Surgeries - Dr. Apurv Mehra</title>
        <meta
          name="description"
          content="Dr. Apurv Mehra delivers expert shoulder and rotator cuff surgeries restoring strength stability and pain free movement with modern techniques."
        />
      </Helmet>

      <div className="shoulder-nav">
        <nav className="shoulder-breadcrumb">
          <div className="shoulder-breadcrumb-content">
            <span>›</span>
            <span>Home</span>
            <span>›</span>
            <span>Specialities</span>
            <span>›</span>
            <span className="shoulder-breadcrumb-current">
              Shoulder/Rotator Cuff Surgeries
            </span>
          </div>

          <button
            className="shoulder-breadcrumb-btn"
            onClick={() => navigate("/")}
          >
            Home
          </button>
        </nav>
      </div>

      <h1>Shoulder/Rotator Cuff Surgeries</h1>

      <div className="shoulder-cards" data-aos="fade-up">
        {videosData
          .slice()
          .reverse()
          .map((video) => (
            <div
              key={video.id}
              className="shoulder-card"
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
                  <div className="shoulder-play-icon">
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

export default Shoulder;
