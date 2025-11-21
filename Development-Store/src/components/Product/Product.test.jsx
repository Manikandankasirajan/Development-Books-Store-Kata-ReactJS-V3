import { render, screen } from "@testing-library/react";
import Product from "./Product";
import { expect } from "vitest";

describe("test cases for product component", () => {
	const book = {
		id: 1,
		title: "Clean Code",
		author: "Robert Martin",
		releaseYear: 2008,
		price: 50,
		imgSrc: "../public/Kata_DevelopmentBooks_CleanArchitecture.jpeg",
	};
	it("should render book image,", () => {
		render(<Product book={book} />);
		const bookImg = screen.getByRole("img");
		expect(bookImg).toHaveAttribute("src", book.imgSrc);
	});
	it("should render book title,", () => {
		render(<Product book={book} />);
		const bookTitle = screen.getByRole("heading", { level: 3 });
		expect(bookTitle).toHaveTextContent(book.title);
	});
	it("should render book price,", () => {
		render(<Product book={book} />);
		const bookPrice = screen.getByRole("heading", { level: 4 });
		expect(bookPrice).toHaveTextContent(book.price);
	});
	it("should render add to cart button,", () => {
		render(<Product book={book} />);
		const addToCartBtn = screen.getByRole("button");
		expect(addToCartBtn).toHaveTextContent(/add to cart/i);
	});
});
