// import React from "react";
// import "./App.css";
// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import Header from "./components/header/Header";
// import About from "./components/about/About";
// import Surgeon from "./components/surgeon/Surgeon";
// import VidyaJeevanClinic from "./components/vidyaJeevan/VidyaJeevanClinic";
// import Specialities from "./components/specialities/Specialities";
// import PatientsTestimonial from "./components/patientsTestimonial/PatientsTestimonial";
// import VidyaJeevanWarrior from "./components/vidyaJeevan/VidyaJeevanWarrior";
// import Devoted from "./components/devoted/Devoted";
// import Education from "./components/medicalEducation/Education";
// import Motivational from "./components/motivational/Motivational";
// import VidyaJeevan from "./components/vidyaJeevan/VidyaJeevan";
// import StudentsTestimonial from "./components/studentsTestimonial/StudentsTestimonial";
// import Gallery from "./components/gallery/Gallery";
// import ScrollToTopButton from "./components/scrollToTopButton/ScrollToTopButton";
// import Footer from "./components/footer/Footer";
// import MobileFooter from "./components/mobileFooter/MobileFooter";
// import RoboticTotalKneeReplacement from "./components/specialities/RoboticTotalKneeReplacement";
// import useSectionRoute from "./hooks/useSectionRoute";
// import BlogHome from "./components/blogs/BlogHome";
// import BlogPage from "./components/blogs/BlogPage";
// // import MarqueeLine from "./components/marqueeLine/MarqueeLine";

// // ---------- Home Page ----------
// function Home() {
//   const sectionIds = [
//     " ",
//     "about",
//     "leading-surgeon",
//     "specialities",
//     "vidya-jeevan-clinic",
//     "patients-testimonial",
//     "vidya-jeevan-warrior",
//     "learning-and-leading",
//     "ec-cba",
//     "motivational",
//     "vidya-jeevan-experience-center",
//     "students-testimonial",
//     "gallery",
//   ];

//   // 👇 activates URL update on scroll
//   useSectionRoute(sectionIds);

//   return (
//     <>
//       <section id=" ">
//         <Header />
//       </section>

//       <section id="about">
//         <About />
//       </section>

//       <section id="leading-surgeon">
//         <Surgeon />
//       </section>

//       <section id="specialities">
//         <Specialities />
//       </section>

//       <section id="vidya-jeevan-clinic">
//         <VidyaJeevanClinic />
//       </section>

//       <section id="patients-testimonial">
//         <PatientsTestimonial />
//       </section>

//       <section id="vidya-jeevan-warrior">
//         <VidyaJeevanWarrior />
//       </section>

//       <section id="learning-and-leading">
//         <Devoted />
//       </section>

//       <section id="econceptual-and-cerebellum-academy">
//         <Education />
//       </section>

//       <section id="motivational">
//         <Motivational />
//       </section>

//       <section id="vidya-jeevan-experience-center">
//         <VidyaJeevan />
//       </section>

//       <section id="students-testimonial">
//         <StudentsTestimonial />
//       </section>

//       <section id="gallery">
//         <Gallery />
//       </section>
//     </>
//   );
// }

// // Layout wrapper component to conditionally render shared components
// function Layout({ children, showSharedComponents = true }) {
//   const location = useLocation();
//   const isTestingPage = location.pathname === "/testing";

//   return (
//     <>
//       {children}

//       {/* Conditionally show shared components */}
//       {showSharedComponents && (
//         <>
//           <ScrollToTopButton />
//           <Footer />
//           <MobileFooter />
//         </>
//       )}
//     </>
//   );
// }

// // ---------- App ----------
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Home page routes with shared components */}
//         <Route
//           path="/"
//           element={
//             <Layout>
//               {/* <MarqueeLine /> */}
//               <Home />
//             </Layout>
//           }
//         />
//         <Route
//           path="/:sectionId"
//           element={
//             <Layout>
//               <Home />
//             </Layout>
//           }
//         />

//         {/* Testing page without shared components (or with custom layout) */}
//         <Route
//           path="/testing"
//           element={
//             <Layout showSharedComponents={false}>
//               <RoboticTotalKneeReplacement />
//               <Footer />
//               <MobileFooter />
//             </Layout>
//           }
//         />

//         <Route
//           path="/blogs"
//           element={
//             <Layout showSharedComponents={false}>
//               {/* <MarqueeLine /> */}
//               <BlogHome />
//             </Layout>
//           }
//         />

//         <Route
//           path="/blog/:blogId"
//           element={
//             <Layout showSharedComponents={false}>
//               {/* <MarqueeLine /> */}
//               <BlogPage />
//             </Layout>
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ScrollToTopButton from "./components/scrollToTopButton/ScrollToTopButton";
import Footer from "./components/footer/Footer";
import MobileFooter from "./components/mobileFooter/MobileFooter";
import RoboticTotalKneeReplacement from "./components/specialities/RoboticTotalKneeReplacement";
import BlogHome from "./components/blogs/BlogHome";
import BlogPage from "./components/blogs/BlogPage";
import Home from "./components/home/Home";
import Error404 from "./components/error404/Error404";

// Layout wrapper component to conditionally render shared components
function Layout({ children, showSharedComponents = true }) {
  const location = useLocation();

  return (
    <>
      {children}

      {/* Conditionally show shared components */}
      {showSharedComponents && (
        <>
          <ScrollToTopButton />
          <Footer />
          <MobileFooter />
        </>
      )}
    </>
  );
}

// ---------- App ----------
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home page routes with shared components */}
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route
          path="/blogs"
          element={
            <Layout showSharedComponents={false}>
              <BlogHome />
            </Layout>
          }
        />

        <Route
          path="/blog/:blogId"
          element={
            <Layout showSharedComponents={false}>
              <BlogPage />
            </Layout>
          }
        />

        <Route
          path="*"
          element={
            <Layout showSharedComponents={false}>
              <Error404 />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
