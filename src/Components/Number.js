import React from "react";
import "./Number.css";
import number1 from "../Assets/image/Number1.png";
import number2 from "../Assets/image/Number2.png";
import number3 from "../Assets/image/Number3.png";

const Number = () => {
  return (
    <div className="fijet">
      <div className="jacket">
        <div>
          <img src={number1} />
        </div>

        <div className="safetyyy">
          <p className="safety">Safe</p>
          <p className="jacket1">
            Your card details and data will never be stored, transferred or
            sold, so rest assured your transactions are safe with us.
          </p>
        </div>
      </div>
      <div className="jacket">
        <div></div>
        <img className="number2" src={number2} />
        {/* <p>2</p> */}

        <div className="safetyyy1">
          <p className="safety">Secured</p>
          <p className="jacket1">
            PropCrowdy was built with top grade security features and our
            payment processor is tested and trusted compliant
          </p>
        </div>
      </div>
      <div className="jacket">
        <div>
          <img src={number3} />
        </div>

        <div className="safetyyy2">
          <p className="safety">Reliable</p>
          <p className="jacket1">
            Propcrowdy is stress free, reliable and safe
          </p>
        </div>
      </div>
    </div>
  );
};

export default Number;
