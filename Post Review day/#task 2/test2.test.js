const selectToysByType = require("./selectToysByType()");
describe("SelectToysByType", () => {
	it("Should return an empty array when given an empty array", () => {
		const presents = [];
		const output = selectToysByType(presents);
		expect(output).toEqual([]);
	});
	it("should return a new Array", () => {
		const presents = [{ name: "bike", type: "outdoors" }];
		const type = "outdoors";
		const output = selectToysByType(presents, type);
		expect(output).not.toBe(presents);
	});
	it("function should not change the inputs", () => {
		const presents = [{ name: "bike", type: "outdoors" }];
		const type = "outdoors";
		const output = selectToysByType(presents, type);
		expect(presents).toEqual([{ name: "bike", type: "outdoors" }]);
	});
	it("should return an array if type is included in output array", () => {
		const presents = [
			{ name: "bike", type: "outdoors" },
			{ name: "shoes", type: "clothes" },
			{ name: "socks", type: "clothes" },
			{ name: "train", type: "toy" },
			{ name: "stacking cups", type: "toy" },
		];
		const type = "outdoors";
		const output = selectToysByType(presents, type);
		expect(output).toEqual([{ name: "bike", type: "outdoors" }]);
	});
	it("should return an array of multiple presents", () => {
		const presents = [
			{ name: "bike", type: "outdoors" },
			{ name: "shoes", type: "clothes" },
			{ name: "socks", type: "clothes" },
			{ name: "train", type: "toy" },
			{ name: "stacking cups", type: "toy" },
		];
		const type = "clothes";
		const output = selectToysByType(presents, type);
		expect(output).toEqual([
			{ name: "shoes", type: "clothes" },
			{ name: "socks", type: "clothes" },
		]);
	});
	it("should return an error message if type is not included", () => {
		const presents = [
			{ name: "bike", type: "outdoors" },
			{ name: "shoes", type: "clothes" },
			{ name: "socks", type: "clothes" },
			{ name: "train", type: "toy" },
			{ name: "stacking cups", type: "toy" },
		];
		const type = "indoors";
		const output = selectToysByType(presents, type);
		expect(output).toEqual([]);
	});
});
