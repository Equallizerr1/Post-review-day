function processPresentRequest(str) {
	// 3 separate variables for what i'm working on
	// tidies code up a bit
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
	return output;
}

module.exports = processPresentRequest;
