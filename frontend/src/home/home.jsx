import './home.scss';

import React, { Component } from 'react';

import ApostaLista from '../aposta/apostaLista';
import MemeLista from '../meme/memeLista';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { apostas: [
      { _id: '123', titulo: 'Aposta teste 1' },
      { _id: '456', titulo: 'Aposta teste 2' },
      { _id: '789', titulo: 'Aposta teste 3' }
    ], memes: [
      { _id: '123', titulo: 'Meme teste 1' },
      { _id: '456', titulo: 'Meme teste 2' },
      { _id: '789', titulo: 'Meme teste 3' },
      { _id: '012', titulo: 'Meme teste 4' }
    ]};
  }

  render() {
    return (
      <section className='home'>
        <div className='ultimas-apostas'>
          <h2>Últimas Apostas</h2>
          <ApostaLista apostas={this.state.apostas} />
        </div>
        <div className='ultimos-memes'>
          <h2>Últimos Memes</h2>
          <MemeLista memes={this.state.memes} />
        </div>
      </section>
    );
  }
}

export default Home;
