import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../CSS/Dealer/doSuccess.css";

export const AdminDOFormSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  var formId = location.state.formId;
  return (
    <div className="do_success_screen">
      <center>DO Form Id: {formId}</center>
      <center>
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate("/admin/home", { replace: true });
          }}
        >
          OK
        </button>
      </center>
    </div>
  );
};
