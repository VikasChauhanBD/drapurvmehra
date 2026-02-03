import React, { useEffect, useRef, useState } from "react";
import "./PatientsReviews.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import patientsReviews from "../../assets/data/patientsReviews";

function PatientsReviews() {
  const studentsListRef = useRef(null);
  const scrollIntervalRef = useRef(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
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
        startScrolling();
      }
      return isCollapsing ? null : index;
    });
  };

  return (
    <div id="patients-testimonial" className="patientsTM-main-container">
      <div className="patientsTM-content">
        <h2>What patients say about Vidya Jeevan Ortho Clinic</h2>

        <div className="patientsTM-cards" ref={studentsListRef}>
          {patientsReviews.map((data, index) => (
            <div
              key={index}
              className="patientsTM-card"
              onMouseEnter={stopScrolling}
              onMouseLeave={startScrolling}
            >
              <p>
                {expandedIndex === index ? (
                  <>
                    {" "}
                    <FaQuoteLeft />
                    {data.review}
                    <FaQuoteRight />
                    <span
                      onClick={() => handleReadMore(index)}
                      className="patientsTM-read-less"
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
                      className="patientsTM-read-more"
                    >
                      <br /> Read more
                    </span>
                  </>
                )}
              </p>

              <hr />

              <h3>{data.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() =>
          window.open(
            "https://www.google.com/maps/place/Vidya+Jeevan/@28.661469,77.3114341,17z/data=!4m18!1m9!3m8!1s0x390d21f866f1b74d:0xb6f30db6d657b9f8!2sVidya+Jeevan!8m2!3d28.6614643!4d77.314009!9m1!1b1!16s%2Fg%2F11cm0h51gh!3m7!1s0x390d21f866f1b74d:0xb6f30db6d657b9f8!8m2!3d28.6614643!4d77.314009!9m1!1b1!16s%2Fg%2F11cm0h51gh?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D",
            "_blank",
          )
        }
        className="patientsTM-btn"
        type="button"
      >
        Check For More Reviews
      </button>
    </div>
  );
}

export default PatientsReviews;
