import  { useEffect, useState } from "react";
import "../../CSS/Admin/admin_member_list.css";
import useStore from "../../utils/store";
import { toast } from "react-toastify";
import CircularIndeterminate from "../../Component/Common/Circular";
import { adminUsersByCategory } from "../../utils/apis/admin/admin_api";
import MemberContainer from "../../Component/Admin/MemberContainer";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

const AdminMemberList = () => {
  const navigate = useNavigate();
  const jwt = useStore((state) => state.jwt);
  const url = useStore((state) => state.url);

  const [isLoading, setIsLoading] = useState(true);
  const [dealers, setDealers] = useState([]);
  const [officeStaffs, setOfficeStaffs] = useState([]);
  const [recoveryStaffs, setRecoveryStaffs] = useState([]);

  const getData = async () => {
    setIsLoading(true);
    const response = await adminUsersByCategory(url , jwt);

    if (response[0]) {
      setDealers(response[1].dealers);
      setOfficeStaffs(response[1].office_staffs);
      setRecoveryStaffs(response[1].recovery_staffs);
    } else {
      toast(`${response[1]}`, { type: "success" });
    }
    setIsLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="memberlist__container">
    <h1>Member List</h1>
      {isLoading ? (
        <CircularIndeterminate />
      ) : (
        <>
          <div
            className="float"
            onClick={(e) => {
              navigate("/admin/add-member");
            }}
          >
            <div className="float_content">
              <AddIcon />
            </div>
          </div>

          <div className="memberlist__content_container">
            <h3>Office Staff</h3>
            <div className="memberlist__member_container" >  
            {officeStaffs.map((member, index) => (
              <MemberContainer member={member} key={index} />
            ))}
            </div>
          </div>
          <div className="memberlist__content_container">
            <h3>Dealer</h3>
            <div className="memberlist__member_container" > 
            {dealers.map((member, index) => (
              <MemberContainer member={member} key={index} />
            ))}
            </div>
          </div>
          <div className="memberlist__content_container">
            <h3>Recovery</h3>
            <div className="memberlist__member_container" >
            {recoveryStaffs.map((member, index) => (
              <MemberContainer member={member} key={index} />
            ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminMemberList;
