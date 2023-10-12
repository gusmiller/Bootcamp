// TODO: Import the Validate class.
const Validate = require('../validate.js');

// TODO: Describe a testing suite for checking the functionality of the Validate class.
describe('Validate password', () => {
      
      describe('isPassword', () => {
            it('should take a string parameter', () => {
                  const validate = new Validate();
                  expect(validate.isPassword("Gus")).toHaveLength(3);
            });
      });
});

// TODO: Write a test that asserts that isPassword() returns false when passed an empty string.
describe('Validate empty password', () => {
      
      describe('isPassword', () => {
            it('should take a string parameter', () => {
                  const validate = new Validate();
                  expect(validate.isPassword()).toBe(false);
            });
      });
});