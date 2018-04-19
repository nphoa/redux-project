import React, { Component } from 'react';
import{connect} from 'react-redux';
import * as Message from '../constants/Message';
import * as actions from '../actions/index';
import C_ProductList from '../components/C_ProductList';

class ManageProductContainer extends Component {

  render() {
    let {products} =  this.props;

    return (
      <C_ProductList products = {products}/>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    products:state.product
  }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
      
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ManageProductContainer);
