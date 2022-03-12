// Assignment Code
var generateBtn = document.querySelector("#generate");

var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min) + min);
  

  return value;
};

// Write password to the #password input
function writePassword() {
  window.alert("Generate Password?");

  var promptNumerical = window.prompt("Do you want numerical characters? Please enter Yes or No.");

  if (promptNumerical === "" || promptNumerical === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    // use return to call it again and stop the rest of this function from running
    return writePassword();
  }
  promptNumerical = promptNumerical.toLowerCase();

  if (promptNumerical === "no") {
    window.alert("Numeric Values Omitted");
    // subtract numeric values
    
  }

    if (promptNumerical === "yes") {
      window.alert("Numeric Values Added");
      // add numeric values
    
  };
    

  var promptText = window.prompt("Do you want text characters? Please enter Yes or No.");

  if (promptText === "" || promptText === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    // use return to call it again and stop the rest of this function from running
    return writePassword();
  }

  promptText = promptText.toLowerCase();
  

  if (promptText === "no") {
    window.alert("Text Values Omitted");
    // subtract text values
    
  }

    if (promptNumerical === "yes") {
      window.alert("Text Values Added");
      // add text values
      
  };

  var promptCharacters = window.prompt("Do you want specials characters? Please enter Yes or No.");

  if (promptCharacters === "" || promptCharacters === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    // use return to call it again and stop the rest of this function from running
    return writePassword();
  }
  
  promptCharacters = promptCharacters.toLowerCase();

  if (promptCharacters === "no") {
    window.alert("Character Values Omitted");
    // subtract characters values
    
  }

    if (promptCharacters === "yes") {
      window.alert("Character Values Added");
      // add character values
    
  };

  var promptCharacterlength = window.prompt("Enter 8 or 10 to choose character length.");

if (promptCharacterlength === "8") {
  var password = randomNumber(8);
}
if (promptCharacterlength === "10") {
  var password = randomNumber(10);
}
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
