import React from "react";
import Product from "../Product/Product";

const ProductList = ({ productList }) => {
	return (
		<>
			<main>
				<section className="p-12 bg-gray-200">
					<h2 className="mb-8 px-5 text-xl font-bold text-center">
						Books Available
					</h2>
					{productList.length === 0 ? (
						<section>
							<p>Opps...No Product to Show</p>
						</section>
					) : (
						<section className="grid grid-cols-1 grid-flow-row gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
							{productList.map((book) => {
								return (
									<section key={book.id} className="w-fit mx-auto">
										<Product book={book} />
									</section>
								);
							})}
						</section>
					)}
				</section>
			</main>
		</>
	);
};

export default ProductList;
