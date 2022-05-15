export const fisherYates = (array) => {
	// Randomly shuffle an array using Fishier-Yates shuffle algorithm
	// See https://en.wikipedia.org/wiki/Fisher–Yates_shuffle
	let currentIndex = array.length,
		temporaryValue,
		randomIndex;
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
};
