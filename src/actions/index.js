import * as types from '../constants/ActionType';

export const addToCart = (product,quantity) => {
	return{
		type:types.ADD_TO_CART,
		product:product,
		quantity:quantity
	}
}
export const addProduct = (typeHandle,product) => {
	return{
		type:types.ADD_PRODUCT,
		typeHandle:typeHandle,
		product:product
	}
}

export const deleteCart = (product) => {
	return {
		type:types.DELETE_CART,
		product:product
	}
}

export const saveMessage = (message) => {
	return {
		type:types.SAVE_MESSAGE,
		message:message
	}
}

export const fetchAllProduct = (products) => {
	return {
		type:types.FETCH_ALL_PRODUCT,
		products:products
	}
}