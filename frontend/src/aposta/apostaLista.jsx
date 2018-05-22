import './apostaLista.scss';

import React from 'react';

export default props => {
  const renderRows = () => {
    const apostas = props.apostas || [];

    return apostas.map(aposta => (
      <article className='aposta' key={aposta._id}>
        <img alt='userpic' src='/images/default_user_pic.png'/>
        <p>{aposta.titulo}</p>
        <span>0 pessoas apostaram</span>
      </article>
    ));
  };

  return (
    <section className='aposta-lista'>
      {renderRows()}
      <div className='carregar-mais-apostas'>Carregar mais apostas</div>
    </section>
  );
};
