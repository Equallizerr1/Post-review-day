const countPresent = require("./countPresent");

describe("count present", () => {
	test("should return a number", () => {
		const count = countPresent("string", []);
		expect(typeof count).toBe("number");
	});
	test("should return 0 when given an empty array", () => {
		const count = countPresent("string", []);
		expect(count).toEqual(0);
	});
	test("should return 1 when one match is found in an array length of 1", () => {
		const count = countPresent("gundam", ["gundam"]);
		expect(count).toEqual(1);
	});
	test("should return 1 when one match is found in an array length of more than 1", () => {
		const count2 = countPresent("gundam", ["gundam", "football"]);
		expect(count2).toEqual(1);
	});
	test("should return number of matches when more than one match is found", () => {
		const count = countPresent("gundam", [
			"boat",
			"gundam",
			"gundam",
			"bike",
			"bike",
		]);
		expect(count).toEqual(2);
	});
	test("should return number of matches when arrays are nested", () => {
		const count = countPresent("gundam", ["boat", ["gundam"], "gundam"]);
		expect(count).toEqual(2);
	});
	test("should return number of matches when arrays are nested multiple times", () => {
		const count = countPresent("gundam", [
			["boat", ["gundam"], "gundam"],
			["gundam"],
			"gundam",
		]);
		expect(count).toEqual(4);
	});
});
