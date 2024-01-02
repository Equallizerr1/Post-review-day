function processPresentRequest(str) {
	if (str.length === 0) {
		return {};
	}
	const output = {};
	output.to = "";
	output.from = "";
	output.presents = [];
	output.presentTotal = null;

	const recipientSplit = str.split(",", 1);
	const recipientSlice = recipientSplit.toString().slice(5);
	output.to = recipientSlice;

	const senderSplit = str.split(" ");
	const senderSlice = senderSplit.slice(-1).toString();
	output.from = senderSlice;

	if (str.includes("I would like:")) {
		const presentsSplit = str.split(".", 1).pop();
		const presentsArray = presentsSplit
			.split("I would like: ")
			.pop()
			.split(", ");
		const dupeRemoved = presentsArray.filter(
			(present, i, presentsArray) => presentsArray.indexOf(present) === i
		);
		output.presents = dupeRemoved;
	}

	output.presentTotal = output.presents.length;
	console.log(output);
	console.log(output.presents);
	return output;
}
const newRequest = processPresentRequest(
	"Dear Santa, for christmas I would like: bike. From Sam"
);
console.log(newRequest.presents);

function selectToysByType(presentsArray, type) {
	if (presentsArray.length < 1) {
		return [];
	}
	const newPresent = [...presentsArray];
	const filteredPresent = newPresent.filter((present) => {
		return present.type === type;
	});
	if (filteredPresent.length === 0) {
		return "Present type not found";
	}
	return filteredPresent;
}
const presentName = newRequest.presents.toString();
const presentArrayObj = [
	{
		name: presentName,
		type: "outdoors",
	},
];

selectToysByType(presentArrayObj, "outdoors");
console.log(selectToysByType(presentArrayObj, "outdoors"));
console.log(selectToysByType(presentArrayObj, "inside"));

function manageList(presents) {
	const presentsCopy = [...presents];
	if (presents.length === 0) {
		return "please provide a list of presents";
	}
	function itemRemoval(itemToRemove) {
		const itemIncluded = presentsCopy.includes(itemToRemove);
		if (itemToRemove !== undefined && itemIncluded === false) {
			return "item not in list";
		}
		const removedArray = presentsCopy.filter(
			(present) => present !== itemToRemove
		);
		if (removedArray.length === 0) {
			return "list is empty";
		}
		return removedArray;
	}
	console.log(presentsCopy);
	return itemRemoval;
}

const removePresentFromList = manageList(newRequest.presents);
console.log(removePresentFromList(presentName));
console.log(removePresentFromList());
const presentRemoval = removePresentFromList();

const countPresent = (str, array) => {
	let total = 0;
	array.forEach((element) => {
		if (str === element) total++;
		if (Array.isArray(element)) total += countPresent(str, element);
	});
	return total;
};

console.log(countPresent(presentName, presentRemoval));
