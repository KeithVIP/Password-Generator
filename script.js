
var generateBtn = document.querySelector("#generate");

var possibleCharacters = {
  numeric: "12345678910",
  lowercase: "abcdefghijklmnop",
  uppercase: "ABCDEFGHIJKLMNOP",
  special: "!@#$%^&*"
}

var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + min));

  return value;
};

function writePassword() {
  var possibleChars = "";
  var finalPassword = ""

  var promptLength = window.prompt("Please enter 8 or 128 for password length");
  if (promptLength === "" || promptLength === null) {
    window.alert("You need to provide a valid answer! Please try again.");
  }

  var promptNumerical = window.confirm("Do you want numerical characters?");
  var promptLower = window.confirm("Do you want lowercase characters?");
  var promptUpper = window.confirm("Do you want uppercase characters?");
  var promptSpecial = window.confirm("Do you want special characters?");

  if (promptLength) {
    possibleChars = (8, 128)
    console.log(possibleChars);

  }
  if (promptNumerical) {
    possibleChars += possibleCharacters.numeric
    console.log(possibleChars);
  }
  if (promptLower) {
    possibleChars += possibleCharacters.lowercase
    console.log(possibleChars);
  }
  if (promptUpper) {
    possibleChars += possibleCharacters.uppercase
    console.log(possibleChars);
  }
  if (promptSpecial) {
    possibleChars += possibleCharacters.special
    console.log(possibleChars);
  }

  for (i = 0; i < promptLength; i++) {
    finalPassword += possibleChars[Math.floor(Math.random() * possibleChars.length)]
  }
  return finalPassword;
}

function displayPassword() {

  var password = writePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", displayPassword);