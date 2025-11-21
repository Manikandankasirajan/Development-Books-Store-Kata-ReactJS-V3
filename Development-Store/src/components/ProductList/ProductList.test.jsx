import { render, screen } from "@testing-library/react";
import ProductList from "./ProductList";
import { expect } from "vitest";

describe("test cases for productlist component", () => {
	it("should render heading", () => {
		render(<ProductList />);
		const heading = screen.getByRole("heading", { level: 2 });
		expect(heading).toHaveTextContent(/books available/i);
	});
});
