import React, { useState, useEffect } from "react";
import "../../CSS/Recovery/RecoveryHome.css";
import { useLocation } from "react-router-dom";
import { MdOutlineRefresh } from "react-icons/md";
import {
  completerecovery,
  getRecovery,
} from "../../utils/apis/recovery_staff/recovery_staff_api.js";
import { toast } from "react-toastify";
import CircularIndeterminate from "../../Component/Common/Circular";
import useStore from "../../utils/store.js";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function RecoveryHome() {
  const [isLoading, setIsLoading] = useState(false);
  const [recoveryList, setRecoveryList] = useState([]);
  const location = useLocation();
  const jwt = useStore((state) => state.jwt);
  const url = useStore((state) => state.url);
  const getRecoveries = async () => {
    setIsLoading(true);
    console.log(location.state.id);
    console.log(jwt);
    var response = await getRecovery(url , jwt, location.state.id);
    if (response[0]) {
      console.log(response[1]);
      setRecoveryList(response[1]);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      toast(`${response[1]}`, { type: "error" });
    }
    setIsLoading(false);
  };

  const vehicleRecovered = async (recoveryId) => {
    setIsLoading(true);
    var response = await completerecovery(url , jwt, recoveryId);
    if (response[0]) {
      setIsLoading(false);
      toast(`Vehicle Recovered`, { type: "success" });
    } else {
      setIsLoading(false);
      toast(`${response[1]}`, { type: "error" });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getRecoveries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="recovery_home">
      {isLoading ? (
        <center>
          <CircularIndeterminate />
        </center>
      ) : (
        <>
          <div className="recovery_header">
            <h1 className="recovery_title">Recoveries</h1>
            <button className="recovery_btn">
              <MdOutlineRefresh />
            </button>
          </div>
          <div>
            <Box sx={{ flexGrow: 1, alignItems: "stretch", width: "100%" }}>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 2, sm: 4, md: 12 }}
              >
                {recoveryList.map((showroom, index) => (
                  <Grid item xs={2} sm={4} md={4} key={index}>
                    <div className="showroom_management__box">
                      <h4>Id: {showroom._id}</h4>
                      <h5>Name: {showroom.name}</h5>
                      <h5>Owner Name: {showroom.phone}</h5>
                      <h6>Location: {showroom.address}</h6>
                      <div>
                        <button>Cash Recieved</button>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            vehicleRecovered(showroom._id);
                          }}
                        >
                          Vehicle Recovered
                        </button>
                      </div>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </div>
        </>
      )}
    </div>
  );
}
export default RecoveryHome;
