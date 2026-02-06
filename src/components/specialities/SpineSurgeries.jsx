import React, { useState, useEffect } from "react";
import "./SpineSurgeries.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPlayCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const videosData = [
  {
    id: 1,
    thumbnail:
      "https://cdn.dribbble.com/userupload/46444838/file/eec9b2c17427de2d26549f0ebaf08654.jpg",
    alt: "Mr. Rohit Kumar Maithani with Dr. Apurv Mehra",
    url: "https://www.youtube.com/embed/t8I30qDjQEI",
  },
  {
    id: 2,
    thumbnail:
      "https://cdn.dribbble.com/userupload/46444840/file/dc44543544e1fec208dd3114b1fef5ab.jpg",
    alt: "Ms. Divya Jairath with Dr. Apurv Mehra",
    url: "https://www.youtube.com/embed/dAWjpv2pDdo",
  },
  {
    id: 3,
    thumbnail:
      "https://cdn.dribbble.com/userupload/46444837/file/10245a5232c4026811b1bc823213615c.jpg",
    alt: "Mr. Pawan Singh with Dr. Apurv Mehra",
    url: "https://www.youtube.com/embed/TvoUqtqWVyc",
  },
  {
    id: 4,
    thumbnail:
      "https://cdn.dribbble.com/userupload/46444839/file/8124ba495f3aedecdb3e484f7d604883.jpg",
    alt: "Ms. Shivangi with Dr. Apurv Mehra",
    url: "https://www.youtube.com/embed/CEMAGTqgAdw",
  },
];

function SpineSurgeries() {
  const [activeVideo, setActiveVideo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  return (
    <div className="spine-main-container">
      <Helmet>
        <title>
          Limb Deformity Corrections & Spine Surgeries - Dr. Apurv Mehra
        </title>
        <meta
          name="description"
          content="Dr. Apurv Mehra provides advanced limb deformity correction and spine surgeries focused on alignment pain relief mobility and long term outcomes."
        />
      </Helmet>

      <div className="spine-nav">
        <nav className="spine-breadcrumb">
          <div className="spine-breadcrumb-content">
            <span>›</span>
            <span>Home</span>
            <span>›</span>
            <span>Specialities</span>
            <span>›</span>
            <span className="spine-breadcrumb-current">
              Limb Deformity Corrections & Spine Surgeries
            </span>
          </div>

          <button
            className="spine-breadcrumb-btn"
            onClick={() => navigate("/")}
          >
            Home
          </button>
        </nav>
      </div>

      <h1>Limb Deformity Corrections & Spine Surgeries</h1>

      <div className="spine-cards" data-aos="fade-up">
        {videosData
          .slice()
          .reverse()
          .map((video) => (
            <div
              key={video.id}
              className="spine-card"
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
                  <div className="spine-play-icon">
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

export default SpineSurgeries;
