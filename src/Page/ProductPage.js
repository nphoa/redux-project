import React, { Component } from 'react';
import {Route,NavLink} from 'react-router-dom';
import ProductDetailPage from './ProductDetailPage';

class ProductPage extends Component {
  

  render() {
  	var products = [
  		{
  			id:1,
  			name:'Samsung S8+',
  			slug:'samsung1',
  			price:17000000
  		},
  		{
  			id:2,
  			name:'Samsung S9+',
  			slug:'samsung2',
  			price:19000000
  		},
  		{
  			id:1,
  			name:'Samsung Note8',
  			slug:'samsung3',
  			price:24000000
  		}
  	];
  	var {match} = this.props;
  	
  	var result = products.map((product, index) => {
  		return (
  			<NavLink to ={`${match.url}/${product.slug}`} key={index} >
	  			<li className="list-group-item">
	  				{product.id}  --- {product.name} --- {product.price}
	  			</li>
  			</NavLink>
  		);
  	});
    return (
        <div className ="container">
			<h1>Danh sách sản phẩm</h1>
			<div className="row">
				<ul className="list-group">
					{result}

				</ul>
			</div>
			
		</div>
    );
  }
}

export default ProductPage;
