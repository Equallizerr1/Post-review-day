const copyArrayAndDoStuff = require("./higherorderfunctions");

describe("Higher order testing", () => {
	test("instruction return values are pushed to the new array", () => {
		// arrange
		const nums = [1, 2, 3]; // passed in as list
		const doubleNum = (num) => num * 2; // passed in as instructions
		// act
		const actual = copyArrayAndDoStuff(nums, doubleNum);
		// assert
		const expected = [2, 4, 6];
		expect(actual).toEqual(expected);
	});
});
