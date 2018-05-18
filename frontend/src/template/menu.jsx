import './_template.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default props => (
  <header>
    <img alt='logo' className='logo' src='/images/logo.png'/>
    <img alt='fulltext-logo' className='fulltext-logo' src='/images/fulltext_logo.png'/>
    <nav className='header-navbar'>
      <ul>
        <li>CRIAR APOSTA</li>
        <li>CRIAR MEME</li>
        <li>CRIAR FRASE</li>
      </ul>
    </nav>
  </header>
  /* </header>
  <nav className='navbar'>
    <div className='container'>
      <ul>
        <li><NavLink to='/todos'>Tarefas</NavLink></li>
        <li><NavLink to='/about'>Sobre</NavLink></li>
      </ul>
    </div>
  </nav> */
);
