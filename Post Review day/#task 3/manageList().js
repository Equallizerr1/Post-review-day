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
	return itemRemoval;
}

module.exports = manageList;
