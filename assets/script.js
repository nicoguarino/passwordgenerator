
// create function to generate password when generate-btn is pressed

//after pressing button "click" prompted to answer password criteria questions

// then prompted to select answers  to include in password criteria

// when prompted for a length of password within 8-128 characters

// when prompt is confirmed is should be validated

// at least one character type should be selected

//after all promts are answered then password is generated matching all selected criteria

// when password is generated it is displayed written to page

// -------------------------------------------------------------------------------------
// Assignment code here


 
// functions built for random char types (lowercase, uppercase, numeric, and/or special characters) 
function randomLower() {

  var lower = "abcdefghijklmnopqrstuvwrxyz";

  return lower[Math.floor(Math.random() * lower.length)];
};

function randomHigher() {

  var higher = "ABCDEFGHIJKLMNOPQRSTUVWRXYZ";

  return higher[Math.floor(Math.random() * higher.length)];
};

function randomNum() {

  var num = '0123456789';

  return num[Math.floor(Math.random() * num.length)];
};

function randomChar() {

  const ranChar = "`~!@#$%^&*()_+=-,./?[]{}|\<>'";

  return ranChar[Math.floor(Math.random() * ranChar.length)]; 
};

console.log(randomLower());
console.log(randomHigher());
console.log(randomNum());
console.log(randomChar());

// confirm or deny what functions to use "true or false" prompts 



// generator (function to run generator)

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
