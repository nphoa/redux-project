import * as types from '../constants/ActionType';
import * as actions from '../actions/index';

var data = JSON.parse(localStorage.getItem('cart'));
// var initialState  = [
// 	{
// 		product:{
// 			id:1,
// 			name:'Samsung S7',
// 			image:'https://www.vodafone.co.uk/cs/groups/public/documents/images/vfcon088401.jpg',
// 			description:'Demo',
// 			price:500,
// 			inventory:10,
// 			rating:4
// 		},
// 		quantity:5
// 	}
// ];	

var initialState  = (data) ? data : '';	
var myReducer = (state = initialState,action) => {
	var {product,quantity} = action;
	var index = -1;
	switch (action.type) {
		case types.ADD_TO_CART:
			index = findProductInCart(state,action.product);
			if(index !== -1){
				//var cloned_obj = { ...state[index]};
				//console.log(cloned_obj);
				state[index].quantity += quantity;
				
			}else{
				state.push({
					product,
					quantity
				});	
			}
			
			// var concat1 = state.concat(demo);
			// console.log(concat1);
			// state = concat1;
			
			localStorage.setItem('cart',JSON.stringify(state));

			actions.saveMessage("sadsadadasdada");

			return [...state];
			break;

		case types.ADD_PRODUCT:
			console.log(action);
			index = findProductInCart(state,action.product);
			if(action.typeHandle==='add'){
				if(index !== -1){
					state[index].quantity += 1;
				}
			}else{
				if(index !== -1){
					state[index].quantity -= 1;
				}
			}
			localStorage.setItem('cart',JSON.stringify(state));
			return [...state];
			break;

		case types.DELETE_CART:
			index = findProductInCart(state,action.product);
			if(index !== -1){
				 state.splice(index,1);
			}
			localStorage.setItem('cart',JSON.stringify(state));
			return [...state];
			break;
		default:
			return [...state];
			break;
	}
};

var findProductInCart = (cart,product) =>{
	var index = -1;
	if(cart.length > 0){
		for (var i = 0; i < cart.length; i++) {
			if(cart[i].product.id === product.id){
				index = i;
				break;
			}
		}
	}
	return index;
}
export default myReducer