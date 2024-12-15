import React from "react";
import logo from "../../assets/images/logo.svg";
import styles from "./header.module.css"; // Import CSS as a module
import Button from "../../components/button/button";

const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <img className={styles.logo} src={logo} alt="Company Logo" />
        <nav>
          <ul className={styles.navLinks}>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Our Services</a>
            </li>
            <li>
              <a href="#">Case Studies</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </nav>
        <Button name="Contact Us" />
      </header>
    </div>
  );
};

export default Header;
