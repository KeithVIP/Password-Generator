// Assignment Code
var generateBtn = document.querySelector("#generate");

var possibleCharacters = {
   numeric: "12345678910",
   lowercase: "abcdefghijklmnop",
   uppercase:  "ABCDEFGHIJKLMNOP",
   special: "!@#$%^&*"
 }



var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + min));


  return value;
};



// Write password to the #password input
function writePassword() {
  var possibleChars;

  var promptLength = window.prompt("Please enter 8 or 10 for password length");
  if (promptLength === "" || promptLength === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    // use return to call it again and stop the rest of this function from running
    promptLength = window.prompt("Please enter 8 or 10 for password length");
  }
  var promptNumerical = window.confirm("Do you want numerical characters?");
  var promptLower = window.confirm("Do you want lowercase characters?");
  var promptUpper = window.confirm("Do you want uppercase characters?");
  var promptSpecial = window.confirm("Do you want special characters?");


  if (promptNumerical) {
    possibleChars.concat(possibleCharacters.numeric);
    console.log(possibleChars);
  }
  if (promptLower) {
   possibleChars.concat(possibleCharacters.lowercase) 
   console.loc(possibleChars);
  }
  if (promptUpper) {
    possibleChars.concat(possibleCharacters.uppercase) 
    console.loc(possibleChars);
  }
  if (promptSpecial) {
    possibleChars.concat(possibleCharacters.special) 
    console.loc(possibleChars);
  }
    return;
  
  }


//I fixed this up for you, and put this separate displayPassword function definition here.
function displayPassword() {
  //step 1: take the value returned by writePassword, save into password (the local variable we create here.).
  var password = writePassword();

  //step 2: grab the HTML element with id = "password"
  var passwordText = document.querySelector("#password");

  //step 3: set its value to be that of our password variable.
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", displayPassword);