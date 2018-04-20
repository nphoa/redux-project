import React, { Component } from 'react';
import WOW from 'wow.js';

class C_AddProduct extends Component {
  constructor(props){
    super(props);
    this.state = {
      mang: ["1"]
    }
  }
  componentDidMount(){
    //Run after render view

  }
  componentWillMount(){
      //Run before render view
     new WOW().init();
  }
  render() {
    return (
        <div className="row">
            <div className="col-md-6">
                
                <div className="wow fadeInDown">
                  <h2 style={{color: 'blue'}}>Thêm sản phẩm</h2>
                <form>
                    <div className="form-group">
                      <label>Mã sản phẩm:</label>
                      <input type="text" className="form-control" name="code"/>
                    </div>
                    <div className="form-group">
                      <label>Tên sản phẩm:</label>
                      <input type="text" className="form-control"  name="name"/>
                    </div>
                    <div className="form-group">
                      <label>giá sản phẩm:</label>
                      <input type="number" className="form-control" name="price"/>
                    </div>
                    <div className="form-group">
                      <label>Tồn kho:</label>
                      <input type="number" className="form-control" name="inventory"/>
                    </div>
                    <div className="form-group">
                      <label>Mô tả:</label>
                      <input type="textarea" className="form-control" name="description"/>
                    </div>
                    <div className="form-group">
                      <lable>sdfsdf</lable>
                      <select>
                      {
                        this.state.mang.map((item,index)=>{
                          return <option selected={true} key={index} value={item}>{item}</option>
                        })
                      }
                      </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button> 
                </form>

                </div>
            </div>
          
        </div>
    );
  }
}

export default C_AddProduct;

