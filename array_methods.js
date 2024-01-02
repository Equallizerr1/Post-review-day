// map/ filter/ reduce (not recommended - the array creation is usually incidental to the rest of the functionality)

// creating new array with a new reference in memory. i.e. keeping things pure
function createNewArray() {
	const array = [1, 2, 3];
	const newArray = [...array];
	console.log(newArray === array);
	console.log(newArray);

	const newArray2 = [];
	array.forEach((element) => newArray2.push(element));
	console.log(newArray2 === array);
	console.log(newArray2);
}
createNewArray();
