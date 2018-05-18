import './main.scss';

import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Menu from '../template/menu';
import Todo from '../todo/todo';
import About from '../about/about';

export default props => (
  <div className='container'>
		<Menu></Menu>
		<h1>Untitled Lounge</h1>
		{/* <Menu />
		<Switch>
			<Route path='/todos' exact component={Todo} />
			<Route path='/about' component={About} />
			<Redirect to='/todos' />
		</Switch> */}
  </div>
);