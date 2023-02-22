
import React from 'react'
import "../../CSS/Admin/admin_home.css";

import useStore from "../../utils/store";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
const items = [
 
  {
    name: "Members List",
    link: "members",
  },
  {
    name: "Reset Password Requests",
    link: "reset-request",
  },
  {
    name: "Search Staff",
    link: "search-staff",
  },
  {
    name: "Showroom Management",
    link: "showroom-management",
  },
  {
    name: "Attendance",
    link: "attendance",
  },
  {
    name: "Download Attendance",
    link: "download-attendance",
  },
  {
    name: "Scheme Management",
    link: "scheme-management",
  },
  {
    name: "Pending Approval DO Forms",
    link: "pendingDoForm",
  },
  {
    name: "Create Loan Contract",
    link: "create-loanagreement",
  },
  {
    name: "Create New Do Form",
    link: "new-do-form",
  },
  {
    name: "View Defaulter",
    link: "defaulter",
  },
  {
    name: "View Customer",
    link: "allcustomers",
  },
  {
    name: "View Recovery",
    link: "allrecovery",
  },
];

export const SubAdminHome = () => {
  const navigate = useNavigate();
  const logout = useStore((state) => state.logout);
  const subadminLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  return (
    <div className="adminhome__container">
      <img className="admin_login__logo" src={logo} alt="adminhome__logo" />
      <Box sx={{ flexGrow: 1, alignItems: "stretch", width: "100%" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
        >
          {items.map((item, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Link to={`/admin/${item.link}`} className="link" key={index}>
                <div className="adminhome__quick_access_container">
                  {item.name}
                </div>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
      <br />
      <button onClick={subadminLogout} className="logout_button">
        Logout
      </button>
    </div>
  );
}
