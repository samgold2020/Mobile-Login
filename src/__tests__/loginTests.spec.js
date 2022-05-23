import MockAdapter from 'axios-mock-adapter';

import axiosInstance from '../axios.instance';
import { userLogin } from '../queryHelper';

describe('userLogin', () => {
  let mock = new MockAdapter(axiosInstance);
  afterEach(() => mock.reset());

  describe('Should mock a successful API call', () => {
    it('should return status = 200 and token', async () => {
      //given
      const token = 'QpwL5tke4Pnpja7X4';

      mock.onPost().reply(200, { token });

      //when
      const result = await userLogin('eve.holt@reqres.in', 'cityslicka');

      //then
      expect(result.data.token).toEqual(token);
      expect(result.status).toEqual(200);
    });
  });

  describe('When an API call fails', () => {
    it('should return a 400 and a string error "Missing Password"', async () => {
      //given
      mock.onPost().reply(400);

      //then
      await expect(() => userLogin('eve.holt@reqres.in')).rejects.toThrow();
    });
  });
});
