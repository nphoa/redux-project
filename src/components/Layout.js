import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import routes from '../routes';
import ProductDetailPage from '../Page/ProductDetailPage';
import ProductPage from '../Page/ProductPage';
class Layout extends Component {
  showContentRoute = (routes) =>{
    var result = null;
    if(routes.length >0){
        result = routes.map((route,index)=>{
            return (
                <Route
                    key = {index} 
                    path={route.path}
                    exact ={route.exact}
                    component={route.main}  
                />
            );
        });
    }
 
    return result;
  }
  render() {
    return (
       <div>
          
              <Header/>

              <main id="mainContainer">
                <div className="container">

                  
                  <Switch>
                    {this.showContentRoute(routes)}
                  </Switch>
               
                </div>
              </main>

              <Footer/>
          
       
      </div>

    );
  }
}

export default Layout;
