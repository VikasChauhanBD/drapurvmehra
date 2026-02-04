import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "./PatientsTestimonial.css";

const patientsEnglishData = [
  {
    image:
      "https://cdn.dribbble.com/userupload/44967485/file/f3fd822dcfd489ad11d91a87f831b385.jpeg",
    alt: "Kanchan Malhotra",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/44967500/file/612b699e67f9e72411d830241e7b1fca.jpeg",
    alt: "Sushil Jain",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/44967510/file/271e0310d8cdf85c65f638ba79d3e811.jpeg",
    alt: "Kusum Thakkar",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/44967459/file/a493f1f82f6e851154956da5f3b53138.jpeg",
    alt: "Shivam Bhatia",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/44967524/file/2b0915dddc0b2a1bbbccd04f17764e2c.jpeg",
    alt: "Tabassum Alam",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/44967485/file/f3fd822dcfd489ad11d91a87f831b385.jpeg",
    alt: "Kanchan Malhotra",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/44967500/file/612b699e67f9e72411d830241e7b1fca.jpeg",
    alt: "Sushil Jain",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/44967510/file/271e0310d8cdf85c65f638ba79d3e811.jpeg",
    alt: "Kusum Thakkar",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/44967459/file/a493f1f82f6e851154956da5f3b53138.jpeg",
    alt: "Shivam Bhatia",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/44967524/file/2b0915dddc0b2a1bbbccd04f17764e2c.jpeg",
    alt: "Tabassum Alam",
  },
];

const patientsHindiData = [
  {
    image:
      "https://cdn.dribbble.com/userupload/44967460/file/a1fea870de65f1ba28df0c9ad39af963.jpeg",
    alt: "Kanchan Malhotra",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/44967461/file/22ecd0245766c00aeeb6634d4ba16888.jpeg",
    alt: "Sushil Jain",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/44967462/file/c25580a8865f0a50749b7f464c0e6c9e.jpeg",
    alt: "Kusum Thakkar",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/44967464/file/0484768f5e4a3f4fc76bff322b5862b8.jpeg",
    alt: "Shivam Bhatia",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/44967463/file/e676b7a48426d16c0d0f87e208a86452.jpeg",
    alt: "Tabassum Alam",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/44967460/file/a1fea870de65f1ba28df0c9ad39af963.jpeg",
    alt: "Kanchan Malhotra",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/44967461/file/22ecd0245766c00aeeb6634d4ba16888.jpeg",
    alt: "Sushil Jain",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/44967462/file/c25580a8865f0a50749b7f464c0e6c9e.jpeg",
    alt: "Kusum Thakkar",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/44967464/file/0484768f5e4a3f4fc76bff322b5862b8.jpeg",
    alt: "Shivam Bhatia",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/44967463/file/e676b7a48426d16c0d0f87e208a86452.jpeg",
    alt: "Tabassum Alam",
  },
];

function PatientsTestimonial() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  return (
    <div id="patients-testimonial" className="patient-swiper-container">
      <div className="patient-swiper-content1">
        <h2>Patient Stories English ✨</h2>
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2,
            slideShadows: false,
          }}
          navigation={true}
          modules={[EffectCoverflow, Navigation, Autoplay]}
          // className="patient-swiper"
        >
          {patientsEnglishData.map((data, index) => (
            <SwiperSlide className="patient-swiper-slide" key={index}>
              <img src={data.image} alt={data.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="patient-swiper-content2">
        <h2>Patient Stories Hindi ✨</h2>
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2,
            slideShadows: false,
          }}
          navigation={true}
          modules={[EffectCoverflow, Navigation, Autoplay]}
          // className="patient-swiper"
        >
          {patientsHindiData.map((data, index) => (
            <SwiperSlide className="patient-swiper-slide" key={index}>
              <img src={data.image} alt={data.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default PatientsTestimonial;
