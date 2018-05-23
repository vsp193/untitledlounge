import './home.scss';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getData } from './homeActions';

import ApostaLista from '../aposta/apostaLista';
import MemeLista from '../meme/memeLista';
import FraseLista from '../frase/fraseLista';

class Home extends Component {
  constructor(props) {
    super(props);
    // this.state = { apostas: [
    //   { _id: '123', titulo: 'Aposta teste 1' },
    //   { _id: '456', titulo: 'Aposta teste 2' },
    //   { _id: '789', titulo: 'Aposta teste 3' },
    //   { _id: '012', titulo: 'Aposta teste 4' },
    //   { _id: '345', titulo: 'Aposta teste 5' }
    // ], memes: [
    //   { _id: '123', titulo: 'Meme teste 1' },
    //   { _id: '456', titulo: 'Meme teste 2' }
    // ], frases: [
    //   { _id: '123', titulo: 'Frase teste 1.' },
    //   { _id: '456', titulo: 'Frase teste 2.' },
    //   { _id: '789', titulo: 'Frase teste 3.' },
    //   { _id: '012', titulo: 'Frase teste 4.' }
    // ]};
  }

  componentWillMount() {
    this.props.getData();
  }

  render() {
    return (
      <section className='home'>
        <div className='ultimas-apostas'>
          <h2>Últimas Apostas</h2>
          <ApostaLista apostas={this.props.apostas} />
        </div>
        <div className='ultimos-memes'>
          <h2>Últimos Memes</h2>
          <MemeLista memes={this.props.memes} />
        </div>
        <div className='ultimas-frases'>
          <h2>Últimos Frases</h2>
          <FraseLista frases={this.props.frases} />
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  apostas: state.home.apostas,
  memes: state.home.memes,
  frases: state.home.frases
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getData
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
