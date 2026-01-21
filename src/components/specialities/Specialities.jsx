import { React, useEffect } from "react";
import "./Specialities.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";

function Specialities() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  const specialitiesData = [
    {
      image:
        "https://cdn.dribbble.com/userupload/44901423/file/6ea6e354fcfdddf0ac33778ef41b3f38.png",
      topic: "Robotic Total Knee Replacement",
      url: "/robotic-total-knee-replacement",
    },
    {
      image:
        "https://cdn.dribbble.com/userupload/44901425/file/6672e4ce71f578104490a74d4073d74b.png",
      topic: "Complex and Revision Joint Replacements",
      url: "/complex-and-revision-joint-replacements",
    },
    {
      image:
        "https://cdn.dribbble.com/userupload/44901428/file/816383c7bfd9b86f7341e39525e10708.png",
      topic: "Arthroscopic ACL Reconstructions",
      url: "/arthroscopic-acl-reconstructions",
    },
    {
      image:
        "https://cdn.dribbble.com/userupload/44901427/file/24228b581b6eb5677a19e09e1b7739cb.png",
      topic: "Shoulder/Rotator Cuff Surgeries",
      url: "/shoulder-cuff-surgeries",
    },
    {
      image:
        "https://cdn.dribbble.com/userupload/44901424/file/5c00fb2c84df6f2b22baf70ae861e3de.png",
      topic: "Complex Trauma & Pelvic - Acetabular Surgeries",
      url: "/complex-trauma-pelvic-acetabular-surgeries",
    },
    {
      image:
        "https://cdn.dribbble.com/userupload/44901426/file/1b7ee0d0ea7c7e0ef1b70d94a17d103e.png",
      topic: "Limb Deformity Corrections & Spine Surgeries",
      url: "/limb-deformity-corrections-spine-surgeries",
    },
  ];

  return (
    <div id="specialities" className="specialities-main-container">
      <h1>From Bones to Joints - Complete Orthopedic Solutions</h1>
      <div className="specialities-cards">
        <p className="specialities-subtitle">
          From Fractures to Robotic Joint Replacements - Complete Orthopedic
          Expertise <br /> Dr. Apurv Mehra combines years of surgical experience
          with advanced robotic technology to deliver precise care, faster
          recovery, and long - term results you can rely on
        </p>
        {specialitiesData.map((data, index) => (
          <NavLink key={index} className="specialities-card" to={data.url}>
            <img src={data.image} alt="bone image" />
            <h5>{data.topic}</h5>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Specialities;
