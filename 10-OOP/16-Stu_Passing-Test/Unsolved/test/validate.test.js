const Validate = require('../validate.js');

const pattern = new RegExp('([A-Za-z0-9_-]+$)');

describe('Validate', () => {
  describe('Validate password', () => {

    describe('isPassword', () => {

      // TODO: Write a test that checks if isPassword() returns false when the password is less than 8 characters.
      it('should take a string parameter', () => {
        const lengthpassword = 8
        const validate = new Validate();
        expect(validate.isPassword("Gustavos")).toHaveLength(lengthpassword);
      });

      // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 uppercase.
      it('should take a string parameter and return at least one uppercase', () => {
        const lengthpassword = 8
        const validate = new Validate();
        expect(validate.isPassword("Gustavos")).toEqual();
      });

    });

  });

  
  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 lowercase.
  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 number.
  // TODO: Write a test that checks if isPassword() returns true when the password is at least 8 characters long and contains an uppercase, lowercase, and number.
});
