import React, { Component } from 'react';
import {Route,NavLink} from 'react-router-dom';


class ProductDetailPage extends Component {
  

  render() {
  
  	var {match} = this.props;
    console.log(match);
    return (
        <div className ="container">
          <div className="row">
            <div className="col-md-6">
                <h1>Sản phẩm chi tiết</h1>
                 <p>
                    {match.params.slug}  
                 </p>
            </div>
           
          </div>
			     
		  </div>
    );
  }
}

export default ProductDetailPage;
