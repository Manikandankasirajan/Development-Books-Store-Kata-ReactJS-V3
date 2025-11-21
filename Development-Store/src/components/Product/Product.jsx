import React from "react";

const Product = ({ book }) => {
	console.log(book);
	const { imgSrc: bookImg, title: bookTitle, price: bookPrice } = book;
	return (
		<>
			<section className="p-3 w-68 bg-white shadow-2xl hover:scale-105 transition delay-150 duration-300 ease-in-out cursor-pointer">
				<img className="w-62 h-72 mb-3" src={bookImg} alt={bookTitle} />
				<h3 className="mb-1 text-md font-bold text-black/75">{bookTitle}</h3>
			</section>
		</>
	);
};

export default Product;
