import React from "react";
import styles from "./hero.module.css";
import Marquee from "react-fast-marquee";

import a from "../../../assets/images/clients/1 (1).png";
import b from "../../../assets/images/clients/1 (2).png";
import c from "../../../assets/images/clients/1 (3).png";
import d from "../../../assets/images/clients/1 (4).png";
import e from "../../../assets/images/clients/1 (5).png";
import f from "../../../assets/images/clients/1 (6).png";
import g from "../../../assets/images/clients/1 (7).png";
import h from "../../../assets/images/clients/1 (8).png";
import i from "../../../assets/images/clients/1 (9).png";
import j from "../../../assets/images/clients/1 (10).png";
import k from "../../../assets/images/clients/1 (11).png";
import l from "../../../assets/images/clients/1 (12).png";
import m from "../../../assets/images/clients/1 (13).png";
import n from "../../../assets/images/clients/1 (14).png";

const Hero = () => {
  return (
    <div>
      <div className={styles.heroM}>
        <h1 className={styles.mainHeading}>
          A House of Nerdy <br />
          Technical Writers
        </h1>
        <p className={styles.secondHeading}>
          Simplifying complex ideas into clear & <br />
          actionable documentation.
        </p>
        <h3 className={styles.thirdHeading}>Trusted by 100+</h3>
      </div>
      <Marquee
        className={styles.slider}
        autoFill
        pauseOnHover
        speed={50}
        gradient
      >
        <a href="#">
          <img className={styles.sliderAnk} src={a} alt="" />
        </a>
        <a href="#">
          <img className={styles.sliderAnk} src={b} alt="" />
        </a>
        <a href="#">
          <img className={styles.sliderAnk} src={c} alt="" />
        </a>
        <a href="#">
          <img className={styles.sliderAnk} src={d} alt="" />
        </a>
        <a href="#">
          <img className={styles.sliderAnk} src={e} alt="" />
        </a>
        <a href="#">
          <img className={styles.sliderAnk} src={f} alt="" />
        </a>
        <a href="#">
          <img className={styles.sliderAnk} src={g} alt="" />
        </a>
        <a href="#">
          <img className={styles.sliderAnk} src={h} alt="" />
        </a>
        <a href="#">
          <img className={styles.sliderAnk} src={i} alt="" />
        </a>
        <a href="#">
          <img className={styles.sliderAnk} src={j} alt="" />
        </a>
        <a href="#">
          <img className={styles.sliderAnk} src={k} alt="" />
        </a>
        <a href="#">
          <img className={styles.sliderAnk} src={l} alt="" />
        </a>
        <a href="#">
          <img className={styles.sliderAnk} src={m} alt="" />
        </a>
        <a href="#">
          <img className={styles.sliderAnk} src={n} alt="" />
        </a>
      </Marquee>
    </div>
  );
};

export default Hero;
