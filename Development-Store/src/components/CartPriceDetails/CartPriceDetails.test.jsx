import { render, screen } from "@testing-library/react";
import CartPriceDetails from "./CartPriceDetails";
import { expect } from "vitest";
import { CartContext } from "../../App";

describe("test cases for cart price details component", () => {
	it("should render price heading and price", () => {
		render(
			<CartContext value={{ cart: {}, cartAction: vi.fn() }}>
				<CartPriceDetails />
			</CartContext>
		);
		const headings = screen.getAllByRole("heading", { level: 4 });
		expect(headings).toHaveLength(3);
	});
});
