// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

var specialCharCheck = confirm("Would you like to include special characters?");
console.log("Include Special Characters: " + specialCharCheck);
var numCheck = confirm("Would you like to include numbers?");
console.log("Include Numbers: " + numCheck);
var uppercaseCheck = confirm("Would you like to include uppercase letters?");
console.log("Include Uppercase Letters: " + uppercaseCheck);

var passwordLength = prompt("Type in the length of the password you'd like (between 8 and 128)");
console.log("Chosen password length: " + passwordLength);
while (passwordLength < 8 || passwordLength > 128){
  passwordLength = prompt("Please make sure to type in a number between 8 and 128");
  console.log("Chosen password length: " + passwordLength);
}


function generatePassword(specialCharCheck, numCheck, uppercaseCheck, passwordLength){
  Math.random()*(passwordLength+1);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
