import React, { Component } from 'react';



class CartResult extends Component {
  constructor(props){
    super(props);
    this.state={
        sum:0
    };
  }
  showTotalAmount = (cart) =>{
      var total = 0;
      for (var i = 0; i < cart.length; i++) {
          total += cart[i].product.price * cart[i].quantity;
      }
      return total;
  }
  componentWillMount(){
    
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps);
    if(nextProps && nextProps.cart){
      this.setState({
        sum:this.showTotalAmount(nextProps.cart)
      });
    }
  }
  render() {
    var {cart} = this.props;
    console.log(this.showTotalAmount(cart));
    return (
        
         <tr>
                      <td colSpan={3} />
                      <td>
                        <h4>
                          <strong>Tổng Tiền</strong>
                        </h4>
                      </td>
                      <td>
                        <h4>{this.showTotalAmount(cart)}</h4>
                      </td>
                      <td colSpan={3}>
                        <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
                          <i className="fa fa-angle-right right" />
                        </button>
                      </td>
                    </tr>    
    );
  }
}

export default CartResult;
