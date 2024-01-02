let myName = "Kyle";

function printName() {
	console.log(myName);
}

myName = "Joey";

printName();

myName = "Kate";

printName();

function outerFunction(outerVariable) {
	return function innerFunction(innerVariable) {
		console.log("Outer Variable: " + outerVariable);
		console.log("Inner Variable: " + innerVariable);
	};
}

const newFunction = outerFunction("outside");
newFunction("inside");
//console.log(outerVariable);

// In this way incrementCounter is a misnomer as its return value is always fixed as 1.
//It would be desirable to have a function that would instead return consecutive numbers on each successive call.
function incrementCounter() {
	let count = 0;
	return ++count;
}

incrementCounter();
incrementCounter();
console.log(incrementCounter()); // 1

// Returning functions
//this example only increments once
function makeCounter() {
	function innerCounter() {
		let count = 0;
		console.log(count);
		return ++count;
	}
	return innerCounter;
}

const counter = makeCounter();
counter();
counter();
console.log(counter());
console.log(counter());

// this example will increment multiple times - count variable moved to outer scope
function makeCounter2() {
	let count = 0;
	function innerCounter2() {
		console.log(count);
		return ++count;
	}
	return innerCounter2;
}

const counter2 = makeCounter2();
counter2();
counter2();
console.log(counter2());
console.log(counter2());


const add = (a, b) => a + b;

function createLimitedFunc(func, maxCalls) {
	function limitedFunc(a, b) {
		return func(a, b);
	}
	return limitedFunc;
}
const add3TimesOnly = createLimitedFunc(add, 3);

add3TimesOnly(10, 32);
add3TimesOnly(4, 20);
add3TimesOnly(50, 100);
add3TimesOnly(34, 17);
