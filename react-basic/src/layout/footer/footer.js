import React from "react";
import Button from "../../components/button/button";
import logo from "../../assets/images/logow.png";
import lilogi from "../../assets/images/linkedIn.png";
import email from "../../assets/images/email.png";
import call from "../../assets/images/call.png";
import address from "../../assets/images/address.png";
import styles from "./footer.module.css"; // Import as CSS Module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Left Section */}
        <div className={styles.footerLeft}>
          <img src={logo} className={styles.logo} alt="Logo" />
          <h2 className={styles.footerLeftH}>Let's Connect</h2>
          <p>
            If you would like to talk to us about a project or you have a
            question, please get in touch. Book the discovery call today and
            allow us to build a solid Knowledge Base for your product.
          </p>
          <div className={styles.bookA}>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={lilogi} alt="LinkedIn"/>
            </a>
            <Button name="Book Discovery Call" className="footer-button" />
          </div>
        </div>

        {/* Center Section */}
        <div className={styles.footerLinks}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Our Services</a>
            </li>
            <li>
              <a href="#">Our Work</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className={styles.footerContacts}>
          <h3>Contacts</h3>
          <div>
            <span className={styles.icon}>
              <img src={call} alt="Call" />
            </span>
            <p>
              <strong>Call us</strong>
              <br />
              079862 28254
            </p>
          </div>
          <div>
            <span className={styles.icon}>
              <img src={email} alt="Email" />
            </span>
            <p>
              <strong>Send a message</strong>
              <br />
              info@begawn.com
            </p>
          </div>
          <div>
            <span className={styles.icon}>
              <img src={address} alt="Address" />
            </span>
            <p>
              <strong>Address</strong>
              <br />
              Plot no. E-309, 8A, Industrial Area, Sector 75, Sahibzada Ajit
              Singh Nagar, Punjab 160062
            </p>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <hr />
        <p className={styles.copyRights}>
          © 2025 BEGAWN IT Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
