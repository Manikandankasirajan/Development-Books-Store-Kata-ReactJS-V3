import createSetOfUniqueBooks from "./createSetOfUniqueBooks";

export default function getPriceDetails(cart) {
	const bookSets = createSetOfUniqueBooks(cart);
	const price = calculatePrice(bookSets);
	return price;
}

function calculatePrice(bookSets) {
	let total = 0;
	bookSets.forEach((bookSet) => {
		total += calcualtePriceOfBookSet(bookSet);
	});
	return total;
}

function calculateActualPriceOfSet(bookCount) {
	return bookCount * 50;
}

function calculateDiscountPriceOfSet(bookCount) {
	return bookCount * 50 * (DISCOUNT_RULE[bookCount] / 100);
}
