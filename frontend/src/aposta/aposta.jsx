import '../aposta/aposta.scss';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getApostas } from './apostaActions';

import ApostaLista from '../aposta/apostaLista';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getApostas();
  }

  render() {
    return (
      <section className='aposta'>
        <h2>Apostas</h2>
        <ApostaLista apostas={this.props.apostas} />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  apostas: state.aposta.apostas
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getApostas
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
