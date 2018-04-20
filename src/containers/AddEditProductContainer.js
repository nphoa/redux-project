import React, { Component } from 'react';
import C_AddProduct from '../components/C_AddProduct';
import{connect} from 'react-redux';
class AddEditProductContainer extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    

  }
 
  render() {
    return (
        <C_AddProduct />
    );
  }
}

const mapStateToProps = (state) => {
  return{
    
  }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
     
      
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddEditProductContainer);
