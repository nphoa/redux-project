import React, { Component } from 'react';
import ProductsContainer from '../containers/ProductsContainer';
import CartContainer from '../containers/CartContainer';
import MessageContainer from '../containers/MessageContainer';


class CartPage extends Component {
  render() {
    return (
          <div>
            <ProductsContainer/>
            <MessageContainer/>
            <CartContainer/>
          </div> 
    );
  }
}

export default CartPage;
