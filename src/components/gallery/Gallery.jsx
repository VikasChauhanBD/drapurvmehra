import React, { useEffect, useState } from "react";
import "./Gallery.css";
import AOS from "aos";
import "aos/dist/aos.css";
import galleryData from "../../assets/data/galleryImagesData";

function Gallery() {
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [showMessage, setShowMessage] = useState(false);
  const [fullscreenImageIndex, setFullscreenImageIndex] = useState(null);

  const isModalOpen = selectedGallery !== null;

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const closeModal = () => {
    setSelectedGallery(null);
    setFullscreenImageIndex(null);
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const openFullscreen = (index) => {
    setFullscreenImageIndex(index);
  };

  const closeFullscreen = () => {
    setFullscreenImageIndex(null);
  };

  const goToNextImage = () => {
    const images = galleryData[selectedGallery].images;
    setFullscreenImageIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevImage = () => {
    const images = galleryData[selectedGallery].images;
    setFullscreenImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1,
    );
  };

  return (
    <div id="gallery" className="gallery-main-container">
      <h2>Gallery</h2>

      {/* 📁 Folder View */}
      <div className="gallery-folder-list">
        {galleryData.map((gallery, index) => (
          <div
            key={index}
            className="gallery-folder"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setShowMessage(true)}
            onMouseLeave={() => setShowMessage(false)}
            onClick={() => setSelectedGallery(index)}
          >
            <div className="thumbnail-image">
              {gallery.images.slice(0, 2).map((img, i) => (
                <img key={i} src={img.src} alt={img.alt} />
              ))}
            </div>

            {showMessage && (
              <div
                className="gallery-hover-message cursor-follow"
                style={{ left: cursorPos.x, top: cursorPos.y }}
              >
                Click To See More
              </div>
            )}

            <div className="thumbnail-title">
              <h3 dangerouslySetInnerHTML={{ __html: gallery.title }} />
            </div>
          </div>
        ))}
      </div>

      {/* 🖼️ Modal View */}
      {selectedGallery !== null && (
        <div className="gallery-modal-overlay">
          <div className="gallery-modal">
            <button className="gallery-modal-close-btn" onClick={closeModal}>
              ×
            </button>

            <h3
              dangerouslySetInnerHTML={{
                __html: galleryData[selectedGallery].title,
              }}
            />

            <div className="gallery-images-list">
              {galleryData[selectedGallery].images.map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  alt={img.alt}
                  onClick={() => openFullscreen(i)}
                />
              ))}
            </div>
          </div>

          {/* 🌌 Fullscreen Viewer */}
          {fullscreenImageIndex !== null && (
            <div className="gallery-fullscreen-overlay">
              <button
                className="gallery-fullscreen-close-btn"
                onClick={closeFullscreen}
              >
                ×
              </button>

              <button
                className="gallery-fullscreen-nav-btn gallery-fullscreen-prev"
                onClick={goToPrevImage}
              >
                ‹
              </button>

              <img
                className="gallery-fullscreen-image"
                src={
                  galleryData[selectedGallery].images[fullscreenImageIndex].src
                }
                alt={
                  galleryData[selectedGallery].images[fullscreenImageIndex].alt
                }
              />

              <button
                className="gallery-fullscreen-nav-btn gallery-fullscreen-next"
                onClick={goToNextImage}
              >
                ›
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Gallery;
