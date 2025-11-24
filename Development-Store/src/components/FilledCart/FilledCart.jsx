import React, { useContext } from "react";
import CartItem from "../CartItem/CartItem";
import CartPriceDetails from "../CartPriceDetails/CartPriceDetails";
import { CartContext } from "../../App";

const FilledCart = () => {
	const { cart, cartAction } = useContext(CartContext);

	return (
		<>
			<section className="p-6">
				<h2 className="pb-5 pl-2 text-xl font-bold border-b-2 border-slate-400">
					Cart Summary
				</h2>
				<section className="pb-4 h-80 border-b border-dotted overflow-y-auto bg-gray-50">
					{Object.entries(cart).map((book) => {
						const [bookTitle, bookCount] = book;
						return (
							<CartItem
								key={bookTitle}
								bookTitle={bookTitle}
								bookCount={bookCount}
							/>
						);
					})}
				</section>
				<CartPriceDetails />
				<section className="flex justify-around items-center mt-5">
					<button
						className="px-10 py-2 bg-slate-400 font-bold rounded-xl hover:bg-slate-600 hover:cursor-pointer hover:scale-105 transition delay-150 duration-300 ease-in-out"
						onClick={() => cartAction({ type: "removeAllFromCart" })}>
						Clear Cart
					</button>
					<button className="px-10 py-2 bg-blue-900 text-white  font-bold  rounded-xl hover:bg-blue-700 hover:cursor-pointer hover:scale-105 transition delay-150 duration-300 ease-in-out">
						Checkout
					</button>
				</section>
			</section>
		</>
	);
};

export default FilledCart;
