import React, { useEffect } from "react";
import "../../CSS/Common/selection_screen.css";
import { useNavigate } from "react-router-dom";
import LoginChecker from "../../hooks/common/LoginChecker";
import useStore from "../../utils/store.js";
const SelectionScreen = () => {
  const navigate = useNavigate();

  const selectedState = useStore((state) => state.selectedState);
  const setSelectedState = useStore((state) => state.setSelectedState);
  const setUrl = useStore((state) => state.setUrl);
  const logout = useStore((state) => state.logout);

  const { isLoggedIn } = LoginChecker();

  const checkLogin = () => {
    const response = isLoggedIn();
    if (response[0]) {
      navigate(`/${response[1]}/home`, { replace: true });
    }
  };

  const changeDropeDown = (e) => {
    e.preventDefault();
    setSelectedState(e.target.value);
      setUrl("https://cute-red-shrimp-suit.cyclic.app");
    logout();
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (

    <div>
      <select onChange={changeDropeDown} className="common_container_select">
        <option value="Oddisa" selected={selectedState  === "Oddisa" ?true : false}>Oddisa</option>
        <option value="Chhattisgarh" selected={selectedState  === "Chhattisgarh" ?true : false}>Chhattisgarh</option>
      </select>
    <div className="selection_screen__container">
      <button
        className="selection_screen__select_button"
        onClick={(e) => {
          e.preventDefault();
          navigate("/admin/login");
        }}
      >
        Admin
      </button>
      <button
        className="selection_screen__select_button"
        onClick={(e) => {
          e.preventDefault();
          navigate("/subadmin/login");
        }}
      >
        Sub-Admin
      </button>
      <button
        className="selection_screen__select_button"
        onClick={(e) => {
          e.preventDefault();
          navigate("/staff/login");
        }}
      >
        Office Staff
      </button>
      <button
        className="selection_screen__select_button"
        onClick={(e) => {
          e.preventDefault();
          navigate("/dealer/login");
        }}
      >
        Dealer
      </button>
      <button
        className="selection_screen__select_button"
        onClick={(e) => {
          e.preventDefault();
          navigate("/recovery/login");
        }}
      >
        Recovery-Staff
      </button>
      <button
        className="selection_screen__select_button"
        onClick={(e) => {
          e.preventDefault();
          navigate("/customer/login");
        }}
      >
        Customers
      </button>
    </div>
    </div>
  );
};

export default SelectionScreen;
