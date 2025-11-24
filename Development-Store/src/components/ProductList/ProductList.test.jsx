import { render, screen } from "@testing-library/react";
import ProductList from "./ProductList";
import { expect } from "vitest";
import BOOK_LIST from "/src/data/productsDetails.js";

describe("test cases for productlist component", () => {
	it("should render heading", () => {
		render(<ProductList productList={[]} />);
		const heading = screen.getByRole("heading", { level: 2 });
		expect(heading).toHaveTextContent(/books available/i);
	});
	it("should render Opps...No Product to Show when product list is empty", () => {
		render(<ProductList productList={[]} />);
		const text = screen.getByText(/Opps...No Product to Show/i);
		expect(text).toBeInTheDocument();
	});
});
