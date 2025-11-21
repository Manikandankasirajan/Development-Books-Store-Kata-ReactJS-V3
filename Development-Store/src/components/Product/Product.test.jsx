import { render, screen } from "@testing-library/react";
import Product from "./Product";
import { expect } from "vitest";

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
		render(<Product book={book1} />);
		const bookImg = screen.getByRole("img");
		expect(bookImg).toHaveAttribute("src", book1.imgSrc);
	});
	it("should render book title,", () => {
		render(<Product book={book1} />);
		const bookTitle = screen.getByRole("heading", { level: 3 });
		expect(bookTitle).toHaveTextContent(book1.title);
	});
	it("should render truncated book title when book title exceeds limit,", () => {
		const truncatedTitle = book2.title.slice(0, 25) + "...";
		render(<Product book={book2} />);
		const bookTitle = screen.getByRole("heading", { level: 3 });
		expect(bookTitle).toHaveTextContent(truncatedTitle);
	});
	it("should render book price,", () => {
		render(<Product book={book1} />);
		const bookPrice = screen.getByRole("heading", { level: 4 });
		expect(bookPrice).toHaveTextContent(book1.price);
	});
	it("should render add to cart button,", () => {
		render(<Product book={book1} />);
		const addToCartBtn = screen.getByRole("button");
		expect(addToCartBtn).toHaveTextContent(/add to cart/i);
	});
});
