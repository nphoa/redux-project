import React, { Component } from 'react';
import {Route,NavLink} from 'react-router-dom';
import ManageProductContainer from '../containers/ManageProductContainer';

class Products extends Component {
  

  render() {
  	
  
    return (
      <ManageProductContainer/>
    );
  }
}

export default Products;
