import { render, screen } from "@testing-library/react";
import Product from "./Product";
import { expect } from "vitest";
import { CartContext } from "../../App";

function renderComponent(book) {
	render(
		<CartContext value={{ cart: {}, cartAction: vi.fn() }}>
			<Product book={book} />
		</CartContext>
	);
	return {
		bookImg: screen.getByRole("img"),
		bookTitle: screen.getByRole("heading", { level: 3 }),
		bookPrice: screen.getByRole("heading", { level: 4 }),
		addToCartBtn: screen.getByRole("button"),
	};
}

describe("test cases for product component", () => {
	const book1 = {
		id: 3,
		title: "Clean Architecture",
		author: "Robert Martin",
		releaseYear: 2017,
		price: 50,
		imgSrc: "../public/Kata_DevelopmentBooks_CleanArchitecture.jpeg",
	};
	const book2 = {
		id: 5,
		title: "Working Effectively With Legacy Code",
		author: "Michael C. Feathers",
		releaseYear: 2004,
		price: 50,
		imgSrc: "../public/Kata_DevelopmentBooks_Refactoring.jpeg",
	};
	it("should render book image,", () => {
		const { bookImg: bookImg } = renderComponent(book1);
		expect(bookImg).toHaveAttribute("src", book1.imgSrc);
	});
	it("should render book title,", () => {
		const { bookTitle: bookTitle } = renderComponent(book1);
		expect(bookTitle).toHaveTextContent(book1.title);
	});
	it("should render truncated book title when book title exceeds limit,", () => {
		const truncatedTitle = book2.title.slice(0, 25) + "...";
		const { bookTitle: bookTitle } = renderComponent(book2);
		expect(bookTitle).toHaveTextContent(truncatedTitle);
	});
	it("should render book price,", () => {
		const { bookPrice: bookPrice } = renderComponent(book1);
		expect(bookPrice).toHaveTextContent(book1.price);
	});
	it("should render add to cart button,", () => {
		const { addToCartBtn: addToCartBtn } = renderComponent(book1);
		expect(addToCartBtn).toHaveTextContent(/add to cart/i);
	});
});
