import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";

const FilledCart = () => {
	const cart = useSelector((state) => state.cart.value);
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
			</section>
		</>
	);
};

export default FilledCart;
