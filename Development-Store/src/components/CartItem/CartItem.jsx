import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const CartItem = ({ bookTitle, bookCount }) => {
	return (
		<>
			<section className="w-full px-3 py-2 mt-5 grid grid-cols-5 gap-3 bg-white  rounded-2xl">
				<section className="p-1 col-span-2 ">
					<h4 className="text-sm text-left text-blue-900 font-bold">
						{bookTitle}
					</h4>
				</section>
				<section className="col-span-1 flex justify-center items-center">
					<section className="flex justify-around items-start gap-2">
						<button className="px-3 py-1 text-black font-bold rounded-xl hover:opacity-50 cursor-pointer disabled:text-black/50 disabled:cursor-not-allowed">
							<FaMinus />
						</button>
						<p className="font-bold">{bookCount}</p>
						<button className="px-3 py-1 text-black font-bold rounded-xl hover:opacity-50 cursor-pointer ">
							<FaPlus />
						</button>
					</section>
				</section>
			</section>
		</>
	);
};

export default CartItem;
