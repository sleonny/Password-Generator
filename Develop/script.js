// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword () {
<<<<<<< HEAD
  var length = prompt("How long do you want your password to be?  Sorry, we can only do between 8 - 128 characters (ツ)_/¯");
  //Looked up how to get javascript to ask for an answer and found prompt command.  
  if (isNaN(length) || length < 8 || length > 128) {
    //isNaN checks if what's entered is a number and returns boolean.  The rest will return boolean and if any are true return the alert.  || means just one needs to be true to return true
=======
  var length = prompt("How long do you want your password to be?  Sorry, we can only do between 8 - 128 characters ¯\_(ツ)_/¯");
  //Looked up how to get javascript to ask for an answer and found prompt command.  
  if (isNaN(length) || length < 8 || length > 128) {
    //isNaN checks if what's entered is a number.  The rest will return boolean and if any are true return the alert.  || means just one needs to be true to return true
>>>>>>> c52525e9fcb4100a7d545962f54a563e9df751e3
    alert("Really?  C'mon...");
    //Looked up how to get user to input valid number if they didn't orginally and used built in function alert 
    return "...";
    console.log("How many? " + length);
    //console.log to see that the code is working.  Will probably end up doing this with each var
  }
  }
  
<<<<<<< HEAD
var lowercase = confirm("would you like lowercase letters in the password?");
var UPPERCASE = confirm("WOULD YOU LIKE UPPERCASE LETTERS IN THE PASSWORD?");
var numsnums = confirm("How about some numbers in the password?");
var specchar = confirm("&ny speci@l character$ in the p@$$word?");







=======
>>>>>>> c52525e9fcb4100a7d545962f54a563e9df751e3

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
