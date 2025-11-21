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
	},
});

export const { addBookToCart } = cartSlice.actions;

export default cartSlice.reducer;
