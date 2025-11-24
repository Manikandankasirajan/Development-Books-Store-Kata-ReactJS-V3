import { render, screen } from "@testing-library/react";
import Cart from "./Cart";
import { expect } from "vitest";
import { CartContext } from "../../App";

describe("test cases for Cart component", () => {
	it("should render close cart button", () => {
		render(
			<CartContext value={{ cart: {}, cartAction: vi.fn() }}>
				<Cart />
			</CartContext>
		);
		const closeCartBtn = screen.getByRole("button");
		const svg = closeCartBtn.querySelector("svg");
		expect(svg).toBeInTheDocument();
	});
});
