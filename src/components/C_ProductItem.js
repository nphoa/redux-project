import React, { Component } from 'react';



class C_ProductItem extends Component {
  render() {
    var {product} = this.props;
    return (
          <tr>
                                  <td>{product.id}</td>
                                  <td>{product.code}</td>
                                  <td>{product.name}</td>
                                  <td>{product.price}</td>
                                  <td>
                                      <span className="label label-warning">Kích hoạt</span>
                                  </td>
                                  <td>
                                     <button type="button" className="btn btn-success">Thêm</button>
                                      <button type="button" className="btn btn-danger">Sửa</button>
                                  </td>
                                </tr>
            
    );
  }
}

export default C_ProductItem;
