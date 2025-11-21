import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ProductList from "./components/ProductList/ProductList";
import BOOK_LIST from "./data/productsDetails";

const App = () => {
	return (
		<>
			<NavBar />
			<ProductList productList={BOOK_LIST} />
		</>
	);
};

export default App;
