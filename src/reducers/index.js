import{combineReducers} from 'redux';
import product from './product';
import cart from './cart';
import message from './message';
const appReducers = combineReducers({
	product:product,
	cart:cart,
	message:message
});

export default appReducers