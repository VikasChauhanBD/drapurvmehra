import React from "react";
import "./LowerFooter.css";
import { NavLink } from "react-router-dom";

function LowerFooter() {
  return (
    <footer className="lower-footer">
      <hr />
      <p>
        &copy; 2026 Dr. Apurv Mehra. All rights reserved | Designed & Managed
        By:{" "}
        <NavLink to="https://believersdestination.com/" target="_blank">
          Believers Destination Pvt Ltd
        </NavLink>
      </p>
    </footer>
  );
}

export default LowerFooter;
