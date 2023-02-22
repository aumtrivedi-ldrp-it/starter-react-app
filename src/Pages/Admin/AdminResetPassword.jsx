import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useStore from "../../utils/store";

import CircularIndeterminate from "../../Component/Common/Circular";
import { adminResetNewPassword } from "../../utils/apis/admin/admin_api";

import { toast } from "react-toastify";

const AdminResetPassword = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const url = useStore((state) => state.url);

  const [isLoading, setIsLoading] = useState(false);
  const [newPassword, setNewPassword] = useState(null);

  const updatePassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const response = adminResetNewPassword(
      url,
      state.jwt,
      state.email,
      newPassword,
      state.type
    );
    if (response[0]) {
      toast(`Password Reset Success`, { type: "success" });
      navigate(-1);
    } else {
      toast(`${response[1]}`, { type: "error" });
      setIsLoading(false);

    }
  };

  return (
    <div className="reset_password__container">
      <h1>Reset Password</h1>
      {isLoading ? (
        <CircularIndeterminate />
      ) : (
        <div className="reset_password__content_container">
          <form onSubmit={updatePassword}>
            <input
              label="New Password"
              variant="outlined"
              placeholder="Enter New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="basic_input_field"
            />
            <button type="submit" className="square_blue__button">
              Save
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminResetPassword;
