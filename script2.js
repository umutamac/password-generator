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
var chosenLength = prompt("Type in the length of the password you'd like (between 8 and 128)");
console.log("Chosen password length: " + chosenLength);

// Remind user to pick a number between 8 and 128
while (chosenLength < 8 || chosenLength > 128){
  chosenLength = prompt("Please make sure to type in a number between 8 and 128");
  console.log("Chosen password length: " + chosenLength);
}

// Choosing a char set based on user answers above
var charset = "abcdefghijklmnopqrstuvwxyz";
if (specialCharCheck == true){
    charset += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
}
if (numCheck == true){
    charset += "0123456789";
}
if (uppercaseCheck == true){
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}
console.log("charset to be used: " + charset);

// Generate the password
function generatePassword(charset, chosenLength){
  
  var generatedpwd = "";
    for (var i = 0; i < chosenLength; ++i) {
      generatedpwd += charset.charAt(Math.floor(Math.random()*chosenLength));
    }
    console.log("Password is: " + generatedpwd);
  return generatedpwd;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
