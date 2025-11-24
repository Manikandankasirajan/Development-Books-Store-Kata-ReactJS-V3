import { render, screen } from "@testing-library/react";
import FilledCart from "./FilledCart";
import { expect } from "vitest";
import { CartContext } from "../../App";

describe("test cased for filled cart component", () => {
	it("should render cart summary heading", () => {
		render(
			<CartContext value={{ cart: {}, cartAction: vi.fn() }}>
				<FilledCart />
			</CartContext>
		);
		const heading = screen.getByRole("heading", { level: 2 });
		const btns = screen.getAllByRole("button");
		expect(heading).toHaveTextContent(/cart summary/i);
		expect(btns).toHaveLength(2);
	});
});
