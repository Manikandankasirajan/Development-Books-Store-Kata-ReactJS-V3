import { render, screen } from "@testing-library/react";
import CartItem from "./CartItem";
import { expect } from "vitest";

describe("test cases for cart item component", () => {
	it("should render book title, increase and decrease book count, book count", () => {
		render(<CartItem />);
        const heading = screen.getByRole("heading");
        const btns = screen.getAllByRole('button')
        expect(heading).toBeInTheDocument();
        expect(btns.length).toBe(2)
	});
});
