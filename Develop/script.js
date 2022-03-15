// Assignment Code
var generateBtn = document.querySelector("#generate");

var possibleCharacters = {
  promptLength: "8,10",
  promptNumerical: "1,2,3,4,5,6,7,8,9,10",
  prompText: "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p",
  promptCharacters: "!,@,#,$,%,^,&,*"
}


var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + min));


  return value;
};



// Write password to the #password input
function writePassword() {
  window.alert("Generate Password?");
  var possibleChars = [];

  var promptLength = window.prompt("Please enter 8 or 10 for password length");
  if (promptLength === "" || promptLength === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    // use return to call it again and stop the rest of this function from running
    return writePassword();
  }
  promptLength = promptLength.toLowerCase();
  
  if (promptLength === "no") {
    window.alert("Text Values Omitted");
     //no need to subtract from the array, since it started off emptyu.
  }
  if (promptLength === "yes") {
    window.alert("Text Values Added");
    possibleChars.push(possibleCharacters.promptLength);
    for(var i =0; i = promptLength.length; i++) {
      console.log(promptLength[i])
    }
   //here we add something into the array.
  };

  var promptNumerical = window.prompt("Do you want numerical characters? Please enter Yes or No.");

  if (possibleChars === "" || possibleChars === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    
    return writePassword();
  }
  promptNumerical = promptNumerical.toLowerCase();

  if (promptNumerical === "no") {
    window.alert("Numeric Values Omitted");
    

  }

  if (promptNumerical === "yes") {
    window.alert("Numeric Values Added");
    possibleChars.push(possibleCharacters.promptNumerical)
  };

  var promptText = window.prompt("Do you want text characters? Please enter Yes or No.");

  if (promptText === "" || promptText === null) {
    window.alert("You need to provide a valid answer! Please try again.");
   
    return writePassword();
  }
  promptText = promptText.toLowerCase();

  if (promptText === "no") {
    window.alert("Text Values Omitted"); 
  }
  if (promptText === "yes") {
    window.alert("Text Values Added");
    possibleChars.push(possibleCharacters.prompText)
  };

  var promptCharacters = window.prompt("Do you want specials characters? Please enter Yes or No.");

  if (promptCharacters === "" || promptCharacters === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    
    return writePassword();
  }

  promptCharacters = promptCharacters.toLowerCase();

  if (promptCharacters === "no") {
    window.alert("Character Values Omitted");
   

  }

  if (promptCharacters === "yes") {
    window.alert("Character Values Added");
    possibleChars.push(possibleCharacters.promptCharacters)

    return possibleCharacters();
  
  }
};


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