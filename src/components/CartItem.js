import React, { Component } from 'react';
import * as message from '../constants/Message';

class CartItem extends Component {
  
  // constructor(props){
  //   super(props);
  //   this.state={
  //       product:{
  //         id:1,
  //         name:'',
  //         description:'',
  //         image:'',
  //         inventory:'',
  //         price:1,
  //         rating:1
  //       },
  //       quantity:1

  //   };
  // }
  // componentWillMount(){
  //   if(this.props.item){
  //     this.setState({
  //           product:{
  //               id:this.props.item.product.id,
  //               name:this.props.item.product.name,
  //               description:this.props.item.product.description,
  //               image:this.props.item.product.image,
  //               inventory:this.props.item.product.inventory,
  //               price:this.props.item.product.price,
  //               rating:this.props.item.product.rating
  //           },
  //           quantity:this.props.item.quantity
  //       });
  //   }
    
  // }
  // componentWillReceiveProps(nextProps){
  //   console.log(nextProps);
  //   if(nextProps && nextProps.item){
  //       this.setState({
  //           product:{
  //               id:nextProps.item.product.id,
  //               name:nextProps.item.product.name,
  //               description:nextProps.item.product.description,
  //               image:nextProps.item.product.image,
  //               inventory:nextProps.item.product.inventory,
  //               price:nextProps.item.product.price,
  //               rating:nextProps.item.product.rating
  //           },
  //           quantity:nextProps.item.quantity
  //       });
  //   };
  // }
  onAddProduct = (type,product) => {
    //alert(id);
    // console.log(type);
    this.props.onAddProduct(type,product);
    this.props.onChangeMessage(message.MSG_UPDATE_TO_CART_SUCCESS);
  }
  onDeleteCart = (product) => {
    this.props.onDeleteCart(product);
     this.props.onChangeMessage(message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);

  }
  render() {
    let {item} = this.props;
    //console.log(item);
    //let {product,quantity} = this.state;
    //console.log(product);
    //console.log(quantity);
 
    return (
         
         <tr>
                      <th scope="row">
                        <img src={item.product.image}  className="img-fluid z-depth-0" />
                      </th>
                      <td>
                        <h5>
                          <strong>{item.product.name}</strong>
                        </h5>
                      </td>
                      <td>{item.product.price} </td>
                      <td className="center-on-small-only">
                        <span className="qty">{item.quantity}</span>
                        <div className="btn-group radio-group" data-toggle="buttons">
                          <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light" onClick={(e) => this.onAddProduct('sub',item.product)}>
                            <a>—</a>
                          </label>
                          <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light" onClick={(e) => this.onAddProduct('add',item.product)}>
                            <a>+</a>
                          </label>
                        </div>
                      </td>
                      <td>{item.product.price * item.quantity}</td>
                      <td>
                        <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top" onClick={()=>this.onDeleteCart(item.product)}>
                          X
                        </button>
                      </td>
                    </tr>   
    );
  }
}

export default CartItem;





