import React, { useState, useEffect } from "react";
import "./Acl.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPlayCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const videosData = [
  {
    id: 1,
    thumbnail:
      "https://cdn.dribbble.com/userupload/46445542/file/3742d112d957fad9752871c1d49f8ec0.jpg",
    url: "https://www.youtube.com/embed/4EItkAnYsKI",
  },
  {
    id: 2,
    thumbnail:
      "https://cdn.dribbble.com/userupload/46445543/file/bced630ec6aea5973a1ab12a5670e8ce.jpg",
    url: "https://www.youtube.com/embed/orvrakiOEks",
  },
];

function Acl() {
  const [activeVideo, setActiveVideo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  return (
    <div className="acl-main-container">
      <div className="acl-nav">
        <nav className="acl-breadcrumb">
          <div className="acl-breadcrumb-content">
            <span>›</span>
            <span>Home</span>
            <span>›</span>
            <span>Specialities</span>
            <span>›</span>
            <span className="acl-breadcrumb-current">
              Arthroscopic ACL Reconstructions
            </span>
          </div>

          <button className="acl-breadcrumb-btn" onClick={() => navigate("/")}>
            Home
          </button>
        </nav>
      </div>

      <h1>Arthroscopic ACL Reconstructions</h1>

      <div className="acl-cards" data-aos="fade-up">
        {videosData
          .slice()
          .reverse()
          .map((video) => (
            <div
              key={video.id}
              className="acl-card"
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
                  <div className="acl-play-icon">
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

export default Acl;
