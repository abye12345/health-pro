import React from "react";
import "./services.css";
import { Link } from "react-router-dom";
const Services = () => {
  const handleclick = (e) => {
    e.preventDefault();
    const path = e.currentTarget.getAttribute("href");
    window.location.href = path;
  };
  return (
    <>
      <div className="service">
        <div>
          <h3>Empowering mental health</h3>
          <h1>
            Your path to wellness starts
            <br /> here
          </h1>
          <p>
            A’emiro (አዕምሮ)Care is revolutionizing mental health care in Addis
            Ababa, Ethiopia. Our mission focuses on providing accessible and
            stigma-free mental health solutions through teletherapy, counseling,
            and workplace wellness training. We bridge the gap in mental health
            services by collaborating with international professionals and
            tailoring our programs to meet the diverse needs of individuals,
            couples, and organizations. With a commitment to holistic well-
            being, we empower communities to embrace mental wellness and thrive.
          </p>
        </div>
        <div>
          <img className="serv-mas-img" src="masag.jpeg" />
        </div>
      </div>
      <div className="service-section">
        <div className="service-section-im">
          <Link to="/Convient" onClick={handleclick}>
            <img className="im" src="ing.webp" />
            <h3>
              Teletherapy services
              <br />
              <span>
                Convenient remote therapy for
                <br /> mental health issues.
              </span>
            </h3>
          </Link>
        </div>
        <div className="service-section-im">
          <Link to="/Compren" onClick={handleclick}>
            <img className="im" src="stair.jpeg" />
            <h3>
              Wellness training
              <br />
              <span>
                Comprehensive training for
                <br /> overall well-being.
              </span>
            </h3>
          </Link>
        </div>
        <div className="service-section-im">
          <Link to="/Personalized" onClick={handleclick}>
            <img className="im" src="learn.jpeg" />
            <h3>
              Teletherapy services
              <br />
              <span>
                Personalized support for
                <br /> mental health challenges.
              </span>
            </h3>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Services;
