import React from "react";
import "./resource.css";
const Resources = () => {
  return (
    <>
      <div className="resource">
        <h3 className="h3">Mental health insights</h3>
        <h1>Stay informed with the latest news and articles</h1>
        <hr />
        <img className="face-hand" src="face-hand.jpg" />
        <h2>Understanding mental health</h2>
        <p>
          Understanding Mental Health is an essential resource designed to
          educate individuals about common mental health disorders such as
          depression and anxiety. This resource provides insight into the
          symptoms, causes, and effects of these disorders, helping indi...
        </p>
      </div>
      <div className="resource">
        <hr />
        <img className="face-hand" src="mindfull.jpg" />
        <h2>Mindfulness practices guide</h2>
        <p>
          The Mindfulness Practices Guide serves as a practical tool for anyone
          looking to incorporate mindfulness into their daily routine. This
          resource outlines various techniques such as meditation, deep
          breathing exercises, and mindful walking, providing step-b...
        </p>
      </div>
      <div className="resource">
        <hr />
        <img className="face-hand" src="worryless.webp" />
        <h2>Coping with stress</h2>
        <p>
          Coping with Stress is a valuable resource that offers strategies for
          managing stress effectively in today's fast-paced world. This resource
          outlines various stressors individuals may face and provides practical
          techniques to help mitigate their impact. Fro...
        </p>
      </div>
    </>
  );
};

export default Resources;
