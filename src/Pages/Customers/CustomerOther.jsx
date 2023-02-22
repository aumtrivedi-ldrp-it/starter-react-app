import React from "react";
import "../../CSS/Customers/CustomerOther.css";
import { FcNext } from "react-icons/fc";
function CustomerOther() {
  return (
    <div>
      <h1>Contact Us</h1>
      <div className="con">
        <div className="sub_con">
          <h3>Contact Staff</h3>
          <div className="customer_iconn">
            <FcNext />
          </div>
        </div>
        <div className="sub_con">
          <h3>View Extra Charges</h3>
          <div className="customer_icon">
            <FcNext />
          </div>
        </div>
        <div className="sub_con">
          <h3>Locate office</h3>
          <div className="customer_iconn">
            <FcNext />
          </div>
        </div>
      </div>
    </div>
  );
}
export default CustomerOther;
