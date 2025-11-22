import { BOOK_PRICE, DISCOUNT_RULE } from "../constants.js";
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

function calcualtePriceOfBookSet(bookSet) {
	const bookCount = bookSet.length;
	const actualPrice = calculateActualPriceOfSet(bookCount);
	const discountPrice = calculateDiscountPriceOfSet(bookCount);
	return actualPrice - discountPrice;
}

function calculateActualPriceOfSet(bookCount) {
	return bookCount * BOOK_PRICE;
}

function calculateDiscountPriceOfSet(bookCount) {
	return bookCount * BOOK_PRICE * (DISCOUNT_RULE[bookCount] / 100);
}
