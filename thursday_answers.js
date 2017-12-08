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

// Sum Array

const sumArray = (array) => {
	let sum = 0;''
	for (let i = 0; i < array.length; i++) {
		sum += array[i];
	}
	return sum;
}

console.log(sumArray([1, 2, 3, 4, 5, 6]));

// Prime Numbers

/*const checkPrime = (num1) => {
	for (let i=2; i <= Math.sqrt(num1); i++) {
		if (num1 % i === 0) {
			return false
		}
	}
	return true
}

console.log(checkPrime(17));
console.log(checkPrime(8));
console.log(checkPrime(9));
console.log(checkPrime(997));

const printPrimes = (given) => {
	let primes = [];
	for (let i=1; i <= given; i++) {
		if (checkPrime(i)) {
			primes.push(i);
		}
	}
	console.log(primes);
}

printPrimes(91);

Ok I think this one works now but I tested it 3 seperate
times and my computer started working very hard and didn't finish
testing so I am going to have to be unsure so testing doesn't make my
computer explode */

