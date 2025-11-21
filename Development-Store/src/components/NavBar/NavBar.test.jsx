import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import NavBar from "./NavBar";
import { Provider } from "react-redux";
import { store } from "/src/app/store.js";

describe("test cases for NavBar component", () => {
	const setShoCart = false;
	it("should render heading/logo", () => {
		render(
			<Provider store={store}>
				<NavBar />
			</Provider>
		);
		const logo = screen.getByRole("heading", { level: 1 });
		expect(logo).toHaveTextContent(/development books store/i);
	});
	it("should render toggle shopping cart button with fa shopping cart icon", () => {
		render(
			<Provider store={store}>
				<NavBar />
			</Provider>
		);
		const btn = screen.getByRole("button");
		const shoppingCartIcon = btn.querySelector("svg");
		expect(shoppingCartIcon).toBeInTheDocument();
	});
	it("should render cart quantity banner", () => {
		render(
			<Provider store={store}>
				<NavBar />
			</Provider>
		);
		const cartQuantityBanner = screen.queryByTestId("cartQuantityBanner");
		expect(cartQuantityBanner).not.toBeInTheDocument();
	});
});
