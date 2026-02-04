import React from "react";
import "./Surgeon.css";
import Image from "../../assets/images/surgeon-image.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Surgeon() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  return (
    <div id="leading-surgeon" className="surgeon-main-container">
      <h2>Trusted Name in Robotic Knee & Hip Replacement</h2>
      <h3>Known for precision. Chosen for compassion & care.</h3>

      <div className="surgeon-content">
        <div className="surgeon-image">
          <img
            src={Image}
            alt="Robotic Knee & Hip Replacement by Dr. Apurv Mehra"
          />
        </div>

        <div className="surgeon-para">
          <h3>Dr. Apurv Mehra</h3>
          <h4>A Name You Can Trust in Orthopaedic Care</h4>
          <p>
            With over <b>22 years of experience</b>, Dr. Apurv Mehra is widely
            regarded as one of <b>India’s leading orthopaedic surgeons</b> - a
            trusted name for those seeking expert care with a human touch. He
            specializes in{" "}
            <b>robotic knee replacements, complex joint surgeries</b>, and{" "}
            <b>trauma management</b>, and currently practices at{" "}
            <b>Max Super Specialty Hospital, Patparganj</b>.
            <br />
            <br />
            But what truly sets Dr. Mehra apart is not just his surgical
            expertise - it’s his{" "}
            <b>
              deep commitment to ethical, transparent, and patient - centered
              care.
            </b>
            <br />
            <br />
            Every patient who walks through his door is treated with{" "}
            <b>respect, honesty, and compassion</b>. He takes the time to{" "}
            <b>listen carefully</b>, explain every treatment option in clear,
            simple language, and ensure patients feel empowered - not
            overwhelmed - throughout their healing journey. His unwavering
            belief is that{" "}
            <b>
              trust is the foundation of every doctor - patient relationship
            </b>
            , and he lives by it every single day.
            <br />
            <br />
            Known for combining <b>cutting - edge technology</b> with a{" "}
            <b>heartfelt approach to healing</b>, Dr. Mehra has earned the love
            of thousands of patients and the respect of peers across the
            country. He is also deeply involved in <b>medical education</b>,
            inspiring and mentoring young doctors to uphold the highest
            standards of care and integrity.
            <br />
            <br />
            Whether you're looking for relief from long-standing joint pain,
            exploring surgical options, or simply seeking honest advice -{" "}
            <b>
              Dr. Apurv Mehra offers more than just treatment. He offers hope,
              clarity, and care that truly puts the patient first.
            </b>
          </p>

          {/* <button className="surgeon-btn" type="button">
            Know More..
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Surgeon;
