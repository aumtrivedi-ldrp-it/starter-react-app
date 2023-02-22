import React from "react";
import "../../CSS/Customers/CustomerHome.css";
import { FcNext } from "react-icons/fc";
function CustomerHome() {
  return (
    <div>
      <h1>PAYMENTS DUES</h1>
      <div className="hom">
        <div className="sub_hom">
          <h3>Payment History</h3>
          <div className="home_iconn">
            <FcNext />
          </div>
        </div>
        <div className="sub_hom">
          <h3>Pending Installments</h3>
          <div className="home_icon">
            <FcNext />
          </div>
        </div>
      </div>
    </div>
  );
}
export default CustomerHome;
