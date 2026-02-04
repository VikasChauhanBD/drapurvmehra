import React from "react";
import { Helmet } from "react-helmet";
import Header from "../header/Header";
import About from "../about/About";
import Surgeon from "../surgeon/Surgeon";
import VidyaJeevanClinic from "../vidyaJeevan/VidyaJeevanClinic";
import Specialities from "../specialities/Specialities";
import PatientsTestimonial from "../patientsTestimonial/PatientsTestimonial";
import VidyaJeevanWarrior from "../vidyaJeevan/VidyaJeevanWarrior";
import PatientsReviews from "../patientsReviews/PatientsReviews";
import Devoted from "../devoted/Devoted";
import Education from "../medicalEducation/Education";
import Motivational from "../motivational/Motivational";
import VidyaJeevan from "../vidyaJeevan/VidyaJeevan";
import StudentsTestimonial from "../studentsTestimonial/StudentsTestimonial";
import Gallery from "../gallery/Gallery";
import VideoPopup from "../videoPopup/VideoPopup";
import SchemaMarkup from "../schemaMarkup/SchemaMarkup";

function Home() {
  return (
    <>
      <Helmet>
        <title>Dr. Apurv Mehra - The Orthopedic Surgeon</title>
        <meta
          name="description"
          content="Dr. Apurv Mehra is a renowned Robotic Orthopedics joint replacement surgeon. Known for creating excellence worldwide in education for medico aspirants."
        />
      </Helmet>

      <SchemaMarkup />

      <VideoPopup />

      <Header />
      <About />
      <Surgeon />
      <Specialities />
      <VidyaJeevanClinic />
      <PatientsTestimonial />
      <VidyaJeevanWarrior />
      <PatientsReviews />
      <Devoted />
      <Education />
      <Motivational />
      <VidyaJeevan />
      <StudentsTestimonial />
      <Gallery />
    </>
  );
}

export default Home;
