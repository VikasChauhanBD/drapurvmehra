import React from "react";
import "./Education.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import EducationKnowMore from "./EducationKnowMore";

function Education() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  return (
    <div
      id="econceptual-and-cerebellum-academy"
      className="education-main-container"
    >
      <h2>Legacy & Inspiration</h2>
      <h3>Built on Belief, Values & Purpose</h3>

      <div className="education-card">
        <div className="education-image">
          <img
            src="https://cdn.dribbble.com/userupload/44903066/file/8033217dc7108f7d1f7c44b52caf620d.webp"
            alt="ec-CBA Image"
          />
        </div>

        <div className="education-content">
          <h4>Shaping Minds, Inspiring Generations</h4>
          <h5>- A Legacy of Learning </h5>
          <p>
            For Dr. Apurv Mehra, being a doctor has never been just about
            treating patients - it’s about{" "}
            <b>uplifting the entire medical community</b>, especially the next
            generation of doctors. Deeply influenced by the values instilled in
            him by his grandmother, Dr. Mehra has always believed that{" "}
            <b>knowledge must be shared, not stored</b> - and that true success
            lies in giving back.
            <br />
            <br />
            This belief led to the birth of two powerful educational platforms
            that are transforming how medicine is taught and learned in India:
          </p>
        </div>
      </div>

      <EducationKnowMore />
    </div>
  );
}

export default Education;
