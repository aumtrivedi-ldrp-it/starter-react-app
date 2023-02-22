import React from 'react';
import { useNavigate } from "react-router-dom";
import "../../CSS/Staff/staffHome.css";

export const DealerHome = () => {
    const navigate = useNavigate();
    return (
      <div className="staff_homepage__container">
        <button
          className="staff_option_selection_button"
          onClick={(e) => {
            e.preventDefault();
            navigate("/dealer/pendingDoForm");
          }}
        >
          Pending Approval DO Forms
        </button>
        <button
          className="staff_option_selection_button"
          onClick={(e) => {
            e.preventDefault();
            navigate("/dealer/collect-payment");
          }}
        >
          Collect Payment
        </button>
        <button
          className="staff_option_selection_button"
          onClick={(e) => {
            e.preventDefault();
            navigate("/dealer/create-loanagreement");
          }}
        >
          Create Loan Contract
        </button>
        <button
          className="staff_option_selection_button"
          onClick={(e) => {
            e.preventDefault();
            navigate("/dealer/new-do-form");
          }}
        >
          Create New DO Form
        </button>
      </div>
    );
}
