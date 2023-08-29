var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");

signUpButton.addEventListener("click", function (event) {
  event.preventDefault();

  // TODO: Create user object from submission
  var signForm = {
    firstName: firstNameInput.value.trim(),
    lastName: firstNameInput.value.trim(),
    emailAddress: emailInput.value.trim(),
    secretPassword: passwordInput.value.trim()
  };

  // TODO: Set new submission to local storage 
  localStorage.setItem("signForm", JSON.stringify(signForm));

  var something = JSON.parse(localStorage.getItem("signForm"));

});
