import React from "react";
import "./Form.css";
import immgs from "../Assets/image/circle7.png";
import img19 from "../Assets/image/circle3.png";
import img20 from "../Assets/image/circle4.png";
import img21 from "../Assets/image/circle5.png";
import img22 from "../Assets/image/circle6.png";
const Form = () => {
  return (
    <div className="yoga">
      <div className="playy1">
        <div className="flame">
          <div className="devops">
            <p>Developer</p>
            <div className="veri">
              <h2>Offer Document</h2>
              <p className="verif">Verified</p>
            </div>

            <form className="putt">
              <label className="comp">Company Intoduction</label>
              <div>
                <input className="put" type="text" />
              </div>
            </form>
            <form>
              <label className="comp">Tell Your Story</label>
              <div>
                <input className="put" type="text" />
              </div>
            </form>

            <div className="peace">
              <div>
                <img src={immgs} />
              </div>
              <div>
                <p className="rao">Raising</p>
                <div className="ups">
                  <p>+ ₦83,900,000</p>
                </div>
                <p className="trop">Property Developer</p>
              </div>
            </div>
            <div className="peaces">
              <div>
                <img src={immgs} />
              </div>
              <div>
                <p className="rao">Raising</p>
                <div className="ups">
                  <p>+ ₦83,900,000</p>
                </div>
                <p className="trop">Property Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="playy2">
        <div className="mp22">
          <div className="white1">
            <div className="white">
              <div className="red">
                <div>
                  <img src={img19} />
                </div>
                <p className="set">Set Up Your Account</p>
                <div className="sign">
                  <p>Easy sign up with your social media</p>
                  <p>account or create an account with your</p>
                  <p>email</p>
                </div>
              </div>
            </div>
            <div className="white">
              <div className="red">
                <div>
                  <img src={img20} />
                </div>
                <p className="set">Search Opportunities</p>
                <div className="sign">
                  <p>Select a project opportunity and invest,</p>
                  <p>get monthly updates on your dashbourd.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="white1">
            <div className="white">
              <div className="red">
                <div>
                  <img src={img21} />
                </div>
                <p className="set">Fund A Project</p>
                <div className="sign">
                  <p>Your return on investment is deposited</p>
                  <p>into your account at the end of the</p>
                  <p>cycle.</p>
                </div>
              </div>
            </div>
            <div className="white">
              <div className="red">
                <div>
                  <img src={img22} />
                </div>
                <p className="set">Get Returns</p>
                <div className="sign">
                  <p>Follow up with trends on your dashboard</p>
                  <p>and monitor your investments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
