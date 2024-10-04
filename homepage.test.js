const { validateLogin } = require('./homepage.js');

describe('Login Functionality', () => {
  test('should login successfully with correct credentials', () => {
    const result = validateLogin('Jack@soprasteria.com', 'Jack@soprasteria.com');
    expect(result).toBe(true);
  });

  test('should fail login with incorrect credentials', () => {
    const result = validateLogin('WrongUser', 'WrongPassword');
    expect(result).toBe(false);
  });

  test('should fail login with correct username but wrong password', () => {
    const result = validateLogin('Jack', 'WrongPassword');
    expect(result).toBe(false);
  });

  test('should fail login with wrong username but correct password', () => {
    const result = validateLogin('WrongUser', 'Jack');
    expect(result).toBe(false);
  });
});