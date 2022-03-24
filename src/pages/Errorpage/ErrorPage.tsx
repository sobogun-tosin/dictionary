import React from "react";
import { Link } from "react-router-dom";
import robot from "../../images/robot.png";
import styles from "./ErrorPage.module.scss";

const ErrorPage = () => {
  return (
    <div className={styles.ErrorPage}>
      <h1 className={styles.ErrorPage_text}>
        Ooops!!! sorry this page does not exist
      </h1>
      <img src={robot} alt="error img" className={styles.ErrorPage_img} />
      <Link to="/" className={styles.ErrorPage_btn}>
        HOME
      </Link>
    </div>
  );
};

export default ErrorPage;
