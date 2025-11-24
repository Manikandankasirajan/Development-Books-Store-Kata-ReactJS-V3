import { render, screen } from "@testing-library/react";
import { describe, expect, vi } from "vitest";
import NavBar from "./NavBar";
import { CartContext } from "../../App";

function renderComponent() {
	render(
		<CartContext value={{ cart: {}, cartAction: vi.fn() }}>
			<NavBar setShowCart={vi.fn()} />
		</CartContext>
	);
	return {
		heading: screen.getByRole("heading", { level: 1 }),
		shoppingCartBtn: screen.getByRole("button"),
		shoppingCartBtnIcon: screen.getByTestId("fa-bag-icon"),
		cartQuantityBanner: screen.queryByTestId("cartQuantityBanner"),
	};
}

vi.mock("../../utils/getCartQuantity", () => ({
	default: vi.fn(),
}));

vi.mock("react-icons/fa6", () => ({
	FaBagShopping: () => <div data-testid="fa-bag-icon" />,
}));

import getCartQuantity from "../../utils/getCartQuantity";
import userEvent from "@testing-library/user-event";

describe("test cases for navbar component", () => {
	it("should render heading", () => {
		getCartQuantity.mockReturnValue(0);
		const { heading: heading } = renderComponent();
		expect(heading).toHaveTextContent(/development books/i);
	});
	it("should render add to cart button", () => {
		getCartQuantity.mockReturnValue(0);
		const { shoppingCartBtn: shoppingCartBtn } = renderComponent();
		expect(shoppingCartBtn).toBeInTheDocument();
	});
	it("should render add to cart button with shopping cart icon", () => {
		getCartQuantity.mockReturnValue(0);
		const { shoppingCartBtnIcon: shoppingCartBtnIcon } = renderComponent();
		expect(shoppingCartBtnIcon).toBeInTheDocument();
	});

	it("should not render cart quantity banner when cart is empty", () => {
		getCartQuantity.mockReturnValue(0);
		const { cartQuantityBanner: cartQuantityBanner } = renderComponent();
		expect(cartQuantityBanner).not.toBeInTheDocument();
	});
	it("should render cart quantity banner when cart quantity is > 0", () => {
		getCartQuantity.mockReturnValue(3);
		const { cartQuantityBanner: cartQuantityBanner } = renderComponent();
		expect(cartQuantityBanner).toBeInTheDocument();
		expect(cartQuantityBanner).toHaveTextContent("3");
	});
});

describe("to test if show cart button cals the function when clicked", () => {
	it("should call setShowCart fn when clicked", async () => {
		const mockFn = vi.fn();
		render(
			<CartContext value={{ cart: {}, cartAction: vi.fn() }}>
				<NavBar setShowCart={mockFn} />
			</CartContext>
		);
		const user = userEvent.setup();
		const shoppingCartBtn = screen.getByRole("button");
		await user.click(shoppingCartBtn);
		expect(mockFn).toHaveBeenCalledTimes(1);
	});
});
