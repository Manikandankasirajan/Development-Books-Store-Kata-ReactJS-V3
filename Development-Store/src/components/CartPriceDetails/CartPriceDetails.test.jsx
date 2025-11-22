import { render, screen } from "@testing-library/react";
import CartPriceDetails from "./CartPriceDetails";
import { expect } from "vitest";

describe("test cases for cart price details component", () => {
	it("should render price heading and price", () => {
		render(<CartPriceDetails />);
		const headings = screen.getAllByRole("heading", { level: 4 });
		expect(headings).toHaveLength(3);
	});
});
