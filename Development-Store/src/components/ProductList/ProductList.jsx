import React from "react";

const ProductList = ({ productList }) => {
	return (
		<>
			<main>
				<section className="p-12 bg-gray-200">
					<h2 className="mb-8 px-5 text-xl font-bold text-center">
						Books Available
					</h2>
					{productList.length === 0 && (
						<section>
							<p>Opps...No Product to Show</p>
						</section>
					)}
				</section>
			</main>
		</>
	);
};

export default ProductList;
