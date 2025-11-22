import { render, screen } from "@testing-library/react";
import CartPriceDetails from "./CartPriceDetails";
import { expect } from "vitest";
import { Provider } from "react-redux";
import { store } from "/src/app/store.js";

describe("test cases for cart price details component", () => {
	it("should render price heading and price", () => {
		render(
			<Provider store={store}>
				<CartPriceDetails />
			</Provider>
		);
		const headings = screen.getAllByRole("heading", { level: 4 });
		expect(headings).toHaveLength(3);
	});
});
