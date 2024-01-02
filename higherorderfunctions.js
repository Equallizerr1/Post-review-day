function copyArrayAndDoStuff(list, instructions) {
	// list = nums from test
	// instructions = doubleNum from test
	console.log(list, instructions);
	const output = [];

	for (let i = 0; i < list.length; i++) {
		output.push(instructions(list[i]));
	}

	return output;
}

const nums2 = [1, 2, 3]; // passed in as list2
const doubleNum2 = (num2) => num2 * 2; // passed in as instructions2

function copyArrayAndDoStuff2(list2, instructions2) {

	console.log(list2, instructions2);
	const output2 = [];

	for (let i = 0; i < list2.length; i++) {
		output2.push(instructions2(list2[i]));
	}

	return output2;
}

console.log(copyArrayAndDoStuff2(nums2, doubleNum2));

module.exports = copyArrayAndDoStuff;
