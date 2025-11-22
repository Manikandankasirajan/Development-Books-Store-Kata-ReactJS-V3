export default function createSetOfUniqueBooks(cart) {
	const cartCopy = { ...cart };
	let bookSets = [];
	while (Object.values(cartCopy).some((value) => value > 0)) {
		const currSet = [];
		for (const book in cartCopy) {
			if (cartCopy[book] > 0) {
				currSet.push(book);
				cartCopy[book]--;
			}
		}
		bookSets.push(currSet);
	}
	if (isOptimizationPosible(bookSets)) {
		bookSets = createOptimizedBookSets(bookSets);
	}
	return bookSets;
}

function isOptimizationPosible(bookSets) {
	return bookSets.find((bookSet) => bookSet.length === 3) &&
		bookSets.find((bookSet) => bookSet.length === 5)
		? true
		: false;
}

function createOptimizedBookSets(bookSets) {
	let optimizedBookSets = bookSets;
	while (isOptimizationPosible(optimizedBookSets)) {
		const setOf5 = optimizedBookSets.find((bookSet) => bookSet.length === 5);
		const setOf3 = optimizedBookSets.find((bookSet) => bookSet.length === 3);
		setOf3.push(setOf5.pop());
	}
	return optimizedBookSets;
}
