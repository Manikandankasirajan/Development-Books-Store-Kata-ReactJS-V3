import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import ProductList from "./components/ProductList/ProductList";
import BOOK_LIST from "./data/productsDetails";
import Cart from "./components/Cart/Cart";

const App = () => {
	const [showCart, setShowCart] = useState(false);
	return (
		<>
			<NavBar setShowCart={setShowCart} />
			<ProductList productList={BOOK_LIST} />
			{showCart && <Cart />}
		</>
	);
};

export default App;
