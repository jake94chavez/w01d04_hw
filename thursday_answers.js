/////////////////////////
/////// Homework 4///////
/////////////////////////

//Functions

/* 2. A parameter refers to the function setup and the argument refers to when
the function is called. They are sometimes used interchangably.

3. Return ends the function and stores the value while console.log just logs the
value to the console. */

// Palindrome

const checkPalindrome = (str) => {
	if (str.toLowerCase() === str.toLowerCase().split("").reverse().join("")) {
		return true;
	}
	return false;
}
console.log(checkPalindrome("Tacocat"));
console.log(checkPalindrome("Banana"));

// Digit Sum

const sumDigits = (num) => {
	let sum = 0;
	let add = num.toString().split("");
	for (let i = 0; i < add.length; i++) {
		sum += Number(add[i]);
	}
	return sum;
}
console.log(sumDigits(48));
console.log(sumDigits(18));

// Pythagoras

const calculateSide = (sideA, sideB) => {
	sideC = ((sideA ** 2) + (sideB ** 2))
	return Math.sqrt(sideC)
}

console.log(calculateSide(8,6));
console.log(calculateSide(4,3));