import React from "react";
import { useNavigate } from "react-router-dom";
import "../../CSS/Staff/staffHome.css";

export const StaffHomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="staff_homepage__container">
      <button
        className="staff_option_selection_button"
        onClick={(e) => {
          e.preventDefault();
          navigate("/staff/pendingDoForm");
        }}
      >
        Pending Approval DO Forms
      </button>
      <button
          className="staff_option_selection_button"
          onClick={(e) => {
            e.preventDefault();
            navigate("/staff/create-loanagreement");
          }}
        >
          Create Loan Contract
        </button>
      <button
        className="staff_option_selection_button"
        onClick={(e) => {
          e.preventDefault();
          navigate("/staff/collect-payment");
        }}
      >
        Collect Payment
      </button>
      <button
        className="staff_option_selection_button"
        onClick={(e) => {
          e.preventDefault();
          navigate("/staff/defaulter");
        }}
      >
        View Defaulter
      </button>
      <button
        className="staff_option_selection_button"
        onClick={(e) => {
          e.preventDefault();
          navigate("/staff/allrecovery");
        }}
      >
        View Recovery
      </button>
      <button
        className="staff_option_selection_button"
        onClick={(e) => {
          e.preventDefault();
          navigate("/staff/allcustomers");
        }}
      >
        View Customer
      </button>
    </div>
  );
};
