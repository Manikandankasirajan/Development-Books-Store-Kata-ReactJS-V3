import { render, screen } from "@testing-library/react";
import ProductList from "./ProductList";
import { expect } from "vitest";
import BOOK_LIST from "/src/data/productsDetails.js";

vi.mock("../Product/Product", () => ({
	default: () => {
		return <div data-testid="childProductComponent"> This is the fake component</div>;
	},
}));

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
	it("should render child product component when list is > 0", () => {
		render(<ProductList productList={BOOK_LIST} />);
		const childProductComponent = screen.getAllByTestId("childProductComponent");
		expect(childProductComponent).toHaveLength(5);
	});
});
