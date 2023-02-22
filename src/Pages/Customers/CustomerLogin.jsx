import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Images/logo.png";
import { customerLogin } from "../../utils/apis/customer/customer_api";
import CircularIndeterminate from "../../Component/Common/Circular";
import "../../CSS/Staff/staffLogin.css";
import { toast } from "react-toastify";
import useStore from "../../utils/store.js";

function CustomerLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const login = useStore((state) => state.login);
  const url = useStore((state) => state.url);
  const setJwt = useStore((state) => state.setJwt);
  const setUser = useStore((state) => state.setUser);
  const setCurrentUserType = useStore((state) => state.setCurrentUserType);
  const customerLoginFunction = async () => {
    setIsLoading(true);
    var response = await customerLogin(url , {
      "customerId": email,
      "password": password,
    });
    if (response[0]) {
      console.log(response[1]);
      console.log(response[1].user.type);
      const newUser = {
        id: response[1].user._id,
        email: response[1].user.email,
      };
      setUser(newUser);
      login();
      setCurrentUserType(response[1].user.type);
      setJwt(response[1].token);
      toast(`Log-in Success`, { type: "success" });
      navigate("/customer/home");
    } else {
      setIsLoading(false);
      toast(`${response[1].response.data.message}`, { type: "error" });
    }
    setIsLoading(false);
  };
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
                customerLoginFunction();
              }}
          >
            Log in
          </button>
          <Link to="/Forget" className="staff_login_forget">
            Forget Password?
          </Link>
        </div>
      )}
    </div>
  );
}
export default CustomerLogin;
