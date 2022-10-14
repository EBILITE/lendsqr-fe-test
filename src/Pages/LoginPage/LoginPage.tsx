import React from "react";
import "./LoginPage.scss";
import LogoImage from "../../Assests/Images/LendSqrLogo.svg";
import HeroImage from "../../Assests/Images/LandingPageImage.svg";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="LoginWrapper">
      <div className="LoginContainer">
        {/*    Left Side */}
        <div className="Left-Wrapper">
          <div>
            <div>
              <img src={LogoImage} alt="logo" />
            </div>

            <div className="HeroImageCont">
              <img src={HeroImage} alt="Hero" />
            </div>
          </div>
        </div>

        {/*  Right Side */}
        <div className="Right-Wrapper">
          <div className="Right-Container">
            <h2>Welcome!</h2>
            <h4>Enter details to login.</h4>
            <div className="Input-holder">
              <input placeholder="Email" className="input1" />
              <div className="Input2">
                <input placeholder="Password" />
                <h5>Show</h5>
              </div>
            </div>

            <h6>FORGOT PASSWORD?</h6>

            <button>
              <Link to="/Dashboard" className="link">
                LOG IN
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
