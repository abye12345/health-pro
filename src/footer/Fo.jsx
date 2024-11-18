import React from "react";
import "./footer.css";
const Fo = () => {
  return (
    <>
      <div className="contact-form">
        <div>
          <h4>Get in touch</h4>
          <h2>We're here to support you!</h2>
          <form>
            <label>Name*</label>
            <input type="text" required />
            <label>Email*</label>
            <input type="email" required />
            <label>Phone number*</label>
            <input type="tel" required />
            <label>Message</label>
            <textarea></textarea>
            <input type="radio" />
            <span>
              I allow this website to store my submission so they can respond to
              my inquiry. *
            </span>
            <button>Submit</button>
          </form>
        </div>
        <div className="session">
          <p>Get in touch</p>
          <p>
            <i className="fas fa-phone icon"></i> 0993598089
          </p>
          <p>
            <a href="mailto:abyetensae@gmail.com">
              <i className="fas fa-envelope icon"></i>
              <span className="mailto">abyetensae@gmail.com</span>
            </a>
          </p>
          <p>Location</p>
          <p>
            <a
              title="View Location"
              href="https://www.google.com/maps/search/?api=1&query=nib insurance,2.2943506"
              target="_blank"
            >
              <i className="fas fa-map-marker-alt icon"></i>
              <span className="mailto">Addis Ababa, AA ET</span>
            </a>
          </p>
          <p>Hours</p>
          <div className="hours">
            <p>Monday</p>
            <p> 9:00am – 10:00pm</p>
          </div>
          <div className="hours">
            <p>Tuesday</p>
            <p> 8:00am – 9:00pm</p>
          </div>
          <div className="hours">
            <p>Wendsday</p>
            <p> 7:00am – 8:00pm</p>
          </div>
          <div className="hours">
            <p>Thursday</p>
            <p> 6:00am – 7:00pm</p>
          </div>
          <div className="hours">
            <p>Friday</p>
            <p> 5:00am – 6:00pm</p>
          </div>
          <div className="hours">
            <p>Saturday</p>
            <p> 4:00am – 5:00pm</p>
          </div>
          <div className="hours">
            <p>Sunday</p>
            <p> 3:00am – 4:00pm</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fo;
