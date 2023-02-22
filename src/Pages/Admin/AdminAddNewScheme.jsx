import React, { useState } from "react";
import CircularIndeterminate from "../../Component/Common/Circular";
import { addNewScheme } from "../../utils/apis/admin/admin_api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useStore from "../../utils/store";
const AdminAddNewScheme = () => {
  const navigate = useNavigate();
  const jwt = useStore((state) => state.jwt);
  const url = useStore((state) => state.url);

  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [percentage, setPercentage] = useState("");

  const save = async () => {
    setIsLoading(true);
    const response = await addNewScheme(url, jwt, name, percentage);
    if (response[0]) {
      toast(`New Scheme Added`, { type: "success" });
      navigate(-1);
    } else {
      toast(`${response[1]}`, { type: "error" });
    }
    setIsLoading(false);
  };

  return (
    <div>
      <h1>Add New Scheme</h1>
      {isLoading ? (
        <CircularIndeterminate />
      ) : (
        <form onSubmit={save}>
          <input
            className="basic_input_field"
            placeholder="Showroom Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            className="basic_input_field"
            placeholder="Showroom Owner Name"
            value={percentage}
            onChange={(e) => setPercentage(e.target.value)}
            required
            type="number"
          />

          <button className="square_blue__button" type="submit">
            Add New Scheme
          </button>
        </form>
      )}
    </div>
  );
};

export default AdminAddNewScheme;
