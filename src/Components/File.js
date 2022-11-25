import React from "react";
import "./File.css";
import who1 from "../Assets/image/who.png";
import who2 from "../Assets/image/who.png";
import who3 from "../Assets/image/who.png";
import who4 from "../Assets/image/who.png";

const File = () => {
  return (
    <div className="philips">
      <div>
        <p className="yasir">
          Get all the support you need, Contact our online agent{" "}
        </p>
        <p className="intouch">
          Get in touch or create account. We are 24/7 available
        </p>
      </div>
      <div>
        <button className="breakit">Contact Us</button>
      </div>

      <img className="who1" src={who1} />
      <img className="who2" src={who2} />
      <img className="who3" src={who3} />
      <img className="who4" src={who4} />
    </div>
  );
};

export default File;
