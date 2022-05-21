import axios from 'axios';

export const createUser = async (email, password) => {
  try {
    let res = await axios({
      url: `https://reqres.in/api/register`,
      method: 'post',
      data: {
        email,
        password,
      },
    });
    return res;
  } catch (e) {
    return e;
  }
};
