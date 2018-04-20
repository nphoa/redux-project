import * as types from '../constants/ActionType';

// import * as api from '../API/Product';

var initialState  = [
	{
		id:1,
		code:'ss',
		name:'Samsung S7',
		image:'https://www.vodafone.co.uk/cs/groups/public/documents/images/vfcon088401.jpg',
		description:'Demo',
		price:500,
		inventory:10,
		rating:4,
		status:true
	},
	{
		id:2,
		code:'ss',
		name:'Samsung S7 eldge',
		image:'https://www.vodafone.co.uk/cs/groups/public/documents/images/vfcon088401.jpg',
		description:'Demo',
		price:100,
		inventory:20,
		rating:5,
		status:true
	},
	{
		id:3,
		code:'ss',
		name:'Samsung S8',
		image:'https://www.vodafone.co.uk/cs/groups/public/documents/images/vfcon088401.jpg',
		description:'Demo',
		price:1200,
		inventory:30,
		rating:4,
		status:true
	}
];

var myReducer = (state = initialState,action) => {
	switch (action.type) {
		case types.FETCH_ALL_PRODUCT :
			state = action.products;
			return [...state];
			break;
		
		default:
			//console.log(api.getAllProduct());
			return state;
			break;
	}
};

export default myReducer