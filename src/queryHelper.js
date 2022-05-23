import axiosInstance from './axios.instance';

export const userLogin = async (email, password) => {
  let res = await axiosInstance
    .post(`https://reqres.in/api/login`, { email, password })
    .then(response => {
      return response;
    })
    .catch(response => response);
  //In JEST world object contains status
  if (res?.status === 400) {
    throw new Error('Invalid Login');
    //Actual return has response which contains status
  } else if (res?.response?.status === 400) {
    throw new Error('Invalid Login');
  }
  return res;
};
