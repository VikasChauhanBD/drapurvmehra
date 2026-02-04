import React from "react";
import "./About.css";
import Image from "../../assets/images/about-image.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  return (
    <div id="about" className="about-main-container">
      <div className="about-content">
        <div className="about-para">
          <h2>Meet Dr. Apurv Mehra</h2>
          <h3>Where Expertise Meets Empathy</h3>
          <p>
            Behind every successful surgery and every confident step a patient
            takes toward recovery stands a doctor who goes beyond the call of
            duty - not just treating bodies, but touching lives. Dr. Apurv Mehra
            is one such name.
            <br />
            <br />
            Renowned for his excellence in{" "}
            <b>robotic knee and hip replacement</b>, Dr. Mehra brings more than
            just surgical skill to the table - he brings{" "}
            <b>comfort, clarity, and compassion</b> to every patient he meets.
            His patients often say that before healing even begins physically,
            it begins the moment they sit across from him and feel truly heard.
            <br />
            <br />
            For over <b>15 years</b>, Dr. Mehra has served not only as a surgeon
            but as a mentor, teacher, and guide. He has inspired a generation of
            young doctors, many of whom chose orthopedics simply because of his
            influence. His commitment to <b>uplifting the profession</b> and
            society at large is evident in every life he touches - be it in the
            operating theatre, in classrooms, or in communities.
            <br />
            <br />
            What sets him apart is his belief that{" "}
            <b>technology should never replace human connection</b>. His
            approach blends the <b>precision of robotic surgery</b> with the{" "}
            <b>art of compassionate care</b>, ensuring that every patient not
            only walks better - but lives better.
            <br />
            <br />
            Whether you meet him as a doctor, a teacher, or simply a reassuring
            presence during a difficult time -{" "}
            <b>Dr. Apurv Mehra’s dedication is unmistakable</b>.
            <br />
            He heals not just joints, but journeys.
            <br />
            He restores not just mobility, but <b>hope and dignity</b>.
          </p>

          {/* <button className="about-btn" type="button" onClick={handleNavigate}>
            Know More..
          </button> */}
        </div>

        <div className="about-image">
          <img src={Image} alt="Dr. Apurv Mehra Clinic" />
        </div>
      </div>
    </div>
  );
}

export default About;
