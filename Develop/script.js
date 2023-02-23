// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword () {

   var length = prompt("How long do you want your password to be?  Sorry, we can only do between 8 - 128 characters ¯\_(ツ)_/¯");
    //Looked up how to get javascript to ask for an answer and found prompt command.  
  if (isNaN(length) || length < 8 || length > 128) {

    //isNaN checks if what's entered is a number and returns boolean.  The rest will return boolean and if any are true return the alert.  || means just one needs to be true to return true

    //isNaN checks if what's entered is a number.  The rest will return boolean and if any are true return the alert.  || means just one needs to be true to return true


    alert("Really?  C'mon...");
    //Looked up how to get user to input valid number if they didn't orginally and used built in function alert 
    return "...";
    console.log("How many? " + length);
    //console.log to see that the code is working.  Will probably end up doing this with each var
  }
  

 
  var lowercase = false;
  var UPPERCASE = false;
  var numsnums = false;
  var specchar = false;

    while (!lowercase && !UPPERCASE && !numsnums && !specchar) {

  //It occured to me that nothing would happen when reaching the alert to pick at least one.  That it wouldn't go back to the beginning.
  //I researched how to do this and learned about the while function.  While any confirm for a variable remains untrue it will keep 
  //asking for conformation.  The values need to be defaulted to false above to keep asking as long as not one is selected as true.



var lowercase = confirm("would you like lowercase letters in the password?");
console.log("Wants lowercase? " + lowercase);
var UPPERCASE = confirm("WOULD YOU LIKE UPPERCASE LETTERS IN THE PASSWORD?");
console.log("WANTS UPPERCASE? " + UPPERCASE);
var numsnums = confirm("How about some numbers in the password?");
console.log("Wants numbers? " + numsnums);
var specchar = confirm("&ny speci@l character$ in the p@$$word?");
console.log("Wants special characters? " + specchar);

//Declared a variable with a boolean return for each kind of character they may want in the password
//console.log to see that the confirm in fact returns the boolean value


if (!lowercase && !UPPERCASE && !numsnums && !specchar) {
  alert("You gotta pick at least one...");
}
 //This should check to make sure that they selected at least one kind of character otherwise it alerts them
}

var chars = ""
if (lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
if (UPPERCASE) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
if (numsnums) chars += "0123456789";
if (specchar) chars += "!@#$%^&*()"

var password = "";
  for (var i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return password;
}
//This is declaring a variable of chars.  Then it defines what child of chars can be.  
//Next we declare a variable of password.  
//Then we create a for loop that will add characters until it gets to the # of characters selected.
//Then javascript does some built in functions now with
//charAt which returns a string value for the upper and lowercase letters
//floor which rounds down to a whole integer
//random which does random math to the characters to get values


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);