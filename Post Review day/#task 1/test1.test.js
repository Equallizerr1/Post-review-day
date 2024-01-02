const processPresentRequest = require("./processPresentRequest();");

// This function should take a string as its argument and return an object with some information about the request attached

// Requests should always start with Dear <name of recipient>, The presents requested should always follow a semi-colon : and the end of the list should end with a full stop . which will then sign off with From <name of sender>

describe("Process Present Request", () => {
	// simpler check typeof object before empty
	it("should return an empty Object", () => {
		const string = "";
		const output = processPresentRequest(string);
		const newObj = {};
		expect(output).toEqual(newObj);
		// expect(output).not.toBe(newObj);
	});
	// may not fail
	it("should return a new Object", () => {
		const string = "";
		const output = processPresentRequest(string);
		const newObj = {};
		expect(output).not.toBe(processPresentRequest(string));
		// expect(output).toEqual(newObj);
	});
	test("new Object should have properties attached", () => {
		const string = " ";
		const output = processPresentRequest(string);
		const output = {
			to: "",
			from: "",
			presents: [],
			presentTotal: 0,
		};
		expect(output).toEqual(output);
	});
	// don't test all properties when only testing one
	test("new Object should have key value pair of to: 'recipient'", () => {
		const request = "Dear Mrs Clause,";
		const request2 = "Dear Santa, ";
		const output = processPresentRequest(request);
		const output2 = processPresentRequest(request2);
		const output = {
			to: "Mrs Clause",
		};
		const output2 = {
			to: "Santa",
		};
		expect(output.to).toEqual(output.to);
		expect(output2.to).toEqual(output2.to);
	});
	test("new Object should have key value pair of from: 'sender'", () => {
		const request = "Dear Santa, From Jim";
		const request2 = "Dear Mrs Clause, From Julie";
		const output = processPresentRequest(request);
		const output2 = processPresentRequest(request2);
		const output = {
			to: "Santa",
			from: "Jim",
			presents: [],
			presentTotal: 0,
		};
		const output2 = {
			to: "Mrs Clause",
			from: "Julie",
			presents: [],
			presentTotal: 0,
		};
		expect(output.from).toEqual(output.from);
		expect(output2.from).toEqual(output2.from);
	});
	// test for individual things first, then duplicates 
	test("new Object should have key value pair presents: [presents]", () => {
		const request =
			"Dear Santa, for christmas I would like: gameboy, gameboy, gameboy. From Jim";
		const request2 =
			"Dear Mrs Clause, I would like: train, bear, shoes, dress. From Julie";
		const output = processPresentRequest(request);
		const output2 = processPresentRequest(request2);
		const output = {
			to: "Santa",
			from: "Jim",
			presents: ["gameboy"],
			presentTotal: 1,
		};
		const output2 = {
			to: "Mrs Clause",
			from: "Julie",
			presents: ["train", "bear", "shoes", "dress"],
			presentTotal: 4,
		};
		expect(output.presents).toEqual(output.presents);
		expect(output2.presents).toEqual(output2.presents);
	});
	it("should return the number of presents asked for", () => {
		const request =
			"Dear Santa, for christmas I would like: gameboy, gameboy, gameboy. From Jim";
		const request2 =
			"Dear Mrs Clause, I would like: train, bear, shoes, dress. From Julie";
		const output = processPresentRequest(request);
		const output2 = processPresentRequest(request2);
		const output = {
			to: "Santa",
			from: "Jim",
			presents: ["gameboy"],
			presentTotal: 1,
		};
		const output2 = {
			to: "Mrs Clause",
			from: "Julie",
			presents: ["train", "bear", "shoes", "dress"],
			presentTotal: 4,
		};
		expect(output.presentTotal).toBe(1);
		expect(output.presentTotal).toEqual(output.presentTotal);
		expect(output2.presentTotal).toBe(4);
		expect(output2.presentTotal).toEqual(output2.presentTotal);
	});
	it("should be able to return an object given any data as long as it follows the rules found on line 5", () => {
		const request =
			"Dear Niamh, for christmas I would like: to learn enough to progress, on the course. From Sam";
		const request2 =
			"Dear Sam, I would like: loads of chocolate, loads of money, happiness, fun, fun, more fun, to not get ill. From Sam";
		const output = processPresentRequest(request);
		const output2 = processPresentRequest(request2);
		const output = {
			to: "Niamh",
			from: "Sam",
			presents: ["to learn enough to progress", "on the course"],
			presentTotal: 2,
		};
		const output2 = {
			to: "Sam",
			from: "Sam",
			presents: [
				"loads of chocolate",
				"loads of money",
				"happiness",
				"fun",
				"more fun",
				"to not get ill",
			],
			presentTotal: 6,
		};
		expect(output).toEqual(output);
		expect(output2).toEqual(output2);
	});
});
