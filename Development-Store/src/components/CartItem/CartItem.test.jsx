import { render, screen } from "@testing-library/react";
import CartItem from "./CartItem";
import { expect } from "vitest";

describe("test cases for cart item component", () => {
	it("should render book title, increase and decrease book count, book count", () => {
		render(<CartItem />);
		const bookTitle = screen.getByRole("heading", { level: 3 });
		const btns = screen.getAllByRole("button");
		const bookPrice = screen.getByRole("heading", { level: 4 });
		expect(bookTitle).toBeInTheDocument();
		expect(btns.length).toBe(2);
		expect(bookPrice).toBeInTheDocument();
	});
});
