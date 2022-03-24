import React from "react";
import banner from "../../images/dictionary.jpg";
import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <div className={styles.Banner}>
      <img src={banner} alt="" className={styles.Banner_img} />
      <h4 className={styles.Banner_text}>Welcome to words world</h4>
    </div>
  );
};

export default Banner;
