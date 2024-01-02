const add = (a, b) => a + b;
console.log(add(1, 2));

function add2(a, b) {
	return a + b;
}
console.log(add2(1, 2));

// partialApply(targetFunction: Function, ...fixedArgs: Any[]) =>
//   functionWithFewerParams(...remainingArgs: Any[])

const partialApply = (fn, ...fixedArgs) => {
	return function (...remainingArgs) {
		return fn.apply(this, fixedArgs.concat(remainingArgs));
	};
};

const add10 = partialApply(add, 10);
console.log(add10(5));

function partialApply2(fn2, ...fixedArgs2) {
	return function (...remainingArgs2) {
		return fn2.apply(this, fixedArgs2.concat(remainingArgs2));
	};
}
const add5 = partialApply2(add2, 0);
console.log(add5(5));

let x = 10;

function foo() {
	let y = 20; // free variable
	function bar() {
		let z = 15; // free variable
		return x + y + z;
	}
	return bar;
}

let test = foo();

test(); // 45
console.log(test());

const result = [];

for (var i = 0; i < 5; i++) {
	result[i] = function () {
		console.log(i);
	};
}

result[0](); // 5, expected 0
result[1](); // 5, expected 1
result[2](); // 5, expected 2
result[3](); // 5, expected 3
result[4](); // 5, expected 4

const result2 = [];

for (var i = 0; i < 5; i++) {
	result2[i] = (function inner(x) {
		// additional enclosing context
		return function () {
			console.log(x);
		};
	})(i);
}

result2[0](); // 0, expected 0
result2[1](); // 1, expected 1
result2[2](); // 2, expected 2
result2[3](); // 3, expected 3
result2[4](); // 4, expected 4

var result3 = [];

for (let i = 0; i < 5; i++) {
	result3[i] = function () {
		console.log(i);
	};
}

result3[0](); // 0, expected 0
result3[1](); // 1, expected 1
result3[2](); // 2, expected 2
result3[3](); // 3, expected 3
result3[4](); // 4, expected 4

function iCantThinkOfAName(num, obj) {
	// num, obj come from - iCantThinkOfAName(2, referenceObject) line 110 & 111

	// This array variable, along with the 2 parameters passed in,
	// are 'captured' by the nested function 'doSomething'
	const array = [1, 2, 3];
	console.log(num, obj);
	function doSomething(i) {
		//  ^ i comes from - foo(2) , foo(4) line 114 & 131
		console.log(num, i, obj);
		num += i;
		array.push(num);
		console.log("num: " + num);
		console.log("array: " + array);
		console.log("obj.value: " + obj.value);
	}
	return doSomething;
}

var referenceObject = { value: 10 };
var foo = iCantThinkOfAName(2, referenceObject); // closure #1
var bar = iCantThinkOfAName(6, referenceObject); // closure #2
//         ^ iCantThinkOfAName(num, obj)

foo(2);
// ^ doSomething(i)
/*
  num: 4
  array: 1,2,3,4
  obj.value: 10
*/

bar(2);
/*
  num: 8
  array: 1,2,3,8
  obj.value: 10
*/

referenceObject.value++;

foo(4);
/*
  num: 8
  array: 1,2,3,4,8
  obj.value: 11
*/

bar(4);
/*
  num: 12
  array: 1,2,3,8,12
  obj.value: 11
*/

// Take a number (representing a multiple) as an argument.
// Return a new function.

// The new function should:
// Take a number to determine how long the list of multiples should be.
// Return an array containing a list of multiples.

// create a HOF
// input a number
// output a function
function outer(num = 2) {
	function inner(numOfMultiples = 3) {
		const multiples = [];
		for (let i = 1; i <= numOfMultiples; i++) {
			multiples.push(num * i);
			console.log(multiples);
		}
		return multiples;
	}
	return inner;
}

console.log(outer(2)());
// input for the inner different number to determine how long the list of multiples should be.
// output an array containing a list of multiples.
// create output from input

// [2,4,6]
