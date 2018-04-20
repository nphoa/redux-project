import React, { Component } from 'react';
import{connect} from 'react-redux';
import * as Message from '../constants/Message';
import * as actions from '../actions/index';
import C_ProductList from '../components/C_ProductList';
import C_Product from '../components/C_Product';
import callApi from '../API/apiCaller';
import * as urls from '../API/URL';

class ManageProductContainer extends Component {

  constructor(props){
    super(props);
  }
  componentDidMount(){
    console.log('componentDidMount');
    callApi(urls.GET_ALL_PRODUCT,'GET',null).then(res=>{
        this.props.fetchAllProduct(res.data);
    });

  }
  render() {
    console.log('render');
    let {products} =  this.props;

    return (
      <C_Product products = {products}/>
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
      fetchAllProduct:(products)=>{
        dispatch(actions.fetchAllProduct(products));
      }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ManageProductContainer);
