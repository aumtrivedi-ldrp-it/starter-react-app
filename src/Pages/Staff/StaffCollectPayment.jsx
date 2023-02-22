import React, { useState } from "react";
import { customerSearch } from "../../utils/apis/customer/customer_api";
import useStore from "../../utils/store.js";
import { toast } from "react-toastify";
import CircularIndeterminate from "../../Component/Common/Circular";
import "../../CSS/Staff/staffCollectPayment.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

export const StaffCollectPayment = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [customerList, setCustomerList] = useState([]);
  const jwt = useStore((state) => state.jwt);
  const url = useStore((state) => state.url);

  const navigate = useNavigate();

  const search = async () => {
    if (query.length > 0) {
      setIsLoading(true);
      const response = await customerSearch(url , jwt, query);
      if (response[0]) {
        console.log(response[1]);
        setCustomerList(response[1]);
      } else {
        toast(`${response[1]}`, { type: "success" });
      }
      setIsLoading(false);
    } else {
      toast("Enter valid name", { type: "error" });
    }
  };

  return (
    <div className="customer_search_page">
      <div className="search_bar_div">
        <TextField
          placeholder="Search Customer"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          fullWidth
          className="search_bar"
          required
        />
        <button onClick={search} className="search_button">Search</button>
      </div>

      {isLoading ? (
        <CircularIndeterminate />
      ) : (
        <div className="customer_search_container">
          <Box sx={{ flexGrow: 1 }} className="category__container_gridbox">
            <Grid
              container
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
              spacing={{ xs: 2, md: 3 }}
              columns={{
                xs: 4,
                sm: 12,
                md: 16,
              }} /**multiple of 4 {item size is 4} */
            >
              {customerList.map((member, index) => (
                <Grid item xs={4}>
                  <div className="customer_search_card">
                    <div className="customer_search_image">
                      <img
                        src={member.image}
                        className="customer_image"
                        alt=""
                      />
                    </div>
                    <div className="customer_search_name">
                      Name: {member.name}
                    </div>
                    <div className="customer_search_name">
                      Phone No: {member.phoneNumber}
                    </div>
                    <div className="customer_search_name">
                      File No: {member.loanAgreementId}
                    </div>
                    <button
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('/staff/customer-emi-list',{state:{id:member._id, name:member.name}})
                    }}
                    >Pay EMI</button>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </div>
      )}
    </div>
  );
};
