import { render, screen } from "@testing-library/react";
import CartItem from "./CartItem";
import { expect } from "vitest";
import { CartContext } from "../../App";

describe("test cases for cart item component", () => {
	it("should render book title, increase and decrease book count, book count", () => {
		render(
			<CartContext value={{ cart: {}, cartAction: vi.fn() }}>
				<CartItem />
			</CartContext>
		);
		const bookTitle = screen.getByRole("heading", { level: 3 });
		const btns = screen.getAllByRole("button");
		const bookPrice = screen.getByRole("heading", { level: 4 });
		expect(bookTitle).toBeInTheDocument();
		expect(btns.length).toBe(3);
		expect(bookPrice).toBeInTheDocument();
	});
});
