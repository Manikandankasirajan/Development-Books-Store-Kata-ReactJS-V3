import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: {},
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addBookToCart: (state, action) => {
			state.value[action.payload] = (state.value[action.payload] || 0) + 1;
		},
		reduceBookQuantityFromCart: (state, action) => {
			state.value[action.payload] = state.value[action.payload] - 1;
		},
		removeBookFromCart: (state, action) => {
			delete state.value[action.payload];
		},
		removeAllFromCart: (state) => {
			state.value = {};
		},
	},
});

export const {
	addBookToCart,
	reduceBookQuantityFromCart,
	removeBookFromCart,
	removeAllFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
