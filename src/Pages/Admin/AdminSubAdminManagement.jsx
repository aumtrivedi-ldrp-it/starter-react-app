import { useState, useEffect } from "react";
import useStore from "../../utils/store";
import { useNavigate } from "react-router-dom";
import "../../CSS/Admin/admin_sub_admin_management.css";

import CircularIndeterminate from "../../Component/Common/Circular";

import { adminGetAllSubAdmin } from "../../utils/apis/admin/admin_api";
import { toast } from "react-toastify";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";

const AdminSubAdminManagement = () => {
  const navigate = useNavigate();
  
  const jwt = useStore((state) => state.jwt);
  const url = useStore((state) => state.url);

  const [isLoading, setIsLoading] = useState(true);
  const [subadmins, setSubAdmins] = useState([]);

  const getData = async () => {
    const response = await adminGetAllSubAdmin(url, jwt);
    console.log("response",response)
    if (response[0]) {
      setSubAdmins(response[1]);
    } else {
      toast(`${response[1]}`, { type: "error" });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return <div className="subadmin__container">
      <h1>Sub Admins</h1>
      <div
            className="float"
            onClick={(e) => {
              navigate("/admin/add-sub-admin");
            }}
          >
            <div className="float_content">
              <AddIcon />
            </div>
          </div>

      {isLoading ? (<CircularIndeterminate />) : (

      <Box sx={{ flexGrow: 1, alignItems: "stretch", width: "100%" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 4, md: 12 }}
          >
            {subadmins.map((subadmin, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <div className="subadmin__box">
                    <img  src={subadmin.image} alt={subadmin.name} className="subadmin__image"/>
                    <h5>Name: {subadmin.name}</h5>
                    <h5>Email: {subadmin.email}</h5>
                    <h5>Phone Number: {subadmin.phone}</h5>
                </div>
              </Grid>
            ))}
          </Grid>
        </Box>
  
  )}</div>;
};

export default AdminSubAdminManagement;
