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

module.exports = selectToysByType;
