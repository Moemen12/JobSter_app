import React from "react";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}

        <div className="info">
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>
            I'm baby iceland cronut kickstarter gorpcore. Freegan tattooed
            normcore af live-edge selvage DIY sustainable unicorn solarpunk.
            Fashion axe cloud bread food truck kitsch brunch stumptown poke
            retro woke twee jean shorts hella. Pug deep v selvage venmo
            asymmetrical jianbing.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
