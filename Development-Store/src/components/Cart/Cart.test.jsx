import { render, screen } from "@testing-library/react";
import Cart from "./Cart";
import { expect } from "vitest";

describe("test cases for Cart component", () => {
	it("should render close cart button", () => {
		render(<Cart />);
		const closeCartBtn = screen.getByRole("button");
		const svg = closeCartBtn.querySelector("svg");
		expect(svg).toBeInTheDocument();
	});
});
