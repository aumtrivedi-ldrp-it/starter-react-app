import axios from "axios";

export const searchStaff = async (URL , jwt, query) => {
  try {
    const config = {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    };
    const response = await axios.get(
      `${URL}/common/searchstaff/${query}`,
      config
    );
    if (response.status === 200) {
      return [true, response.data];
    }
  } catch (error) {
    return [false, error];
  }
}
export const getPendingApproveDoForm  = async (URL , jwt) => {
  console.log("jwt",jwt)
  try {
    const config = {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    };
    const response = await axios.get(`${URL}/doform/non-approved-form`, config);
    if (response.status === 200) {
      return [true, response.data];
    }
  } catch (error) {
    return [false, error];
  }
};

export const approveDoForm = async (URL , jwt, data) => {
  try {
    const config = {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    };
    const response = await axios.put(
      `${URL}/doform/update-do-form`,
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

export const cancelDoForm = async (URL , jwt, data) => {
  try {
    const config = {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    };
    const response = await axios.post(`${URL}/doform/cancel`, data, config);
    if (response.status === 200) {
      return [true, response.data];
    }
  } catch (error) {
    return [false, error];
  }
};

export const getAllCustomers = async (URL , jwt) => {
  try {
    const config = {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    };
    const response = await axios.get(
      `${URL}/common/customers/all
    `,

      config
    );
    if (response.status === 200) {
      return [true, response.data];
    }
  } catch (error) {
    return [false, error];
  }
};

export const getAllSchemes = async (URL , jwt) => {
  try {
    const config = {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    };
    const response = await axios.get(
      `${URL}/common/all/schemes
    `,

      config
    );
    if (response.status === 200) {
      return [true, response.data];
    }
  } catch (error) {
    return [false, error];
  }
};
