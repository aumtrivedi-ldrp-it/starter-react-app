import axios from "axios";


export const recoveryStaffLogin = async (URL , data) => {
  try {
    const response = await axios.post(`${URL}/common/recovery/login`, data);
    if (response.status === 200) {
      return [true, response.data];
    }
  } catch (error) {
    return [false, error];
  }
};

// req-router.get("/getRecovery/:recoveryStaffId",getRecovery );
export const getRecovery = async (URL, jwt, recoveryStaffId) => {
  try {
    const config = {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    };
    const response = await axios.get(
      `${URL}/recoverystaff/getRecovery/${recoveryStaffId}`,
      config
    );
    if (response.status === 200) {
      return [true, response.data];
    }
  } catch (error) {
    return [false, error];
  }
};

// req-router.post("/completerecovery", completeRecovery);
export const completerecovery = async (URL ,data) => {
  try {
    var response = await axios.post(
      `${URL}recoverystaff/completerecovery`,
      data
    );
    if (response.status === 200) {
      return [true, response.data];
    }
  } catch (error) {
    return [false, error];
  }
};

// req-router.post("/madepayment", madePayment)

export const recoveryMadePayment = async (URL ,data) => {
  try {
    var response = await axios.post(`${URL}/recoverystaff/madepayment`, data);
    if (response.status === 200) {
      return [true, response.data];
    }
  } catch (error) {
    return [false, error];
  }
};
