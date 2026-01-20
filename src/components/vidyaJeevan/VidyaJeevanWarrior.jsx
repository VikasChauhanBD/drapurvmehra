import React, { useRef, useState } from "react";
import "./VidyaJeevanWarrior.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const reelsData = [
  {
    id: 1,
    thumbnail:
      "https://cdn.dribbble.com/userupload/44958099/file/a74f3823fb43309a2123a636993e3c41.jpg",
    url: "https://www.youtube.com/embed/hcj9zDQgl6E",
  },
  {
    id: 2,
    thumbnail:
      "https://cdn.dribbble.com/userupload/44958123/file/7d350e03433b4d604459e6f8fe008a2f.jpg",
    url: "https://www.youtube.com/embed/KlF1tYn7og4",
  },
  {
    id: 3,
    thumbnail:
      "https://cdn.dribbble.com/userupload/44900629/file/97500427b27ca6a3f1a6fb93ffe38494.jpg",
    url: "https://www.youtube.com/embed/byd53DDwNcI",
  },
  {
    id: 4,
    thumbnail:
      "https://cdn.dribbble.com/userupload/44900633/file/17e9fee612b3fbdb73407fe60f743fef.jpg",
    url: "https://www.youtube.com/embed/9oaHK5JQomc",
  },
  {
    id: 5,
    thumbnail:
      "https://cdn.dribbble.com/userupload/44900641/file/81591d6d3c3f8d4cb14408cd744caa27.jpg",
    url: "https://www.youtube.com/embed/i7E_5LK7g50",
  },
  {
    id: 6,
    thumbnail:
      "https://cdn.dribbble.com/userupload/44900640/file/e07d1f0756b2a0c4ba57264d0d3ee0e5.jpg",
    url: "https://www.youtube.com/embed/DYhwYaAL3n0",
  },
  {
    id: 7,
    thumbnail:
      "https://cdn.dribbble.com/userupload/45288452/file/48d5e654a08e106a49f5361be55f67ea.jpg",
    url: "https://www.youtube.com/embed/75FqG7uNCjA",
  },
  {
    id: 8,
    thumbnail:
      "https://cdn.dribbble.com/userupload/45288468/file/70b01a47f7be2fa2639fa8e09f35f9ea.jpg",
    url: "https://www.youtube.com/embed/8sAYfL1ZjHc",
  },
  {
    id: 9,
    thumbnail:
      "https://cdn.dribbble.com/userupload/46420684/file/d5323a7f71cc96570b8f0bebdb67621a.jpg",
    url: "https://www.youtube.com/embed/KPkvYpxFCG0",
  },
  {
    id: 10,
    thumbnail:
      "https://cdn.dribbble.com/userupload/46420688/file/5db5d551189d6a844b2ed9c2e7c90082.jpg",
    url: "https://www.youtube.com/embed/oyCxetv-fXc",
  },
  {
    id: 11,
    thumbnail:
      "https://cdn.dribbble.com/userupload/46420685/file/cf113b21383ff4493942ac405943265a.jpg",
    url: "https://www.youtube.com/embed/TvoUqtqWVyc",
  },
  {
    id: 12,
    thumbnail:
      "https://cdn.dribbble.com/userupload/46420687/file/4eca9665201328bdaaf49ca7ad15e635.jpg",
    url: "https://www.youtube.com/embed/w46IiY4C8jw",
  },
  {
    id: 13,
    thumbnail:
      "https://cdn.dribbble.com/userupload/46420686/file/a115b32b7f0f6bd729c96627aa25ac02.jpg",
    url: "https://www.youtube.com/embed/CEMAGTqgAdw",
  },
  {
    id: 14,
    thumbnail:
      "https://cdn.dribbble.com/userupload/46420683/file/b961a3aa6eadcfcbb28b98f6b6bf5496.jpg",
    url: "https://www.youtube.com/embed/orvrakiOEks",
  },
];

function VidyaJeevanWarrior() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  const scrollRef = useRef(null);
  const [activeVideo, setActiveVideo] = useState(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector(".vjw-card");
      if (!card) return;

      const cardWidth = card.offsetWidth + 20; // add gap
      const { scrollLeft } = scrollRef.current;
      const scrollAmount =
        direction === "left" ? scrollLeft - cardWidth : scrollLeft + cardWidth;

      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div id="vidya-jeevan-warrior" className="vjw-main-container">
      <h1>VIDYA JEEVAN WARRIORS</h1>
      <div className="vjw-wrapper">
        <button className="vjw-btn left" onClick={() => scroll("left")}>
          ❮
        </button>

        <div className="vjw-cards" ref={scrollRef}>
          {reelsData
            .slice()
            .reverse()
            .map((reel) => (
              <div
                key={reel.id}
                className="vjw-card"
                onClick={() =>
                  setActiveVideo(activeVideo === reel.id ? null : reel.id)
                }
              >
                {activeVideo === reel.id ? (
                  <iframe
                    src={`${reel.url}?autoplay=1`}
                    width="100%"
                    height="100%"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    frameBorder="0"
                    title={`Reel ${reel.id}`}
                  ></iframe>
                ) : (
                  <>
                    <img src={reel.thumbnail} alt="Reel Thumbnail" />
                    <div className="vjw-play-icon">▶</div>
                  </>
                )}
              </div>
            ))}
        </div>

        <button className="vjw-btn right" onClick={() => scroll("right")}>
          ❯
        </button>
      </div>
    </div>
  );
}

export default VidyaJeevanWarrior;
