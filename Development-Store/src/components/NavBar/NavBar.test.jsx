import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import NavBar from "./NavBar";

describe("test cases for NavBar component", () => {
	it("should render heading/logo", () => {
		render(<NavBar />);
		const logo = screen.getByRole("heading", { level: 1 });
		expect(logo).toHaveTextContent(/development books store/i);
	});
	it("should render toggle shopping cart button with fa shopping cart icon", () => {
		render(<NavBar />);
		const btn = screen.getByRole("button");
		const shoppingCartIcon = btn.querySelector("svg");
		expect(shoppingCartIcon).toBeInTheDocument();
	});
	it("should render cart quantity banner", () => {
		render(<NavBar />);
		const cartQuantityBanner = screen.getByTestId("cartQuantityBanner");
		expect(cartQuantityBanner).toBeInTheDocument();
	});
});
