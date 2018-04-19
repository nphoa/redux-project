import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';


class LoginPage extends Component {
  constructor(props){
  	super(props);
  	this.state = {
  		username:'',
  		password:''
  	};
  }
  onChange = (e) =>{
  	console.log(e.target.value);
  	this.setState({
  		[e.target.name] : e.target.value
  	});
  }
  onSubmit = (e) => {
  	e.preventDefault();
  	if(this.state.username ==='admin' && this.state.password ==='admin'){
  		localStorage.setItem('user',JSON.stringify({
  			username:this.state.username,
  			password:this.state.password	
  		}));
  	}
  }
  render() {
  	var userLogin = localStorage.getItem('user');
  	if(userLogin!==null){
  		return <Redirect to="/products"/>
  	}
    return (
        <div className="row">
			<div className="col-md-12">
				<form action="" method="POST" onSubmit ={this.onSubmit}>
					<legend>Đăng nhập</legend>
					<div className="form-group">
						<label>Username</label>
						<input type="text" className="form-control" name="username" value={this.props.username} onChange={this.onChange}/>
						
					</div>
					<div className="form-group">
						<label>Password</label>
						<input type="password" className="form-control" name="password" value={this.props.password} onChange={this.onChange}/>
						
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
		</div>
    );
  }
}

export default LoginPage;
