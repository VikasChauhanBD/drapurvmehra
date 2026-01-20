import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ScrollToTopButton from "./components/scrollToTopButton/ScrollToTopButton";
import Footer from "./components/footer/Footer";
import MobileFooter from "./components/mobileFooter/MobileFooter";
import RoboticTotalKneeReplacement from "./components/specialities/RoboticTotalKneeReplacement";
import Acl from "./components/specialities/Acl";
import ComplexTrauma from "./components/specialities/ComplexTrauma";
import SpineSurgeries from "./components/specialities/SpineSurgeries";
import BlogHome from "./components/blogs/BlogHome";
import BlogPage from "./components/blogs/BlogPage";
import Home from "./components/home/Home";
import Error404 from "./components/error404/Error404";

function Layout({ children, showSharedComponents = true }) {
  const location = useLocation();

  return (
    <>
      {children}
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
          path="/robotic-total-knee-replacement"
          element={
            <Layout showSharedComponents={false}>
              <RoboticTotalKneeReplacement />
            </Layout>
          }
        />

        <Route
          path="/complex-trauma-pelvic-acetabular-surgeries"
          element={
            <Layout showSharedComponents={false}>
              <ComplexTrauma />
            </Layout>
          }
        />

        <Route
          path="/arthroscopic-acl-reconstructions"
          element={
            <Layout showSharedComponents={false}>
              <Acl />
            </Layout>
          }
        />

        <Route
          path="/spine-surgeries"
          element={
            <Layout showSharedComponents={false}>
              <SpineSurgeries />
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
