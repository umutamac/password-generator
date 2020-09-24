// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Asking user if they want special chars, numbers, uppercase letters and how long of a password they want
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

//Create a char sets
var charset1 = "abcdefghijklmnopqrstuvwxyz"
var charset2 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
var charset3 = "abcdefghijklmnopqrstuvwxyz0123456789"
var charset4 = "abcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
var charset5 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
var charset6 = "abcdefghijklmnopqrstuvwxyz0123456789!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
var charset7 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
var charset8 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@[]^_`{|}~"

// Choose a char set based on user answers above
if (specialCharCheck == false && numCheck == false && uppercaseCheck == false){
  charset = charset1;
} else if (specialCharCheck == false && numCheck == false && uppercaseCheck == true){
  charset = charset2;
} else if (specialCharCheck == false && numCheck == true && uppercaseCheck == false){
  charset = charset3;
} else if (specialCharCheck == true && numCheck == false && uppercaseCheck == false){
  charset = charset4;
} else if (specialCharCheck == false && numCheck == true && uppercaseCheck == true){
  charset = charset5;
} else if (specialCharCheck == true && numCheck == true && uppercaseCheck == false){
  charset = charset6;
} else if (specialCharCheck == true && numCheck == false && uppercaseCheck == true){
  charset = charset7;
} else {
  charset = charset8;
}

// Generate the password
function generatePassword(){
  
var retVal = "";

  for (var i = 0, n = charset.passwordLength; i < passwordLength; ++i) {
    retVal += charset.charAt(Math.round(Math.random() * n));
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
