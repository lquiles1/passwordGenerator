// Assignment Code
let generateBtn = document.querySelector("#generate");

//generate random number
function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.'
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function getRandomUpper() {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return upper[Math.floor(Math.random() * upper.length)];
}

function getRandomLower() {
  const lower = 'abcdefghijkmnlopqrstuvwxyz'
  return lower[Math.floor(Math.random() * lower.length)];
}

function getRandomNumber() {
  const number = '0123456789'
  return number[Math.floor(Math.random() * number.length)];
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  let upper = document.getElementById("uppercase");
  let lower = document.getElementById("lowercase");
  let number = document.getElementById("numbers");
  let symbol = document.getElementById("symbols");
  let lengthP = document.getElementById("length");
  let passwordArr = [];

  if (upper.checked) {
    passwordArr.push(getRandomUpper());
  }
  if (lower.checked) {
    passwordArr.push(getRandomLower());
  }
  if (number.checked) {
    passwordArr.push(getRandomNumber());
  }
  if (symbol.checked) {
    passwordArr.push(getRandomSymbol());
  }

  let finalPassword = '';

  for (let i = 0; i < lengthP.value; i++) {
    let character = Math.floor(Math.random() * passwordArr.length);
    finalPassword += passwordArr[character];
  }

  return finalPassword;
}

// prompt password setting for user 
function settings() {
  let visible = document.getElementById('settings');

  if (visible.style.display === "none") {
    visible.style.display = "block";
  } else {
    visible.style.display = "none";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", settings);
generateBtn.addEventListener("click", writePassword);