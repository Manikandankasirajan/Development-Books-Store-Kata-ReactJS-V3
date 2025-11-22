import { findByRole, render, screen } from "@testing-library/react";
import { expect, vi } from "vitest";
import NavBar from "./NavBar";

vi.mock("react-redux", () => ({
	useSelector: vi.fn(),
}));

vi.mock("../../utils/getCartQuantity", () => ({
	default: vi.fn(),
}));

vi.mock("react-icons/fa6", () => ({
	FaBagShopping: () => <div data-testid="fa-bag-icon" />,
}));

import { useSelector } from "react-redux";
import getCartQuantity from "../../utils/getCartQuantity";

describe("test cases for NavBar component", () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});
	it("should render heading/logo, add to cart button and shopping cart icon in the button", () => {
		useSelector.mockReturnValue({});
		getCartQuantity.mockReturnValue(0);
		render(<NavBar setShowCart={() => {}} />);
		const logo = screen.getByRole("heading", { level: 1 });
		expect(logo).toHaveTextContent(/development books store/i);
		const addToCartBtn = screen.getByRole("button");
		expect(addToCartBtn).toBeInTheDocument();
		const shoppingCartBtnIcon = screen.getByTestId("fa-bag-icon");
		expect(shoppingCartBtnIcon).toBeInTheDocument();
	});
	it("should not render cart quantity banner when cart is empty", () => {
		useSelector.mockReturnValue({});
		getCartQuantity.mockReturnValue(0);
		render(<NavBar setShowCart={() => {}} />);
		const cartQuantityBanner = screen.queryByTestId("cartQuantityBanner");
		expect(cartQuantityBanner).not.toBeInTheDocument();
	});
	it("should render cart quantity banner when cart quantity is > 0", () => {
		useSelector.mockReturnValue({});
		getCartQuantity.mockReturnValue(5);
		render(<NavBar setShowCart={() => {}} />);
		const cartQuantityBanner = screen.queryByTestId("cartQuantityBanner");
		expect(cartQuantityBanner).toBeInTheDocument();
		expect(cartQuantityBanner).toHaveTextContent("5");
	});
});
