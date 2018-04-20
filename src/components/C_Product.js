import React, { Component } from 'react';
import C_ProductList from './C_ProductList';
import {Link} from 'react-router-dom';

class C_Product extends Component {
  render() {
    return (
        <div className="container">
  			<div className="row">
            <div className="col-md-12">
                <Link to="/danhsachsanpham/add"  className="btn btn-info">Thêm sản phẩm</Link>
              	<C_ProductList products = {this.props.products}/>

            </div>
        </div>
			
		  </div>
            
    );
  }
}

export default C_Product;
