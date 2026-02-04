import { React, useEffect } from "react";
import "./VidyaJeevan.css";
import AOS from "aos";
import "aos/dist/aos.css";

function VidyaJeevan() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  return (
    <div id="vidya-jeevan-experience-center" className="vidya-main-container">
      <h2>VIDYA JEEVAN - An Educational Hub at Greater Noida</h2>
      <h3>A Learning Centre Where Purpose Meets Preparation</h3>

      <div className="vidya-content">
        <div className="vidya-image">
          <img
            src="https://cdn.dribbble.com/userupload/44900639/file/89ff6369899675eb562f1a08026a429d.png"
            alt="Vidya Jeevan The Experience Centre Dr. Apurv Mehra"
          />
        </div>

        <div className="vidya-para">
          <p>
            <b>Vidya Jeevan</b> is not just a learning hub - it’s a{" "}
            <b>vision brought to life by Dr. Apurv Mehra</b>, rooted in his
            belief that the right mentorship can shape not just successful
            doctors, but compassionate healers.
            <br />
            <br />
            Created as a <b>dedicated space for NEET PG, INICET aspirants</b>,
            and
            <b> residency students</b>, Vidya Jeevan offers a focused
            environment where medical learning is both{" "}
            <b>rigorous and real-world ready</b>. Students here receive more
            than academic guidance - they gain access to
            <b> hands - on clinical exposure, procedural training</b>, and the
            kind of
            <b> ethical mentorship</b> that shapes both skill and character.
            <br />
            <br />
            At Vidya Jeevan, every session, workshop, and discussion is guided
            by <b>India’s leading educators and mentors</b>, including Dr. Mehra
            himself - ensuring that students are not only prepared for exams,
            but for life in medicine.
            <br />
            <br />
            Whether you're aiming to ace the country's most competitive entrance
            exams or looking to grow into a confident, compassionate clinician -{" "}
            <b>Vidya Jeevan is where that journey begins.</b>
            <br />
            <br />
            <b>
              A space where learning is sincere, guidance is personal, and every
              student is treated with belief.
            </b>
          </p>

          <button
            className="vidya-btn"
            type="button"
            onClick={() =>
              window.open("https://www.vidyajeevan.com/", "_blank")
            }
          >
            Know More..
          </button>
        </div>
      </div>
    </div>
  );
}

export default VidyaJeevan;
