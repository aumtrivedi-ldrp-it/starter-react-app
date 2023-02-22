import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CircularIndeterminate from "../../Component/Common/Circular";
import { toast } from "react-toastify";
import logo from "../../Images/logo.png";
import { subAdminLogin } from "../../utils/apis/sub_admin/sub_admin_api.js";
import "../../CSS/Admin/admin_login.css";
import SubadminChecker from "../../hooks/subadmin/SubadminChecker";
import useStore from "../../utils/store";
const SubAdminLogin = () => {
  const navigate = useNavigate();
  const { isLoggedIn, updateSubadminLogin } = SubadminChecker();
  const url = useStore((state) => state.url);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const subadminLoginFunction = async () => {
    setIsLoading(true);
    var response = await subAdminLogin(url , {
      email: email,
      password: password,
    });
    console.log("response[1].message",response[1].response.data.message)

    if (response[0]) {
      toast("Login Success", { type: "success" });
      updateSubadminLogin(response[1].token, { user: response[1].user });
      navigate("/subadmin/home", { replace: true });
    } else {
      toast(`${response[1].response.data.message}`, { type: "error" });
    }
    setIsLoading(false);
  };

  const checkAlreadyLogin = () => {
    const response = isLoggedIn();
    if (response) {
      navigate("/subadmin/home", { replace: true });
    }
  };

  useEffect(() => {
    checkAlreadyLogin();
  }, []);

  return (
    <>
      {isLoading ? (
        <CircularIndeterminate />
      ) : (
        <div className="admin_login__container">
          <img className="admin_login__logo" src={logo} alt="logo" />
          <div className="admin_login__content_container">
            <h1 className="admin_login__content_title">LOGIN</h1>
            <form onSubmit={subadminLoginFunction}>
              <input
                className="admin_login__form_field"
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <input
                className="admin_login__form_field"
                type="Password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <button type="submit" className="admin_login__form_button">
                Log in
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SubAdminLogin;
