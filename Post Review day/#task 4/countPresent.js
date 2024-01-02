const countPresent = (str, array) => {
	let total = 0;
    array.forEach((element) => {
		if (str === element) total++;
		if (Array.isArray(element)) total += countPresent(str, element);
	});
	return total;
};

module.exports = countPresent;
