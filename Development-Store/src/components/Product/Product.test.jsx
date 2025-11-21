import { render, screen } from "@testing-library/react";
import Product from "./Product";
import { expect } from "vitest";

describe("test cases for product component", () => {
	it("should render bookImg", () => {
		const book = {
			id: 1,
			title: "Clean Code",
			author: "Robert Martin",
			releaseYear: 2008,
			price: 50,
			imgSrc: "../public/Kata_DevelopmentBooks_CleanArchitecture.jpeg",
		};
		render(<Product book={book} />);
		const bookImg = screen.getByRole("img");
		expect(bookImg).toHaveAttribute("src", book.imgSrc);
	});
});
