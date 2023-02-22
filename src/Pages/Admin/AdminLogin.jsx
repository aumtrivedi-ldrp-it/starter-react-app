import { useEffect, useState } from "react";
import logo from "../../Images/logo.png";
import "../../CSS/Admin/admin_login.css";
import { adminLogin } from "../../utils/apis/admin/admin_api.js";
import { useNavigate } from "react-router-dom";
import CircularIndeterminate from "../../Component/Common/Circular";
import { toast } from "react-toastify";
import AdminChecker from "../../hooks/admin/AdminChecker";
import useStore from "../../utils/store.js";
import "../../CSS/Staff/staffLogin.css";

const AdminLogin = () => {
  const navigate = useNavigate();

  const { isLoggedIn, updateAdminLogin } = AdminChecker();

  const url = useStore((state) => state.url);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const adminLoginFunction = async () => {
    setIsLoading(true);
    var response = await adminLogin(url, {
      email: email,
      password: password,
    });
    
    if (response[0]) {
      toast("Login Success", { type: "success" });
      updateAdminLogin(response[1].token, { email: email });
      navigate("/admin/home", { replace: true });
    } else {
      toast(`${response[1].response.data.message}`, { type: "error" });
    }
    setIsLoading(false);
  };

  const checkAlreadyLogin = () => {
    const response = isLoggedIn();
    if (response) {
      navigate("/admin/home", { replace: true });
    }
  };

  useEffect(() => {
    checkAlreadyLogin();
  }, []);

  return (
    <div className="staff_login_container">
    {isLoading ? (
      <center>
        <CircularIndeterminate />
      </center>
    ) : (
      <div className="staff_login_subcontainer">
        <img className="staff_login_image" src={logo} alt="logo" />
        <h1 className="staff_login_title">LOGIN</h1>
        <input
          className="staff_login_input"
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          className="staff_login_input"
          type="Password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="staff_login_btn"
          onClick={(e) => {
            e.preventDefault();
            adminLoginFunction();
          }}
        >
          Log in
        </button>
      </div>
    )}
  </div>
  );
};

export default AdminLogin;
