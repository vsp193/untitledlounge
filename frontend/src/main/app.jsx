import './main.scss';

import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Menu from '../template/menu';
import Home from '../home/home';
import Aposta from '../aposta/aposta';

export default props => (
  <div className='container'>
		<Menu></Menu>
		<Switch>
			<Route path='/' exact component={Home} />
      <Route path='/aposta' exact component={Aposta} />
			<Redirect to='/' />
		</Switch>
  </div>
);
