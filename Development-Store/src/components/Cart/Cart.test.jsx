import { render, screen } from "@testing-library/react";
import Cart from "./Cart";
import { expect } from "vitest";
import { Provider } from "react-redux";
import { store } from "/src/app/store.js";

describe("test cases for Cart component", () => {
	it("should render close cart button", () => {
		render(
			<Provider store={store}>
				<Cart />
			</Provider>
		);
		const closeCartBtn = screen.getByRole("button");
		const svg = closeCartBtn.querySelector("svg");
		expect(svg).toBeInTheDocument();
	});
});
