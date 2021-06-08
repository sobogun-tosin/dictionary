import React from "react";
import banner from "../../images/dictionary.jpg";

const Banner = () => {
  return (
    <div className="banner">
      <img src={banner} alt="" className="banner-img" />
      <h4>Welcome To Tosin Words World!</h4>
    </div>
  );
};

export default Banner;
