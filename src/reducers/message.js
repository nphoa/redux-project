import * as types from '../constants/ActionType';



var initialState  = "";

var myReducer = (state = initialState,action) => {
	switch (action.type) {
		
		case types.SAVE_MESSAGE:
			console.log(action);
			state = action.message;
			return state;
			break;
		default:
			return state;
			break;
	}
};

export default myReducer