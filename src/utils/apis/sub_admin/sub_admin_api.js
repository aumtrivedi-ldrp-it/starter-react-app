import axios from "axios";



export const subAdminLogin =  async (URL ,data) => {
  try {
    var response = await axios.post(`${URL}/subadmin/login`, data);
    
    if (response.status === 200) {
      return [true, response.data];
    }
  } catch (error) {
    console.log("response.....",error)
    return [false, error];
  }
};
