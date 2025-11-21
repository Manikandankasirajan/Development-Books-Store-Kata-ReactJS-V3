import { render, screen } from "@testing-library/react";
import EmptyCart from "./EmptyCart";
import { expect } from "vitest";

describe("test cases for empty cart component", () => {
	it("should render empty cart image and text saying your cart is empty", () => {
		const imgSrc = "../src/assets/add-to-cart.png";
		render(<EmptyCart />);
		const emptyCartImg = screen.getByRole("img");
		const heading = screen.getByRole("heading", { level: 3 });
		expect(emptyCartImg).toHaveAttribute(
			"src",
			"../src/assets/add-to-cart.png"
		);
		expect(heading).toHaveTextContent(/cart is empty/i);
	});
});
