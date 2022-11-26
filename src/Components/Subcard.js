import React from "react";
import "./Subcard.css";
import img13 from "../Assets/image/Ellipse3.png";
import img14 from "../Assets/image/Ellipse2.png";
import img15 from "../Assets/image/Ellipse1.png";
import img17 from "../Assets/image/circle1.png";
import img18 from "../Assets/image/circle2.png";
import img19 from "../Assets/image/circle3.png";
import img20 from "../Assets/image/circle4.png";
import img21 from "../Assets/image/circle5.png";
import img22 from "../Assets/image/circle6.png";

const Subcard = () => {
  return (
    <div className="waloski">
      <div className="mp1">
        <div>
          <img className="circle1" src={img17} />
        </div>
        <div>
          <img className="circle2" src={img18} />
        </div>

        <div className="subcards">
          <div className="cards1">
            <div className="flee">
              <img src={img13} />
              <div className="rad">
                <div className="one">
                  <p className="na">+ ₦180,900</p>
                </div>
                <p className="inv">Investor</p>
              </div>
            </div>
          </div>
          <div className="cards1">
            <div className="flee">
              <img src={img14} />
              <div className="rad">
                <div className="one">
                  <p className="na">+ ₦180,900</p>
                </div>
                <p className="inv">Investor</p>
              </div>
            </div>
          </div>
          <div className="cards1">
            <div className="flee">
              <img src={img15} />
              <div className="rad">
                <div className="one">
                  <p className="na">+ ₦180,900</p>
                </div>
                <p className="inv">Investor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mp2">
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
  );
};

export default Subcard;
