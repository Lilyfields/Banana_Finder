
// communicating with DOM
var passwordEl = document.getElementById('password');
var lengthEl = document.getElementById('length');
var upperCaseEl = document.getElementById('uppercase');
var lowerCaseEl = document.getElementById('lowercase');
var numberEl = document.getElementById ('number');
var symbolEl = document.getElementById ('symbol');
var generateEl = document.getElementById ('generate');

//Declared constant object which can store the random value

const randomFunc = {
  upper: getRandomUpper,
  lower: getRandomLower,
  number: getRandomNumbers,
  symbol: getRandomSymbols,

}
//Achieved when cirlce button is clicked on. The end user can choose whether they want to include either numbers, letters (both upper and lower case), or symbols in their password.
//Set as default to include all letters (both uper and lowercase), numbers, and symbols. 
//End user can also select the length or number of characters they need in thier password.

generateEl.addEventListener('click', () => {
  const length = +lengthEl.value;
  const hasUpper = upperCaseEl.checked;
  const hasLower = lowerCaseEl.checked;
  const hasNumber = numberEl.checked;
  const hasSymbol = symbolEl.checked;

  passwordEl.innerText =generatedPassword(hasUpper, hasLower,hasNumber,hasSymbol, length);
});

function generatedPassword(upper, lower, number, symbol, length) {
  var generatedPassword = "";
  const typesCount = upper + lower + number + symbol;
  const typesArr = [{lower},{upper},{number},{symbol}].filter(item =>
    Object.values(item)[0]);

    if(typesCount== 0){
      return 'Select at least 1 option';
    }else if (typesCount == upper) {
      return 'alert'
      }
    }

    

      for(var i=0; i<length; i+=typesCount) {
        typesArr.forEach(types => {
       const funcName = Object.keys(types)[0];
        generatedPassword += randomFunc[funcName]();
    });
}
{
const finalPassword = generatedPassword.slice(0,length);
  return finalPassword;
}




function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random()*26) + 97);

}

// id uppercase
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random()*26) + 65);
}

//id lowercase

function getRandomNumbers() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  
}

//id numbers

function getRandomSymbols() {
  const symbol = '!@#$%^&*(){}[]+<>/?,.=';
  return symbol[Math.floor(Math.random() *symbol.length)];
}

//id symbols

//id generate
