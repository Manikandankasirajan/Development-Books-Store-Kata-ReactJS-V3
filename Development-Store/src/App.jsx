import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import ProductList from "./components/ProductList/ProductList";
import BOOK_LIST from "./data/productsDetails";
import Cart from "./components/Cart/Cart";

const App = () => {
	return (
		<>
			<NavBar />
			<ProductList productList={BOOK_LIST} />
			<Cart />
		</>
	);
};

export default App;
