import "./home.css";
import React, { useState, useEffect } from "react";
import Fo from "../footer/Fo";
const Home = () => {
  const images = ["./fim.jpg", "./ff.jpeg", "./et.jpeg", "./mil.jpeg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <img src={images[currentIndex]} />
      <div className="font-family">
        <div className="digital">
          <h1 className="health">Welcome to Amiro care </h1>
          <ul>
            It's like having a personalized mental health Profession and coach
            in your pocket, available anytime, anywhere. A’emiro Care is the
            digital solution bridging the gap in comprehensive wellness. Unlike
            fragmented services, it offers a unified platform integrating
            fitness, nutrition, mindfulness, and mental health. This ensures a
            holistic approach tailored to your individual needs, accessible
            anytime, anywhere. With A’emiro Care, personalized wellness support
            is always at your fingertips, breaking down barriers of high costs
            and limited access, and making complete well-being achievable for
            everyone.
          </ul>
          <h3>Wellcometo the digital mental health and wellbing clinic!</h3>
          <p>
            A’emiro (አዕምሮ)Care , we are dedicated to providing top-notch mental
            health care and wellness training to individuals, employees,
            employers, and couples. Our services include tele therapy for mental
            health issues such as depression, anxiety, and psychological
            disorders, as well as wellness training covering eight dimensions of
            wellness.
          </p>
        </div>
        <div className="mission">
          <h1>Mission of A'mero care</h1>
          <p>
            Our mission is to provide practical mental health solutions through
            teletherapy, counseling, workplace wellness training, and well-being
            programs. We collaborate with international mental health
            professionals and partners to deliver services remotely and through
            online platforms. Additionally, we focus on research, awareness
            creation, and promoting mental health across communities.
          </p>
        </div>
        <div className="vission">
          <h1>Vission of A'mero care</h1>
          <p>
            Mental health disorders such as depression, anxiety, and
            psychological distress are prevalent in Ethiopia, affecting
            approximately 21-27% of the population according to studies
            registered by the Ministry of Health. Despite the high prevalence,
            limited of mental helath facilities and professionals,
            social-cultural stigma and discrimination put a significant barriers
            to addressing these mental health challenges effectively. Our vision
            is a future where every individual enjoys mental well-being, free
            from the burdens of major mental health disorders like depression,
            anxiety, and psychological distress. We envision a world where
            access to mental health professionals and facilities is easy and
            stigma-free for all.
          </p>
        </div>
      </div>
      <Fo />
    </>
  );
};

export default Home;
