import React from "react";
import "../../CSS/Customers/CustomerHomePending.css";
function CustomerHomePending() {
  return (
    <div>
      <h1>Pending Installments</h1>
      <h3>Installments</h3>
      <h4>Total Amount:</h4>
      <h4>Total Installments:</h4>
      <h4>Paid</h4>
      <h4>Left:</h4>
      <div className="pen_box">
        <div className="sub_pen">
          <h3>EMI Amount: Rs.1403287.85</h3>
          <h3>Paid on 29-05-2022</h3>
        </div>
        <div className="sub_pen">
          <h3>EMI Amount: Rs.1403287.85</h3>
          <h3>Paid on 29-05-2022</h3>

          <button className="pen_btnn">Pay</button>
        </div>
      </div>
    </div>
  );
}
export default CustomerHomePending;
