const manageList = require("./manageList()");

describe("manage list should take an array of presents for the elves to find and this function is a higher order function in that it should return a function.", () => {
	it("will return an error message if input array is empty", () => {
		expect(manageList([])).toEqual("please provide a list of presents");
	});
	it("will return a function when invoked with parameters", () => {
		const itemRemoval = manageList(["train"]);
		expect(typeof itemRemoval).toBe("function");
	});
	it("will return an array containing a single item", () => {
		const presentsList = ["train"];
		const itemRemoval = manageList(presentsList);
		expect(itemRemoval()).toEqual(["train"]);
	});
	test("should return a new array", () => {
		const presentsList = ["train", "bike"];
		const copyOfPresents = ["train", "bike"];
		const itemRemoval = manageList(presentsList);
		itemRemoval("train");
		expect(itemRemoval()).toEqual(copyOfPresents);
		expect(itemRemoval("train")).not.toEqual(copyOfPresents);
		expect(itemRemoval("bike")).not.toEqual(copyOfPresents);
		expect(itemRemoval("bike")).not.toBe(presentsList);
	});
	it("will return an array containing multiple items", () => {
		const presentsList = ["train", "bike"];
		const itemRemoval = manageList(presentsList);
		expect(itemRemoval()).toEqual(["train", "bike"]);
	});
	it("can return a new list with specified item removed", () => {
		const presentsList = ["train", "bike"];
		const itemRemoval = manageList(presentsList);
		expect(itemRemoval("train")).toEqual(["bike"]);
	});
	it("can return a new list with specified item removed multiple times", () => {
		const presentsList = ["train", "bike", "gundam"];
		const itemRemoval = manageList(presentsList);
		expect(itemRemoval("train")).toEqual(["bike", "gundam"]);

		const presentsList2 = ["bike", "gundam"];
		const itemRemoval2 = manageList(presentsList2);
		expect(itemRemoval2("bike")).toEqual(["gundam"]);

		// should be separate test - logic is separate
		const presentsList3 = ["gundam"];
		const itemRemoval3 = manageList(presentsList3);
		expect(itemRemoval3("gundam")).toEqual("list is empty");
	});
	it("can return an error message if item is not found in list", () => {
		const presentsList = ["train", "bike"];
		const itemRemoval = manageList(presentsList);
		expect(itemRemoval("plane")).toEqual("item not in list");
		const presentsList2 = ["bike"];
		const itemRemoval2 = manageList(presentsList2);
		expect(itemRemoval2("gundam")).toEqual("item not in list");
	});
	it("can return a new list with specified item in any order removed multiple times", () => {
		const presentsList = ["train", "bike", "gundam"];
		const itemRemoval = manageList(presentsList);
		expect(itemRemoval("bike")).toEqual(["train", "gundam"]);

		const presentsList2 = ["bike", "gundam", "train"];
		const itemRemoval2 = manageList(presentsList2);
		expect(itemRemoval2("gundam")).toEqual(["bike", "train"]);

		const presentsList3 = ["gundam", "bike", "train"];
		const itemRemoval3 = manageList(presentsList3);
		expect(itemRemoval3("train")).toEqual(["gundam", "bike"]);
	});
	// filter will filter out multiple matches
});
