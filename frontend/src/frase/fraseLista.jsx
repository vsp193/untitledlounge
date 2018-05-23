import './fraseLista.scss';

import React from 'react';

export default props => {
  const renderRows = () => {
    const frases = props.frases || [];

    return frases.map(frase => (
      <article className='frase' key={frase._id}>
        <img alt='userpic' src='/images/default_user_pic.png'/>
        <p>"{frase.titulo}"</p>
        <span>{frase.autor}</span>
      </article>
    ));
  };

  return (
    <section className='frase-lista'>
      {renderRows()}
      <div className='carregar-mais-frases'>Carregar mais frases</div>
    </section>
  );
};
