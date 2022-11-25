import React from "react";
import "./Subform.css";

const Subform = () => {
  return (
    <div className="deiza">
      <div className="dams">
        <div>
          <form className="Room">
            <label className="Deal">Deal Room</label>

            <div>
              <input className="inputings" type="text" />
            </div>
          </form>
          <form>
            <label className="mubee">Location and Address</label>

            <div>
              <input className="mubbe" type="text" />
            </div>
          </form>
          <form className="sony">
            <label className="mubee">View Project Documents</label>

            <div>
              <input className="mubbe" type="text" />
            </div>
          </form>
          <div>
            <input className="pork" type="text" />
          </div>
          <div>
            <input className="pork1" type="text" />
          </div>
          <div>
            <input className="pork2" type="text" />
          </div>

          <p className="Bodies">Verified By Reguatory Bodies</p>
        </div>
      </div>
      <div className="dams2">
        <div>
          <p className="nasty">Our Deal Room</p>
          <p className="nastyc">
            Our deal room provides you all the documentary evidence you need to
            know about an investment. As part of our due-diligence verification
            we compile all necessary documents associated with each opportunity
            on our platform.
          </p>
          <button className="nastyd">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Subform;
