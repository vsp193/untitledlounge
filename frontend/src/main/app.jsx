import './main.scss';

import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from '../home/home';
import Menu from '../template/menu';

export default props => (
  <div className='container'>
		<Menu></Menu>
		<Switch>
			<Route path='/' exact component={Home} />
			<Redirect to='/' />
		</Switch>
  </div>
);
