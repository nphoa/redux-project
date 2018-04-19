import React, { Component } from 'react';
import C_ProductList from './C_ProductList';


class C_Product extends Component {
  render() {
    return (
        <div className="container">
  			<div className="row">
            <div className="col-md-12">
                <button type="button" className="btn btn-info">Thêm sản phẩm</button>
              	<C_ProductList/>

            </div>
        </div>
			
		  </div>
            
    );
  }
}

export default C_Product;
