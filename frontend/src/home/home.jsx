import './home.scss';

import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getData } from './homeActions';

import ApostaLista from '../aposta/apostaLista';
import ApostaDetalhe from '../aposta/apostaDetalhe';
import MemeLista from '../meme/memeLista';
import FraseLista from '../frase/fraseLista';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getData();
  }

  componentWillMount() {
    this.setState({
      isApostaModalOpen: false,
      apostaDetalhe: {}
    });
  }

  openApostaModal(aposta) {
    this.setState({
      isApostaModalOpen: true,
      apostaDetalhe: aposta}
    );
  }

  render() {
    return (
      <section className='home'>
        <div className='ultimas-apostas'>
          <h2>Últimas Apostas</h2>
          <ApostaLista
            apostas={this.props.apostas}
            handleApostaClick={this.openApostaModal.bind(this)} />
          <ApostaDetalhe
            isOpen={this.state.isApostaModalOpen}
            aposta={this.state.apostaDetalhe} />
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
