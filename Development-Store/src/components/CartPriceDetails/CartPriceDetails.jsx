import React, { useContext } from "react";
import getCartQuantity from "../../utils/getCartQuantity";
import getPriceDetails from "../../utils/getPriceDetails";
import { BOOK_PRICE } from "../../constants";
import { CartContext } from "../../App";

const CartPriceDetails = () => {
	const { cart, cartAction } = useContext(CartContext);
	const cartQuantity = getCartQuantity(cart);
	const priceAfterDiscount = getPriceDetails(cart);
	const totalPrice = cartQuantity * BOOK_PRICE;
	const discountPrice = totalPrice - priceAfterDiscount;
	return (
		<>
			<section className="py-5 flex flex-col justify-between gap-5">
				<section className="py-2 flex justify-between items-center border-b border-dashed ">
					<h4 className="text-gray-600 font-bold">Total Price</h4>
					<p className="mr-5 text-gray-600 font-bold">&#x20b9; {totalPrice}</p>
				</section>
				<section className="py-2 flex justify-between items-center border-b border-dashed">
					<h4 className="text-gray-600 font-bold">Discount Price</h4>
					<p className="mr-5 text-gray-600 font-bold">
						&#x20b9; {discountPrice}
					</p>
				</section>
				<section className="py-2 flex justify-between items-center border-b border-dashed">
					<h4 className="text-gray-600 font-bold">Final Price</h4>
					<p className="mr-5 text-gray-600 font-bold">
						&#x20b9; {priceAfterDiscount}
					</p>
				</section>
			</section>
		</>
	);
};

export default CartPriceDetails;
