const lowerLetter = "abcdefghijklmnopqrstuvwrxyz";
const higherLetter = "ABCDEFGHIJKLMNOPQRSTUVWRXYZ";
const num = '0123456789';
const ranChar = "`~!@#$%^&*()_+=-,./?[]{}|\<>'";

var passwordLength = "";
var pwd= "";


//  function to use "true or false" prompts that provide char types selected
var randomizePassword = function(){

  var options = "";

  var lowerAbc = confirm("Do you want your password to include lowercase letters?");
  var higherAbc = confirm("Do you want your password to include highercase letters?");
  var numbers = confirm("Do you want your password to include numbers?");
  var specialChar = confirm("Do you want your password to include special characters?");

  // checks if any confirm returns true
  if (lowerAbc || higherAbc || numbers || specialChar) {

    // checks if lowerAbc returns true and stores it in options
    if (lowerAbc) {

      options = options + lowerLetter
    } 

    // checks if higherAbc returns true and stores it in options
    if (higherAbc) {  
      
      options = options + higherLetter
    }

    // checks if numbers returns true and stores it in options
    if (numbers) {
      
      options = options + num

    }

    // checks if Special returns true and stores it in options
    if (specialChar) {
      
      options = options + ranChar

    }
    //randomizes options string
    for (var i = 0; i <= passwordLength; i++) {

      pwd = pwd + options.charAt(Math.floor((Math.random() * options.length)));

    }
    
    return pwd;
    
  } else {

    // if all confirms are false prompts to pick at least one
    alert("Please select at least one option");
    randomizePassword();
  }

};


// generator (function to run generator) that prompts length of password
 var generatePassword = function() {

  passwordLength = prompt("Please choose a character length between 8 and 128");

  if(passwordLength >= 8 && passwordLength <= 128) {

    randomizePassword();

    return pwd;

   } else {

     alert("Please pick a character length between 8-128");

     generatePassword();
   }
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  pwd = '';
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
