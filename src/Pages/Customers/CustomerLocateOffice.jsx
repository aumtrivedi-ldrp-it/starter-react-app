import React from "react";
import "../../CSS/Customers/CustomerLocateOffice.css";
import { GrLocation } from "react-icons/gr";
import { FcPhone } from "react-icons/fc";

function CustomerLocateOffice() {
  return (
    <div>
      <h1>Locate Office</h1>
      <div className="loc_box">
        <div className="sub_box">
          <h3>Office Name</h3>
          <div className="loc_text">
            <div className="loc_icon">
              <GrLocation />
            </div>
            <p>T-26,Jyoti Apartments,Ashok Vihar,Jaipur,Rajasthan-756362</p>
          </div>
          <div className="loc_text">
            <div className="loc_icon">
              <FcPhone />
            </div>
            <p>+91-8365026584</p>
          </div>
        </div>
        <div className="sub_box">
          <h3>Office Name</h3>
          <div className="loc_text">
            <div className="loc_icon">
              <GrLocation />
            </div>
            <p>T-26,Jyoti Apartments,Ashok Vihar,Jaipur,Rajasthan-756362</p>
          </div>
          <div className="loc_text">
            <div className="loc_icon">
              <FcPhone />
            </div>
            <p>+91-8365026584</p>
          </div>
        </div>
        <div className="sub_box">
          <h3>Office Name</h3>
          <div className="loc_text">
            <div className="loc_icon">
              <GrLocation />
            </div>
            <p>T-26,Jyoti Apartments,Ashok Vihar,Jaipur,Rajasthan-756362</p>
          </div>
          <div className="loc_text">
            <div className="loc_icon">
              <FcPhone />
            </div>
            <p>+91-8365026584</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CustomerLocateOffice;
