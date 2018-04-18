import React, { Component } from 'react';
import{connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as message from '../constants/Message';
import Message from '../components/Message';

class MessageContainer extends Component {



  render() {
    let {message} =  this.props;

    return (
      <Message message = {message}/>

    );
  }
}

const mapStateToProps = (state) => {
  return{
    message:state.message
  }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
      
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MessageContainer);
