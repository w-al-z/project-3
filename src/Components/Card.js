import React from "react";
import "./Card.css";
import img6 from "../Assets/image/Ellipse1.png";
import img7 from "../Assets/image/Ellipse2.png";
import img8 from "../Assets/image/Ellipse3.png";
import img9 from "../Assets/image/Icon2.png";
import img10 from "../Assets/image/Ellipse 40.png";
import img11 from "../Assets/image/picture.png";
import img12 from "../Assets/image/icon1.png";
const Card = () => {
  return (
    <div className="cards">
      <div className="card1">
        <div>
          <p className="investors">20,000+ Investors</p>
        </div>

        <div className="pp">
          <img src={img6} />
          <div>
            <p className="emeka">Emaka Ndusi</p>
            <p className="invest">Investor</p>
          </div>
        </div>
        <div className="pp">
          <img src={img7} />
          <div>
            <p className="emeka">Titilayo Otunba</p>
            <p className="invest">Investor</p>
          </div>
        </div>
        <div className="pp">
          <img src={img8} />
          <div>
            <p className="emeka">Hassain Omarn</p>
            <p className="invest">Investor</p>
          </div>
        </div>
        <div className="flet">
          <p className="more">See More</p>
          <img className="imm" src={img9} />
        </div>

        <div className="walz">
          <div className="nnn">
            <img className="mmm" src={img10} />
          </div>

          <div className="mikel">
            <p className="ade">Ade Mikel</p>
            <p>Investor</p>
          </div>

          <button className="net">Join Our Investors Network</button>
        </div>

        <div className="icon1">
          <img src={img12} />
        </div>
      </div>
      <div className="card2">
        <div className="joint">
          <p>Join Real Estate Investors</p>
          <p>investing real time</p>
        </div>
        <div className="joints">
          <p>PropCrowding is a Crowfunding investment platform that</p>
          <p>empowers Nigerians to make smart investment in real estate</p>
        </div>

        <div>
          <img className="picture" src={img11} />
        </div>
      </div>
    </div>
  );
};

export default Card;
