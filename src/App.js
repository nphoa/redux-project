import React, { Component } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';
import Message from './components/Message';
import Cart from './components/Cart';
import ProductsContainer from './containers/ProductsContainer';
import CartContainer from './containers/CartContainer';
import MessageContainer from './containers/MessageContainer';
import Layout from './components/Layout';
import {BrowserRouter ,Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      	<Layout/>
      </BrowserRouter>	
      
    );
  }
}

export default App;
