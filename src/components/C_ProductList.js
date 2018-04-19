import React, { Component } from 'react';
import C_ProductItem from './C_ProductItem';


class C_ProductList extends Component {
  showListItem = (products)=>{
    var result = null;
    if(products && products.length > 0){
        result = products.map((product, index) => {
          return <C_ProductItem key  = {index} product = {product}/>;
        })
    }
    return result;
  }
  render() {
    return (
          <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Danh sách sản phẩm</h3>
                    </div>
                    <div className="panel-body">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                  <th>STT</th>
                                  <th>Mã</th>
                                  <th>Tên</th>
                                  <th>Gía</th>
                                  <th>Trạng thái</th>
                                  <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.showListItem(this.props.products)}
                            </tbody>
                        </table>
                    </div>
                </div>
            
    );
  }
}

export default C_ProductList;
