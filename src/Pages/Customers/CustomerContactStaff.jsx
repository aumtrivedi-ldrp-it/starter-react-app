import React from "react";
import "../../CSS/Customers/CustomerContactStaff.css";
import { FcPhone } from "react-icons/fc";
import { AiOutlineMail } from "react-icons/ai";
function CustomerContactStaff() {
  return (
    <div>
      <h1>Contact Staff</h1>
      <h3>Contact Rahul</h3>
      <div className="num">
        <div className="contact_icon">
          <FcPhone />
        </div>
        <p className="contact_text">+91-9738783947</p>
      </div>
      <div className="num">
        <div className="contact_icon">
          <FcPhone />
        </div>
        <p className="contact_text">+91-9738783947</p>
      </div>
      <hr />
      <div className="num">
        <div className="contact_icon">
          <AiOutlineMail />
        </div>
        <p className="contact_text">xyz@gmail.com</p>
      </div>
      <div className="num">
        <div className="contact_icon">
          <AiOutlineMail />
        </div>
        <p className="contact_text">xyz@gmail.com</p>
      </div>

      <button className="contact_btn">VISIT PHYSICAL STORE</button>
    </div>
  );
}
export default CustomerContactStaff;
