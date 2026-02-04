import React from "react";
import "./EducationKnowMore.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function EducationKnowMore() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  return (
    <div className="educationKM-main-container">
      <div className="educationKM-content1">
        <div className="educationKM-hero-wrapper1">
          <div className="educationKM-para1">
            <h4>eConceptual</h4>
            <h5>Bridging the Gap Between Theory and Practice</h5>
            <p>
              As medicine evolves, so must medical education. With this vision,
              Dr. Mehra launched <b>eConceptual</b> - a next-generation platform
              designed especially for{" "}
              <b>MS/MD/DNB residents and budding clinicians</b>. Built with a
              focus on <b>clinical reasoning, surgical judgment</b>, and{" "}
              <b>real - world mentorship</b>, eConceptual offers students the
              kind of learning that prepares them not just for exams - but for
              life in the wards and operation theatres. Ranked as the{" "}
              <b>No.1 academic app</b> in its category, it reflects Dr. Mehra’s
              mission to create a community of doctors who are not only{" "}
              <b>well - read</b>, but also{" "}
              <b>well - prepared, confident, and compassionate.</b>
            </p>
          </div>

          <button
            className="educationKM-btn"
            type="button"
            onClick={() => window.open("https://econceptual.com/", "_blank")}
          >
            Know More..
          </button>
        </div>

        <div className="educationKM-image1">
          <img
            src="https://cdn.dribbble.com/userupload/44903070/file/202b703b21a6133216fb7b79154a6ed9.webp"
            alt="eConceptual platforms by Dr. Apurv Mehra"
          />
        </div>
      </div>

      <div className="educationKM-content2">
        <div className="educationKM-image2">
          <img
            src="https://cdn.dribbble.com/userupload/44903068/file/7a5abeb3777fa5e4855dd5076a3b2906.png"
            alt="Cerebellum Academy Faculty"
          />
        </div>

        <div className="educationKM-hero-wrapper2">
          <div className="educationKM-para2">
            <h4>Cerebellum Academy</h4>
            <h5>Where Passion Meets Purpose in Medical Learning</h5>
            <p>
              Co - founded by Dr. Mehra and four of India’s most respected
              medical educators, <b>Cerebellum Academy</b> has become a
              household name among medical aspirants across the country. Known
              for its <b>unmatched academic content, inspiring mentors</b>, and{" "}
              <b>compassionate teaching style</b>, the platform has reached and
              motivated <b>millions of students</b>, helping them believe in
              themselves and rise to their true potential. It’s more than an
              academy - it’s a movement.
            </p>
          </div>

          <button
            className="educationKM-btn"
            type="button"
            onClick={() =>
              window.open("https://www.cerebellumacademy.com/", "_blank")
            }
          >
            Know More..
          </button>
        </div>
      </div>

      <div className="educationKM-last-para">
        <span>
          Through these initiatives, <b>Dr. Apurv Mehra</b> isn’t just teaching
          medicine - he’s shaping mindsets, nurturing values, and helping build
          a future where doctors lead with both <b>skill and soul</b>. Because
          to him,{" "}
          <b>
            education is not just a profession - it’s a promise to serve society
            better.
          </b>
        </span>
      </div>
    </div>
  );
}

export default EducationKnowMore;
