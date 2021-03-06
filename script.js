// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Password generation function

function generatePassword() {
  var numbersString = "0123456789"; //string containing numbers characters
  var lowerCaseString = "abcdefghijklmnopqrstuvwxyz"; // string containing lower case alphabet characters
  var specialCharactersString = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~"; // string containing special characters
  var validString = ""; //variable to hold selected characters as per user criteria
  var password = ""; //variable to hold generated password
  var passwordLength = 0; // password length
  var numbers = false; // boolean indicating the inclusion of numbers in password
  var lowerCase = false; // boolean indicating the inclusion of lower case characters in password
  var upperCase = false; // boolean indicating the inclusion of upper case characters in password
  var specialCharacters = false; // // boolean indicating the special characters in password

  alert(
    "Please select the password generation criteria using the next prompts"
  );

  // prompt user to enter the required password length

  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(
      prompt("please enter a valid number from 8 to 128 characters"),
      10
    );
  }

  // prompt user to select the required character types to be included in the password.

  while (!(numbers || lowerCase || upperCase || specialCharacters)) {
    alert("Please select at least one criteria");
    numbers = confirm("Do you want the password to include numbers ?");
    lowerCase = confirm(
      "Do you want the password to include lower case characters ?"
    );
    upperCase = confirm(
      "Do you want the password to include upper case characters ?"
    );
    specialCharacters = confirm(
      "Do you want the password to include special characters ?"
    );
  }

  // Build valid string of characters according to selected criteria

  validString = numbers ? validString + numbersString : validString;
  validString = lowerCase ? validString + lowerCaseString : validString;
  validString = upperCase
    ? validString + lowerCaseString.toUpperCase()
    : validString;
  validString = specialCharacters
    ? validString + specialCharactersString
    : validString;

  // Randomly select characters from valid string to generate password.

  for (var i = 0; i < passwordLength; i++) {
    randomCharacterIndex = Math.floor(Math.random() * validString.length);
    password = password + validString[randomCharacterIndex];
  }
  return password;
}
