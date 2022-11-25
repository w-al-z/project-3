import React from "react";
import "./Main.css";
import img1 from "../Assets/image/Polygon 2.png";
import img2 from "../Assets/image/image1.png";
import img3 from "../Assets/image/Ellipse 40.png";
import img4 from "../Assets/image/Group 149.png";
import img5 from "../Assets/image/Vector.png";

const Main = () => {
  return (
    <div className="main">
      <div className="real1">
        <div className="estate">
          <p className="real">Real Estate Investment</p>
          <p className="for">Opportunities For Property</p>
          <p className="dev">Development</p>
        </div>
        <div className="cowdy">
          <p className="prop">PropCowdy is a crowfunding investment</p>
          <p className="platform">
            platform that empowers Nigerians to make smart
          </p>
          <p className="iinvest">investments in real estate</p>
        </div>

        <div className="dis">
          <div>
            <button className="btn--1">Get Started</button>
          </div>

          <div className="blue">
            <div className="green">
              <img className="play1" src={img1} />
            </div>
            <div>
              <p className="see">See How it Works</p>
            </div>
          </div>
        </div>
      </div>
      <div className="tt">
        <div className="real2"></div>
        <div className="cr">
          <img className="play2" src={img2} />
        </div>

        <div className="man">
          <div>
            <img src={img3} className="play3" />
          </div>

          <div>
            <p className="naira">+ ₦28,900</p>
            <p className="received">Received from Investment</p>
          </div>
        </div>

        <div>
          <img className="play4" src={img4} />
        </div>
        <div className="bl">
          <p className="progress">Investment Progress</p>
          <img className="play5" src={img5} />
        </div>
      </div>
    </div>
  );
};

export default Main;
