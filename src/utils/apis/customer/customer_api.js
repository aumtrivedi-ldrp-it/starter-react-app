import axios from "axios";




//req-router.post('/login', userLogin);
export const customerLogin = async (URL ,data) => {
  try {
    var response = await axios.post(`${URL}/customer/login`, data);
    if (response.status === 200) {
      return [true, response.data];
    }
  } catch (error) {
    return [false, error];
  }
};

//! search customer
export const customerSearch = async (URL ,jwt, query) => {
  try {
    const config = {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    };
    const response = await axios.get(`${URL}/customer/search/${query}`, config);
    if (response.status === 200) {
      return [true, response.data];
    }
  } catch (error) {
    return [false, error];
  }
};

//req-router.get("/chequeList/:customerId", getChequeListById)
export const getChequeListByCustomerId = async (URL ,jwt, customerId) => {
  try {
    const config = {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    };
    const response = await axios.get(
      `${URL}/customer/chequeList/${customerId}`,
      config
    );
    if (response.status === 200) {
      return [true, response.data];
    }
  } catch (error) {
    return [false, error];
  }
};

//req-router.get("/vehiclestatus/:customerId", getVehicleStatus)
export const customerStatus = async (URL ,jwt, customerId) => {
  try {
    const config = {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    };
    const response = await axios.get(
      `${URL}/customer/vehiclestatus/${customerId}`,
      config
    );
    if (response.status === 200) {
      return [true, response.data];
    }
  } catch (error) {
    return [false, error];
  }
};
