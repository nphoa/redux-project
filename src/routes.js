import React, { Component } from 'react';
import CartPage from './Page/Cart_Page';
import NotFoundPage from './Page/PageNotFound';
import HomePage from './Page/HomePage';
import TranningPage from './Page/TranningPage';
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
		path: '',
		exact: false,
		main: () => <NotFoundPage />	
	}

];

export default routes;