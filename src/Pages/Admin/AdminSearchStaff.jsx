import { useState } from "react";
import "../../CSS/Admin/admin_search_staff.css";
import { toast } from "react-toastify";
import MemberContainer from "../../Component/Admin/MemberContainer";
import CircularIndeterminate from "../../Component/Common/Circular";
import { searchStaff } from "../../utils/apis/common/common_api";
import useStore from "../../utils/store";

const AdminSearchStaff = () => {
  const jwt = useStore((state) => state.jwt);
  const url = useStore((state) => state.url);

  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [staffs, setStaffs] = useState([]);

  const search = async (e) => {
    e.preventDefault();
      setIsLoading(true);
      const response = await searchStaff(url , jwt, query);
      if (response[0]) {
        setStaffs(response[1]);
      } else {
        toast(`${response[1]}`, { type: "error" });
      }
      setIsLoading(false);
    
  };

  return (
    <div className="search__container">
      <h1>Search Staff Members</h1>
      <form onSubmit={search}>
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          className="basic_input_field"
        />
        <button type="submit" className="admin_search_button">
          Search
        </button>
      </form>
      {isLoading ? (
        <CircularIndeterminate />
      ) : (
        <div className="search__member_container">
          {staffs.map((member, index) => (
            <MemberContainer member={member} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminSearchStaff;
