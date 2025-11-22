import React from "react";
import { FaBagShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import getCartQuantity from "../../utils/getCartQuantity";

const NavBar = ({ setShowCart }) => {
	const cart = useSelector((state) => state.cart.value);
	const cartQuantity = getCartQuantity(cart);
	return (
		<>
			<header>
				<nav className="w-full flex justify-between px-10 py-6 bg-slate-800 shadow-lg">
					<h1 className="text-3xl font-bold text-white">
						Development Books Store
					</h1>
					<section className="relative flex justify-around items-center ml-5">
						<button
							aria-label="open cart button"
							className="mr-4 text-3xl text-white font-bold cursor-pointer hover:scale-110 transition delay-150 duration-300 ease-in-out"
							onClick={() => setShowCart((curr) => !curr)}>
							<FaBagShopping />
						</button>
						{cartQuantity > 0 && (
							<div
								data-testid="cartQuantityBanner"
								className="absolute top-0 right-3 w-4 h-4 bg-red-600 text-white text-xs font-bold text-center rounded-full">
								{cartQuantity}
							</div>
						)}
					</section>
				</nav>
			</header>
		</>
	);
};

export default NavBar;
