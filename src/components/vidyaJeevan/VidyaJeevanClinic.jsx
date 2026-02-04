import React, { useEffect } from "react";
import "./VidyaJeevanClinic.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import VJC from "../../assets/images/vjc-image.png";

function VidyaJeevanClinic() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  return (
    <div id="vidya-jeevan-clinic" className="vjc-main-container">
      <h2>Vidya Jeevan Clinic for Orthopedics</h2>
      <p className="vjc-subtitle">
        Where Ethics, Expertise, and Empathy Come Together
      </p>

      <div className="vjc-card">
        <div className="vjc-content">
          <p>
            At a time when healthcare can often feel rushed or impersonal,{" "}
            <b>Vidya Jeevan Clinic</b> stands apart as a place of trust,
            transparency, and true healing.
            <br />
            <br />
            Founded and led by <b>Dr. Apurv Mehra</b>, Vidya Jeevan is more than
            just a clinic - it's a reflection of his lifelong commitment to{" "}
            <b>ethical medical practice</b> and{" "}
            <b>compassionate orthopaedic care</b>. Here, every patient is
            treated not as a case, but as a human being with unique concerns,
            fears, and hopes.
            <br />
            <br />
            Whether you’re dealing with{" "}
            <b>chronic joint pain, injuries, trauma</b>, or are considering{" "}
            <b>robotic or complex joint surgery</b>, you’ll find not just
            advanced treatment options - but <b>clear, honest guidance</b> that
            puts your well - being first. No unnecessary procedures. No
            pressure. Just <b>honest opinions, evidence - based solutions</b>,
            and <b>heartfelt care.</b>
            <br />
            <br />
            What makes <b>Vidya Jeevan</b> special isn’t just the technology or
            the credentials - it’s the <b>time taken to listen</b>, the{" "}
            <b>respect shown to every patient</b>, and the{" "}
            <b>ethical clarity</b> that guides every decision.
            <br />
            <br />
            For many families, this is the clinic they turn to when they’re
            unsure, anxious, or looking for a doctor they can trust. And for Dr.
            Mehra, it’s a space where <b>healing is personal</b>, and where
            medicine is practiced not just with the mind, but with a sense of{" "}
            <b>purpose and humanity.</b>
            <br />
            <br />
            If you're looking for <b>world - class orthopaedic care</b>{" "}
            delivered with integrity and compassion,{" "}
            <b>
              Vidya Jeevan Clinic is the place to begin your healing journey.
            </b>
          </p>

          {/* <button className="vjc-btn" type="button">
            Book Your Appointment..
          </button> */}
        </div>

        <div className="vjc-image">
          <img src={VJC} alt="Vidya Jeevan Clinic with Dr. Apurv Mehra" />
        </div>
      </div>
    </div>
  );
}

export default VidyaJeevanClinic;
