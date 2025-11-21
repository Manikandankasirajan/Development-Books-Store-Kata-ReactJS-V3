import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import NavBar from "./NavBar";

describe("test cases for NavBar component", () => {
	render(<NavBar />);
	it("should render heading/logo", () => {
		const logo = screen.getByRole("heading", { level: 1 });
		expect(logo).toHaveTextContent(/development books store/i);
	});
});
