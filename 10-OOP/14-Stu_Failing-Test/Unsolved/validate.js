// TODO: Define a Validate class with an isPassword() function that takes in a password parameter.
function Validate() { };

Validate.prototype.isPassword = (a) => {
      if (a === null) {
            return false;
      }
      return a;
}

// TODO: Export the Validate class from this file.
module.exports = Validate;