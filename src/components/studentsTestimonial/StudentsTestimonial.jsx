import React, { useEffect, useRef, useState } from "react";
import "./StudentsTestimonial.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import studentsData from "../../assets/data/studentsReviews";

function StudentsTestimonial() {
  const studentsListRef = useRef(null);
  const scrollIntervalRef = useRef(null);
  const [expandedIndex, setExpandedIndex] = useState(null); // 👈 track expanded review
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  useEffect(() => {
    startScrolling();
    return () => stopScrolling();
  }, []);

  const startScrolling = () => {
    stopScrolling();
    scrollIntervalRef.current = setInterval(() => {
      if (studentsListRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } =
          studentsListRef.current;
        studentsListRef.current.scrollLeft += 1;
        if (scrollLeft + clientWidth >= scrollWidth - 1) {
          studentsListRef.current.scrollLeft = 0;
        }
      }
    }, 20);
  };

  const stopScrolling = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null;
    }
  };

  const handleReadMore = (index) => {
    setExpandedIndex((prev) => {
      const isCollapsing = prev === index;
      if (isCollapsing) {
        startScrolling(); // Restart scrolling when collapsing
      }
      return isCollapsing ? null : index;
    });
  };

  return (
    <div id="students-testimonial" className="studentTM-main-container">
      <div className="studentTM-content">
        <h1>
          What Students say about Vidya Jeevan Experience Centre, Greater Noida
        </h1>
        <h2>
          “You’ll come here expecting academic support - but you leave with
          mentorship, clarity, and belief in yourself.”
          <br />- One of the many heartfelt reviews from students across India
        </h2>

        <div className="studentTM-cards" ref={studentsListRef}>
          {studentsData.map((data, index) => (
            <div
              key={index}
              className="studentTM-card"
              onMouseEnter={stopScrolling}
              onMouseLeave={startScrolling}
            >
              <div className="studentTM-image">
                <img src={data.image} alt="" />
              </div>
              <h3>{data.name}</h3>
              <p>
                {expandedIndex === index ? (
                  <>
                    {" "}
                    <FaQuoteLeft />
                    {data.review}
                    <FaQuoteRight />
                    <span
                      onClick={() => handleReadMore(index)}
                      className="studentTM-read-less"
                    >
                      <br />
                      Read less
                    </span>
                  </>
                ) : (
                  <>
                    {data.subReview}
                    <span
                      onClick={() => handleReadMore(index)}
                      className="studentTM-read-more"
                    >
                      <br /> Read more
                    </span>
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() =>
          window.open(
            "https://www.google.com/maps/place/Vidya+Jeevan/@28.4743648,77.4996851,17z/data=!4m18!1m9!3m8!1s0x390cc1248e395885:0x9099a001358dfd8f!2sVidya+Jeevan!8m2!3d28.4743601!4d77.50226!9m1!1b1!16s%2Fg%2F11w7l3p8v1!3m7!1s0x390cc1248e395885:0x9099a001358dfd8f!8m2!3d28.4743601!4d77.50226!9m1!1b1!16s%2Fg%2F11w7l3p8v1?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D",
            "_blank"
          )
        }
        className="studentTM-btn"
        type="button"
      >
        Check For More Reviews
      </button>
    </div>
  );
}

export default StudentsTestimonial;
