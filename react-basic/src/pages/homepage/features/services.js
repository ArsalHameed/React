import React from "react";
import styles from "./services.module.css";

const Services = ({ heading, imgSrc, imgAlt, gradient, hoverBg }) => {
  return (
    <div
      className={styles.card}
      style={{
        "--card-gradient": gradient,
        "--card-hover-bg": hoverBg,
      }}
    >
      <h2>{heading}</h2>
      <div>
        <img src={imgSrc} alt={imgAlt} />
      </div>
    </div>
  );
};

export default Services;
