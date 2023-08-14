// Assignment Code
var userEnter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
//Set up criteria with legible values
// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Special characters 
character = ["!", "#", "$", "%", "&", "*", "+", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", " ^ ", "_", "{", "|", "}", "~"];
// Alphabetical characters
alphaL = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Space is for the Uppercase conversion
space = [];
// converts letters to uppercase 
var toUpper = function (x) {
  return x.toUpperCase();
};
// creates a variable for uppercase conversion
alphaU = alphaL.map(toUpper);

var userChoices;

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function(){
  password = writePassword();
  document.getElementById("password").placeholder = password;
});

function generatePassword(){
  console.log("You clicked the button!");
  //1. Prompt the user for the password criteria;
  userEnter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
  //   Validate the input;
  if(!userEnter){
    alert("This input needs a value !");
  } else if (userEnter < 8 || userEnter > 128){
    userEnter = parseInt(prompt("You must choose between 8 and 128"));
  } else{
    //Continue user input validation
    confirmNumber = confirm("will this contain Numbers?");
    confirmCharacter = confirm("Will this contain Special Characters?");
    confirmUppercase = confirm("Will this contain Uppercase Letters?");
    confirmLowercase = confirm("Will this contain Lowercase letters?");
  }
  //  Validate 4 user options failed
  if(!confirmNumber && !confirmCharacter && !confirmUppercase && !confirmLowercase){
    userChoices = alert("You must choose a criteria !");
  } 
   //  Validate 4 user options succeed
  else if(confirmNumber && confirmCharacter && confirmUppercase && confirmLowercase){
    userChoices = character.concat(number, character, alphaU, alphaL);
  } 
  // validate 3 user options succeed
  else if (confirmCharacter && confirmUppercase && confirmLowercase) {
    userChoices = character.concat(character, alphaU, alphaL);
  }
  else if (confirmNumber && confirmUppercase && confirmLowercase) {
    userChoices = character.concat(number, alphaU, alphaL);
  }
  else if (confirmNumber && confirmCharacter && confirmLowercase) {
    userChoices = character.concat(number, character, alphaL);
  }
  else if (confirmNumber && confirmCharacter && confirmUppercase) {
      choices = number.concat(number, character, alphaU);
  }
  // validate 2 user options succeed
  else if (confirmNumber && confirmCharacter) {
    userChoices = number.concat(character);

  } else if (confirmNumber && confirmUppercase) {
    userChoices = number.concat(alphaU);
  } 
  else if (confirmNumber && confirmLowercase) {
    userChoices = number.concat(alphaL);
  } 
  else if (confirmCharacter && confirmUppercase) {
    userChoices = character.concat(alphaU);
  } 
  else if (confirmCharacter && confirmLowercase) {
    userChoices = character.concat(alphaL);
  }
  else if (confirmUppercase && confirmLowercase) {
    userChoices = alphaU.concat(alphaL);
  }
  // Else if for 1 positive option
  else if (confirmNumber) {
    userChoices = number;
  }
  else if (confirmCharacter) {
    userChoices = character;
  }
  // Created space variable to fill uppercase conversion
  else if (confirmUppercase) {
    userChoices = alphaU;
  }
  else if (confirmLowercase) {
    userChoices = alphaL;
  }
  //Create an array to keep length of characters that user choosed 
  var password = [];
  // Random selection for all variables:
  for (var i=0; i<userEnter; i++) {
    var randomGenerate = userChoices[Math.floor(Math.random()*userChoices.length)];
    password.push(randomGenerate);
  }
  //   a. choose a length from 8 < 128 characters;
  //   b. whether or not to include lowercase, uppercase, numeric, and/or special characters;
  //2. Validate the input;
  //3. Generate password based on criteria;

  //4. Show password to the page;
  var password = password.join("");
  return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#showPassword");

  passwordText.value = password;

}




 