import React, { createContext, useReducer, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import ProductList from "./components/ProductList/ProductList";
import BOOK_LIST from "./data/productsDetails";
import Cart from "./components/Cart/Cart";

export const CartContext = createContext();
const initialState = {};
const handlers = {
	AddToCart: (state, action) => ({
		...state,
		[action.payload]: (state[action.payload] | 0) + 1,
	}),
	reduceBookQuantityFromCart: (state, action) => ({
		...state,
		[action.payload]: state[action.payload] - 1,
	}),
	RemoveFromCart: (state, action) => {
		const { [action.payload]: _, ...rest } = state;
		return rest;
	},
	removeAllFromCart: (state) => ({}),
};

function cartReducer(state, action) {
	const handler = handlers[action.type];
	return handler ? handler(state, action) : state;
}
const App = () => {
	const [state, dispatch] = useReducer(cartReducer, initialState);
	const contextObject = { cart: state, cartAction: dispatch };
	const [showCart, setShowCart] = useState(false);
	return (
		<>
			<CartContext value={contextObject}>
				<NavBar setShowCart={setShowCart} />
				<ProductList productList={BOOK_LIST} />
				{showCart && <Cart setShowCart={setShowCart} />}
			</CartContext>
		</>
	);
};

export default App;
