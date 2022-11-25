import React from "react";
import "./Graph.css";
import graph1 from "../Assets/image/graph.png";
import pac from "../Assets/image/circle7.png";

const Graph = () => {
  return (
    <div className="points">
      <div>
        <p className="committee">Independent Investment Committee</p>
        <p className="nastyc">
          In other to ensure that our investments are viable, we have a team of
          independent investment advisors who are responsible for appraising the
          property investment and ensuring that offerings meet the minimum risk
          acceptance criteria.
        </p>
        <button className="nastyd">Get Started</button>
      </div>
      <div className="sixty">
        <div className="point">
          <p className="twelve">Independent Investment Committee</p>
          <p className="thirteen">Risk acceptance criteria.</p>
          <img src={graph1} />
        </div>
        <div className="fifty">
          <div>
            <img src={pac} />
          </div>

          <div>
            <p className="nep">Appraising investment</p>
            <p className="advisor">investment advisors</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graph;
