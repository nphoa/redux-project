import React, { Component } from 'react';
import CartPage from './Page/Cart_Page';
import NotFoundPage from './Page/PageNotFound';
import HomePage from './Page/HomePage';
import TranningPage from './Page/TranningPage';
import ProductPage from './Page/ProductPage';
import ProductDetailPage from './Page/ProductDetailPage';
import LoginPage from './Page/LoginPage';
import Products from './Page/Products';
const routes = [
	{
		path: '/',
		exact: true,
		main: () => <HomePage />	
	},
	{
		path: '/cart',
		exact: false,
		main: () => <CartPage />	
	},
	{
		path: '/tranning',
		exact: false,
		main: () => <TranningPage />
	},
	{
		path: '/products',
		exact: true,
		main: ({match}) => <ProductPage match={match}/>	
	},
	{
		path: '/products/:slug',
		exact: true,
		main: ({match}) => <ProductDetailPage match={match}/>	
	},
	{
		path: '/login',
		exact: true,
		main: () => <LoginPage />	
	},
	{
		path: '/danhsachsanpham',
		exact:true,
		main: () => <Products />	
	},
	{
		path: '',
		exact: false,
		main: () => <NotFoundPage />	
	}

];

export default routes;