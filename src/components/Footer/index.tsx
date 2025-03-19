import React from "react";

import { NavLink } from "react-router-dom";
import { footerElement, navItems } from "../../const/global";
import styles from "./styles.module.scss";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      {/* <div className={styles.footerWrapper}> */}
      <div className={styles.navLinks}>
        <NavLink
          to="/"
          relative={"path"}
          viewTransition
          className={styles.textDecoration}
        >
          <span className={styles.text}>{navItems.Home}</span>
        </NavLink>
        <NavLink
          to="/aboutus"
          relative={"path"}
          viewTransition
          className={styles.textDecoration}
        >
          <span className={styles.text}>{navItems.AboutUs}</span>
        </NavLink>
        <NavLink
          to="/competitions"
          relative={"path"}
          viewTransition
          className={styles.textDecoration}
        >
          <span className={styles.text}>{navItems.Competitions}</span>
        </NavLink>
        <NavLink
          to="/dancewear"
          relative={"path"}
          viewTransition
          className={styles.textDecoration}
        >
          <span className={styles.text}>{navItems.DanceWear}</span>
        </NavLink>
        <NavLink
          to="/contact"
          relative={"path"}
          viewTransition
          className={styles.textDecoration}
        >
          <span className={styles.text}>{navItems.Contact}</span>
        </NavLink>
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.emailImage}>
          <img src="/assets/envelope.png" alt="mail" />
        </div>
        <div className={styles.emailText}>
          <div className={styles.envelopeForDesktop}>
            <img src={"/assets/emailIcon.svg"} alt="Email Icon" />
          </div>
          <span>{footerElement.Email}</span>
        </div>
        <div className={styles.copyright}>
          <span> {footerElement.Copyrights} </span>
        </div>
      </div>
      {/* </div> */}
    </footer>
  );
};

export default Footer;
