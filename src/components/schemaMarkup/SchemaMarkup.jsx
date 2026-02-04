import { Helmet } from "react-helmet";

const SchemaMarkup = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Dr Apurv Mehra",
    url: "https://drapurv.com",
    logo: "https://drapurv.com/assets/logo-1TZw7U9J.png",
    sameAs: [
      "https://www.facebook.com/drapurvmehra/",
      "https://www.linkedin.com/in/dr-apurv-mehra-22998917a/",
      "https://www.youtube.com/channel/UCGwlKO8kzkcc6Bt1u-wsppQ",
      "https://www.instagram.com/apurv.mehra/",
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://drapurv.com",
    name: "Dr Apurv Mehra",
    description:
      "Dr. Apurv Mehra is a renowned robotic orthopedics joint replacement surgeon, known for excellence in medical education worldwide.",
    image: "https://drapurv.com/assets/logo-1TZw7U9J.png",
    url: "https://drapurv.com",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/drapurvmehra/",
      "https://www.linkedin.com/in/dr-apurv-mehra-22998917a/",
      "https://www.youtube.com/channel/UCGwlKO8kzkcc6Bt1u-wsppQ",
      "https://www.instagram.com/apurv.mehra/",
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  );
};

export default SchemaMarkup;
