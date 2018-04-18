import React, { Component } from 'react';
import{connect} from 'react-redux';
import Products from '../components/Products';
import Product from '../components/Product';
import PropTypes from 'prop-types';
import Cart from '../components/Cart';
import * as Message from '../constants/Message';
import CartItem from '../components/CartItem';
import CartResult  from '../components/CartResult';
import * as actions from '../actions/index';

class CartContainer extends Component {
  showCartItem = (cart) => {
    
      var result = "";
      if(cart.length > 0){
        result = cart.map((item,index)=>{
            return (
                <CartItem
                   key  = {index}
                   item = {item}
                   onAddProduct = {this.props.onAddProduct}
                   onDeleteCart = {this.props.onDeleteCart}
                   onChangeMessage = {this.props.onChangeMessage}
                />
            );
        });
      }
      return result;
  };
  showTotalAmount = (cart) => {
      var result = null;
      if(cart.length > 0){
        result = <CartResult cart = {cart}/>
      }
      return result;
  };

  render() {
    let {cart} =  this.props;

    return (
      <Cart>
          {this.showCartItem(cart)}
          {this.showTotalAmount(cart)}
      </Cart>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    cart:state.cart
  }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
      onAddProduct: (typeHandle,product) => {
          dispatch(actions.addProduct(typeHandle,product));
      },
      onDeleteCart:(product) => {
        dispatch(actions.deleteCart(product));
      },
      onChangeMessage: (message) => {
        dispatch(actions.saveMessage(message));
      }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartContainer);
