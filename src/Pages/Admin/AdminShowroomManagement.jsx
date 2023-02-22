import { useEffect, useState } from "react";
import useStore from "../../utils/store";
import "../../CSS/Admin/admin_showroom_management.css";
import { adminGetAllShowrooms } from "../../utils/apis/admin/admin_api";

import CircularIndeterminate from "../../Component/Common/Circular";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";

const AdminShowroomManagement = () => {
  const navigate = useNavigate();

  const jwt = useStore((state) => state.jwt);
  const url = useStore((state) => state.url);

  const [isLoading, setIsLoading] = useState(true);
  const [showrooms, setShowrooms] = useState([]);

  const getData = async () => {
    const response = await adminGetAllShowrooms(url , jwt);
    if (response[0]) {
      console.log(response[1]);
      setShowrooms(response[1]);
    } else {
      toast(`${response[1]}`, { type: "error" });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="showroom_management__container">
      <div
        className="float"
        onClick={(e) => {
          navigate("/admin/add-showroom");
        }}
      >
        <div className="float_content">
          <AddIcon />
        </div>
      </div>
      <h1>Showrooms Management</h1>

      {isLoading ? (
        <CircularIndeterminate />
      ) : (
        <Box sx={{ flexGrow: 1, alignItems: "stretch", width: "100%" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 4, md: 12 }}
          >
            {showrooms.map((showroom, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <div className="showroom_management__box">
                  <h4>Id: {showroom._id}</h4>
                  <h5>Name: {showroom.name}</h5>
                  <h5>Owner Name: {showroom.owner_name}</h5>
                  <h6>Location: {showroom.location}</h6>
                </div>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </div>
  );
};

export default AdminShowroomManagement;
