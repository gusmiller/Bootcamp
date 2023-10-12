class Validate {}

Validate.prototype.isPassword = (password) => {
  if (password === null) {
        return false;
  }
  return password;
}

module.exports = Validate;