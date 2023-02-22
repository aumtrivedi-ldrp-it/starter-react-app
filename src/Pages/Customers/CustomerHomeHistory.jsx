import React from "react";
import "../../CSS/Customers/CustomerHomeHistory.css";
function CustomerHomeHistory() {
  return (
    <div>
      <h1>PAYMENT HISTORY</h1>
      <div className="his">
        <div className="his_box">
          <h2>Paid</h2>
          <p>1407362.736820663260</p>
          <p className="his_p">09-03-2022</p>
          <h2>EXTRA CHARGES</h2>
          <p>Rs.200</p>
          <p className="his_p">DUE 20 Jan 2022</p>
          <hr className="his_hr"></hr>
          <div className="his_details">
            <p>By Cash at</p>
            <p>To</p>
            <p>ID</p>
            <p>Verified By</p>
            <p>ID</p>
          </div>
        </div>

        <div className="his_box2">
          <h2>Not Paid</h2>
          <p>1403784.727836723834</p>
          <p className="his_p">09-03-2022</p>
        </div>
      </div>
    </div>
  );
}
export default CustomerHomeHistory;
