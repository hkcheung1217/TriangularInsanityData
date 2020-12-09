// Formula
const DATA_ONE = n => 1 + (Math.floor(n * Math.PI ** 11) % 30);
const DATA_TWO = n => 1 + (Math.floor(n * Math.E ** 11) % 30);
const DATA_THREE = n => 1 + ((n * 53) % 30);
const DATA_FOUR = n => 1 + ((n * 29) % 30);

// Data List Generator
const dataGenerator = fun => {
	const result = [];
	const targetLength = 90;
	const checked = {};

	let i = 1;
	while (result.length < targetLength) {
		let currentValue = fun(i);

		!checked[currentValue] ? (checked[currentValue] = 1) : (checked[currentValue] += 1);

		if (checked[currentValue] < 4) result.push(currentValue);

		i += 1;
	}
	console.log(`number of iteration ${i}`);
	return result;
};

// Data Chunking into size 3
const chunk = (array, size) =>
	Array.from({ length: Math.ceil(array.length / size) }, (v, i) => array.slice(i * size, i * size + size));

const chunkListOne = chunk(dataGenerator(DATA_ONE), 3);
const chunkListTwo = chunk(dataGenerator(DATA_TWO), 3);
const chunkListThree = chunk(dataGenerator(DATA_THREE), 3);
const chunkListFour = chunk(dataGenerator(DATA_FOUR), 3);

//Checking at least one half solution
// const hsChecker = chunkListOne => {

// 	let x = 0;
// 	while (true) {
// 		if() {

// 			return true;
// 		}
// 	}
// 	return false;
// };

const test = puzzle => {
	for (i = 0; i < 30; i++) {
		console.log(puzzle[i]);
	}
};

console.log(test(chunkListOne));

// console.log('Pizza One: ', chunkListOne);
// console.log('Pizza Two: ', chunkListTwo);
// console.log('Pizza Three: ', chunkListThree);
// console.log('Pizza Four: ', chunkListFour);
