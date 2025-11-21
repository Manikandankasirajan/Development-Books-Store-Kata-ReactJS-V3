import { render, screen } from "@testing-library/react";
import FilledCart from "./FilledCart";
import { expect } from "vitest";
import { Provider } from "react-redux";
import { store } from "/src/app/store.js";

describe("test cased for filled cart component", () => {
	it("should render cart summary heading", () => {
		render(
			<Provider store={store}>
				<FilledCart />
			</Provider>
		);
		const heading = screen.getByRole("heading", { level: 2 });
		expect(heading).toHaveTextContent(/cart summary/i);
	});
});
