const countPresent = (str, array) => {
	let total = 0;
    array.forEach((element) => {
		if (str === element) total++;
		if (Array.isArray(element)) total += countPresent(str, element);
	});
	array[0] = "bananas"
	return total;
};

module.exports = countPresent;
