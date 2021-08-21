// when password is generated it is displayed written to page

// functions built for random char types (lowercase, uppercase, numeric, and/or special characters) 
function randomLower() {

  var lowerLetter = "abcdefghijklmnopqrstuvwrxyz";

  return lowerLetter[Math.floor(Math.random() * lowerLetter.length)];
};

function randomHigher() {

  var higherLetter = "ABCDEFGHIJKLMNOPQRSTUVWRXYZ";

  return higherLetter[Math.floor(Math.random() * higherLetter.length)];
};

function randomNum() {

  var num = '0123456789';

  return num[Math.floor(Math.random() * num.length)];
};

function randomChar() {

  var ranChar = "`~!@#$%^&*()_+=-,./?[]{}|\<>'";

  return ranChar[Math.floor(Math.random() * ranChar.length)];
};


//  function to use "true or false" prompts that provide char types selected
function randomizePassword(){

  var lowerAbc = confirm("Do you want your password to include lowercase letters?");
  var higherAbc = confirm("Do you want your password to include highercase letters?");
  var numbers = confirm("Do you want your password to include numbers?");
  var specialChar = confirm("Do you want your password to include special characters?");

  
  

    if (lowerAbc && higherAbc && numbers && specialChar) {

      console.log("You picked all options");

      
    } else if (lowerAbc && numbers && specialChar){

      console.log("1 3 4");


    } else if (higherAbc && numbers && specialChar) {

      console.log("234");


    } else if (lowerAbc && higherAbc && numbers) {

      console.log("123");

    } else if (lowerAbc && higherAbc && specialChar) {

      console.log("124");

    } else if(lowerAbc && higherAbc) {

      console.log("You picked the first two options");

  
     } else if (lowerAbc && numbers) {

      console.log("1 and 3");

      
    } else if (lowerAbc && specialChar ){
      console.log("1 and 4");

      
    } else if (higherAbc && numbers) {
      console.log("2 and 3");


    } else if (higherAbc && specialChar) {
      console.log("2 and 4");

    } else if (lowerAbc) {
      console.log("1");


    } else if (higherAbc) {
      console.log("2");


    } else if (numbers) {
      console.log("3");



    } else if (specialChar) {
      console.log("4");


    } else {

      alert("Please choose at least one option");
      randomizePassword();
    }

};


// generator (function to run generator) that prompts length of password
 function generatePassword() {

  var passwordLength = prompt("Please choose a character length between 8 and 128");

  if(passwordLength >= 8 && passwordLength <= 128) {

    randomizePassword();

   } else {

     alert("Please pick a character length between 8-128");

     generatePassword();
   }
};


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
