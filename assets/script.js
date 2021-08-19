// Assignment code here

// create function to generate password when generate-btn is pressed

//after pressing button "click" prompted to answer password criteria questions

// then prompted to select answers  to include in password criteria

// when prompted for a length of password within 8-128 characters

// when prompted to pick character types (lowercase, uppercase, numeric, and/or special characters) confirm or deny answer "true or false"

// when prompt is confirmed is should be validated

// at least one character type should be selected

//after all promts are answered then password is generated matching all selected criteria

// when password is generated it is displayed written to page


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
