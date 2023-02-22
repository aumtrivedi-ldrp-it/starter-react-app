import { useEffect, useState } from "react";
import useStore from "../../utils/store";
import { adminGetAllForgotPasswordRequest } from "../../utils/apis/admin/admin_api.js";
import "../../CSS/Admin/admin_reset_password.css";
import { useNavigate } from "react-router-dom";

import CircularIndeterminate from "../../Component/Common/Circular.jsx";

import { toast } from "react-toastify";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const AdminResetPasswordRequest = () => {
  const navigate = useNavigate();

  const jwt = useStore((state) => state.jwt);
  const url = useStore((state) => state.url);

  const [isLoading, setIsLoading] = useState(true);
  const [requests, setRequests] = useState([]);

  const getData = async () => {
    const response = await adminGetAllForgotPasswordRequest(url , jwt);
    if (response[0]) {
      setRequests(response[1]);
    } else {
      toast(`${response[1]}`, { type: "error" });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="request_password__container">
      <h1>Reset Password Request</h1>
      {isLoading ? (
        <CircularIndeterminate />
      ) : (
        <Box sx={{ flexGrow: 1, alignItems: "stretch", width: "100%" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 4, md: 12 }}
          >
            {requests.map((request, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <div className="request_password__box">
                  <h4>Id: {request._id}</h4>
                  <h5>Name: {request.name}</h5>
                  <h5>Email: {request.email}</h5>
                  <h6>Type: {request.type}</h6>
                  <button
                    className="square_blue__button"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/admin/reset-password", {
                        state: { jwt: jwt, email: request.email , type: request.type },
                      });
                    }}
                  >
                    Reset Password
                  </button>
                </div>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </div>
  );
};

export default AdminResetPasswordRequest;
