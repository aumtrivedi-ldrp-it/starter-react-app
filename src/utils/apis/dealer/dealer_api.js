import axios from "axios";




export const dealerLogin = async (URL , data) => {
  try {
    const response = await axios.post(`${URL}/common/dealer/login`, data);
    if (response.status === 200) {
      return [true, response.data];
    }
  } catch (error) {
    return [false, error];
  }
};

export const createDoForm = async (URL , jwt, data) => {
  try {
    const config = {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    };
    const response = await axios.post(
      `${URL}/doform/create/`,
      data,
      config
    );
    if (response.status === 200) {
      return [true, response.data];
    }
  } catch (error) {
    return [false, error];
  }
};

export const getPendingLoanAgreementForms = async (URL, jwt) =>{
  try{
    const config = {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    };
    const response = await axios.get(
      `${URL}/doform/approved-do-form`,
      config
    );
    if (response.status === 200) {
      return [true, response.data];
    }
  } catch (error) {
    return [false, error];
  }
}

export const createLoanAgreement = async (URL, jwt, data) =>{
  try{
    const config = {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    };
    const response = await axios.post(
      `${URL}/loanagreement/create`,
      data,
      config
    );
    if (response.status === 200) {
      return [true, response.data];
    }
  } catch (error) {
    return [false, error];
  }
}