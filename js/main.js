
// Declarations and their values
let isInteger = false; //Control value for the while loop set to false
let maxNumber;
let fbResults = []; //Empty array used for later data to be placed into.
let fbText = (""); //Empty string used for later data to be placed into.

while (!isInteger) {
  
maxNumber = prompt("Enter a number (A n integer over zero):", 20);
 
// Turns a number from maxNumber prompt into an integer. Promps create strings. 
maxNumber = parseInt(maxNumber); 
  
// Conditional used to see if maxNumber is an integer that is suitable and greater than zero.
// The Number.isSafeInteger() method determines whether the provided value is a number that is a safe integer.
if (Number.isSafeInteger(maxNumber) && maxNumber > 0 ) {
     isInteger = true;
  } 
}

// For loop created to execute maxNumber of times
for (let i = 1; i <= maxNumber; i++) {

// % 15 used, because less that 20 (make number) and 3 and 5 divided by 15 have no remainder.  
  if (i % 15 === 0) {
      fbResults.push("FizzBuzz");  

// Same as above, % 3 and % 5 used because anything divisible by 3 or 5 has no remainder
    } else if (i % 3 === 0) {
      fbResults.push("Fizz");
    } else if (i % 5 === 0) {
     fbResults.push("Buzz"); 
    } else {
      fbResults.push(i); 
  }
}

for (let result of fbResults) {
  fbText = fbText + result + "\n";
}

// TODO: Use a `for ... of` loop to concatenate the values from `fbResults`
// into the variable `fbText`.


///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let numDisplay = document.querySelector("#max-number");
numDisplay.innerHTML = maxNumber;
let output = document.querySelector("#output");
output.innerHTML = fbText;
