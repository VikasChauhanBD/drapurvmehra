import React, { useState, useEffect } from "react";
import "./JointReplacements.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPlayCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const videosData = [
  {
    id: 1,
    thumbnail:
      "https://cdn.dribbble.com/userupload/46445542/file/3742d112d957fad9752871c1d49f8ec0.jpg",
    alt: "Patient with Dr. Apurv Mehra",
    url: "https://www.youtube.com/embed/4EItkAnYsKI",
  },
  {
    id: 2,
    thumbnail:
      "https://cdn.dribbble.com/userupload/46445543/file/bced630ec6aea5973a1ab12a5670e8ce.jpg",
    alt: "Patient with Dr. Apurv Mehra",
    url: "https://www.youtube.com/embed/orvrakiOEks",
  },
];

function JointReplacements() {
  const [activeVideo, setActiveVideo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  return (
    <div className="joint-main-container">
      <Helmet>
        <title>Complex & Revision Joint Replacements - Dr. Apurv Mehra</title>
        <meta
          name="description"
          content="Dr. Apurv Mehra specializes in complex and revision joint replacements offering precise solutions for failed implants pain relief and renewed mobility."
        />
      </Helmet>

      <div className="joint-nav">
        <nav className="joint-breadcrumb">
          <div className="joint-breadcrumb-content">
            <span>›</span>
            <span>Home</span>
            <span>›</span>
            <span>Specialities</span>
            <span>›</span>
            <span className="joint-breadcrumb-current">
              Complex and Revision Joint Replacements
            </span>
          </div>

          <button
            className="joint-breadcrumb-btn"
            onClick={() => navigate("/")}
          >
            Home
          </button>
        </nav>
      </div>

      <h1>Complex and Revision Joint Replacements</h1>

      {/* <div className="joint-cards" data-aos="fade-up">
        {videosData
          .slice()
          .reverse()
          .map((video) => (
            <div
              key={video.id}
              className="joint-card"
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
                  <img src={video.thumbnail} alt={video.alt} />
                  <div className="joint-play-icon">
                    <FaPlayCircle />
                  </div>
                </>
              )}
            </div>
          ))}
      </div> */}
    </div>
  );
}

export default JointReplacements;
