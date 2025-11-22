import React from "react";

const CartPriceDetails = () => {
	return (
		<>
			<section className="py-5 flex flex-col justify-between gap-5">
				<section className="py-2 flex justify-between items-center border-b border-dashed ">
					<h4 className="text-gray-600 font-bold">Total Price</h4>
					<p className="mr-5 text-gray-600 font-bold">&#x20b9; 50</p>
				</section>
				<section className="py-2 flex justify-between items-center border-b border-dashed">
					<h4 className="text-gray-600 font-bold">Discount Price</h4>
					<p className="mr-5 text-gray-600 font-bold">
						&#x20b9; 50
					</p>
				</section>
				<section className="py-2 flex justify-between items-center border-b border-dashed">
					<h4 className="text-gray-600 font-bold">Final Price</h4>
					<p className="mr-5 text-gray-600 font-bold">
						&#x20b9; 50
					</p>
				</section>
			</section>
		</>
	);
};

export default CartPriceDetails;
