import { useState } from "react";
import useStore from "../../utils/store";

import { useNavigate } from "react-router-dom";
import { adminAddNewShowroom } from "../../utils/apis/admin/admin_api.js";
import CircularIndeterminate from "../../Component/Common/Circular";
import { toast } from "react-toastify";

const AdminAddShoroom = () => {
  const navigate = useNavigate();

  const jwt = useStore((state) => state.jwt);
  const url = useStore((state) => state.url);

  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [ownerName, setOwnerName] = useState("");

  const save = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await adminAddNewShowroom(url, jwt, name, location, ownerName);

    if (response[0]) {
      toast(`New Showroom added`, { type: "success" });
      navigate(-1);
    } else {
      toast(`${response[1]}`, { type: "error" });
      setIsLoading(false);
    }
  };

  return (
    <div className="new_showroom__container">
      <h1>Add New Showroom</h1>
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
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
            required
          />

          <input
            className="basic_input_field"
            placeholder="Showroom Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          <button className="square_blue__button" type="submit">
            Add Showroom
          </button>
        </form>
      )}
    </div>
  );
};

export default AdminAddShoroom;
