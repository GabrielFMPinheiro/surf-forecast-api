import { User } from '@src/models/user';

describe('Users functional tests', () => {
  beforeEach(async () => {
    await User.deleteMany({});
  });

  describe('When creating a user', () => {
    it('should create a user with success', async () => {
      const newUser = {
        name: 'John Doe',
        email: 'john@gmail.com',
        password: '1234',
      };
      const response = await global.testRequest.post('/users').send(newUser);
      expect(response.status).toBe(201);
      expect(response.body).toEqual(expect.objectContaining(newUser));
    });
  });
});
