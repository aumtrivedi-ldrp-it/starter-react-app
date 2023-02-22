import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../../utils/store";
import "../../CSS/Admin/admin_scheme.css";
import CircularIndeterminate from "../../Component/Common/Circular";
import { toast } from "react-toastify";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import { getAllSchemes } from "../../utils/apis/admin/admin_api";

const AdminSchemeManagement = () => {
  const navigate = useNavigate();
  const jwt = useStore((state) => state.jwt);
  const url = useStore((state) => state.url);

  const [isLoading, setIsLoading] = useState(true);
  const [schemes, setSchemes] = useState([]);

  const getData = async () => {
    const response = await getAllSchemes(url , jwt);
    if (response[0]) {
      setSchemes(response[1]);
    } else {
      toast(`${response[1]}`, { type: "error" });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div
        className="float"
        onClick={(e) => {
          navigate("/admin/add-scheme");
        }}
      >
        <div className="float_content">
          <AddIcon />
        </div>
      </div>
      <h1>Scheme Management</h1>
      {isLoading ? (
        <CircularIndeterminate />
      ) : (
        <div>
          {schemes.map((scheme, index) => (
            <div key={index}>
                <div>{scheme.name}</div>
                <div>{scheme.schemePercentage}%</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminSchemeManagement;
