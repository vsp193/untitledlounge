import './_template.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default props => (
  <nav className='navbar'>
    <div className='container'>
      <ul>
        <li><NavLink to='/todos'>Tarefas</NavLink></li>
        <li><NavLink to='/about'>Sobre</NavLink></li>
      </ul>
    </div>
  </nav>
);
