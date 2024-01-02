// not recursive
function countDown(n) {
	// breakout statement
	for (let i = n; i > 0; i--) {
		console.log(i);
	}
	console.log("Hooray");
}

countDown(3);

// recursive
function countDownRecursive(n) {
	// breakout statement
	if (n <= 0) {
		console.log("Hooray");
		return;
	}
	console.log(n);
	countDownRecursive(n - 1);
}

//countDownRecursive(3);
//   countDownRecursive(2)
//      countDownRecursive(1)
//          countDownRecursive(0)
//             return
//         return
//    return
//return

function sumRange(n) {
	let total = 0;
	for (let i = n; i > 0; i--) {
		total += i;
	}
	return total;
}

sumRange(3);
console.log(sumRange(3));

// any variable set in a recursive function is only available to that one single version of the recursive function
//not to all of them
// so we need to pass the total value to all of our different recursive functions
//by default we want it set to 0
function sumRangeRecursive(n, total = 0) {
	if (n <= 0) {
		return total;
	}
	return sumRangeRecursive(n - 1, total + n);
}

sumRangeRecursive(3, 0);
console.log(sumRangeRecursive(3, 0));

//sumRangeRecursive(3, 0)
//  sumRangeRecursive(2, 3)
//      sumRangeRecursive(1, 5)
//          sumRangeRecursive(0, 6)
//             return 6
//         return 6
//    return 6
//return 6

const tree = {
	name: "John",
	children: [
		{
			name: "Jim",
			children: [],
		},
		{
			name: "Zoe",
			children: [
				{ name: "Kyle", children: [] },
				{ name: " Sophia", children: [] },
			],
		},
	],
};

function printChildren(t) {
	// ???
}

function printChildrenRecursive(t) {
	if (t.children.length === 0) {
		return;
	}
	t.children.forEach((child) => {
		console.log(child.name);
		printChildrenRecursive(child);
	});
}

printChildrenRecursive(tree);

// printChildrenRecursive('John')
//      printChildrenRecursive('Jim')
//      return
//      printChildrenRecursive('Zoe')
//          printChildrenRecursive('Kyle')
//          return
//          printChildrenRecursive('Sophia')
//          return
//      return
//  return
