import React from "react";
import "../../CSS/Customers/CustomerProfile.css";
function CustomerProfile() {
  return (
    <div>
      <h1 className="recovery_title">Profile</h1>
      <div className="recovery_con">
        <img
          className="recovery_img"
          src="https://thumbs.dreamstime.com/b/close-up-smiling-young-boy-garden-suit-tie-close-up-smiling-corporate-young-boy-blue-suit-tie-white-179333555.jpg"
          alt=""
        ></img>
        <h2 className="recovery_name">Swapnil</h2>
        <p>Phone No: 2583697410</p>
      </div>
      <p className="pro_text">File No:6347hbf929grbj29642834</p>
      <button className="recovery_sign">Sign Out</button>
    </div>
  );
}
export default CustomerProfile;
