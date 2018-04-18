import * as types from '../constants/ActionType';



var initialState  = [
	{
		id:1,
		name:'Samsung S7',
		image:'https://www.vodafone.co.uk/cs/groups/public/documents/images/vfcon088401.jpg',
		description:'Demo',
		price:500,
		inventory:10,
		rating:4
	},
	{
		id:2,
		name:'Samsung S7 eldge',
		image:'https://www.vodafone.co.uk/cs/groups/public/documents/images/vfcon088401.jpg',
		description:'Demo',
		price:100,
		inventory:20,
		rating:5
	},
	{
		id:3,
		name:'Samsung S8',
		image:'https://www.vodafone.co.uk/cs/groups/public/documents/images/vfcon088401.jpg',
		description:'Demo',
		price:1200,
		inventory:30,
		rating:4
	}
];

var myReducer = (state = initialState,action) => {
	switch (action.type) {
		
		
		default:
			return state;
			break;
	}
};

export default myReducer