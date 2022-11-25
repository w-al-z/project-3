import React from "react";
import "./Article.css";
import Press from "../Assets/image/press.png";
import homes1 from "../Assets/image/homes.png";
import pison1 from "../Assets/image/pison.png";
import homes2 from "../Assets/image/homes.png";
import pison2 from "../Assets/image/pison.png";
import homes3 from "../Assets/image/homes.png";

const Article = () => {
  return (
    <div>
      <p className="Articles">Articles From Our Blog</p>
      <p className="Article">
        Stay updated with PropCrowdy trends and market updates
      </p>
      <div className="Presses">
        <img className="Press" src={Press} />
      </div>
      <p className="Companies">Funded Companies</p>
      <p className="Exclusives">Our exclusive list of investment companies</p>

      <div className="Presses1">
        <img className="" src={homes1} />
        <img className="" src={pison1} />
        <img className="popo1" src={homes2} />
        <img className="popo2" src={pison2} />
        <img className="popo3" src={homes3} />
      </div>
    </div>
  );
};

export default Article;
