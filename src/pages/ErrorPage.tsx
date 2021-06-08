import React from "react";
import { Link } from "react-router-dom";
import robot from "../images/robot.png";

const ErrorPage = () => {
  return (
    <div className="error">
      <h1>Ooops!!! sorry this page does not exist</h1>
      <img src={robot} alt="error img" className="error-img" />
      <Link to="/" className="error-btn">
        HOME
      </Link>
    </div>
  );
};

export default ErrorPage;
