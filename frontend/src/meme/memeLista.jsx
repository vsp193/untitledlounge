import './memeLista.scss';

import React from 'react';

export default props => {
  const renderRows = () => {
    const memes = props.memes || [];

    return memes.map(meme => (
      <article className='meme' key={meme._id}>
        <img className='thumb' alt='meme' src={meme.imagemUrl}/>
        <div className='info'>
          <img className='userpic' alt='userpic' src='/images/default_user_pic.png'/>
          <p>{meme.titulo}</p>
        </div>
      </article>
    ));
  };

  return (
    <section className='meme-lista'>
      {renderRows()}
      <div className='carregar-mais-memes'>Carregar mais apostas</div>
    </section>
  );
};
