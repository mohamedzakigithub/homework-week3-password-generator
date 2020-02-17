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
  var numbersString = "0123456789";
  var lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
  var specialCharactersString = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var validString = "";
  var password = "";
  var passwordLength = 0;
  var numbers = false;
  var lowerCase = false;
  var upperCase = false;
  var specialCharacters = false;

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

  if (numbers) {
    validString = validString + numbersString;
  }
  if (lowerCase) {
    validString = validString + lowerCaseString;
  }
  if (upperCase) {
    validString = validString + lowerCaseString.toUpperCase();
  }
  if (specialCharacters) {
    validString = validString + specialCharactersString;
  }

  // Randomly select characters from valid string to generate password.

  for (var i = 0; i < passwordLength; i++) {
    randomCharacterIndex = Math.floor(Math.random() * validString.length);
    password = password + validString[randomCharacterIndex];
  }
  return password;
}
