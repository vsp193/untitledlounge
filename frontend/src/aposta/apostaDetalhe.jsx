import './apostaDetalhe.scss';

import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export default props => {
  return (
    <section className='aposta-detalhe'>
      <Modal
        isOpen={props.isOpen}
        onAfterOpen={props.handleOpenModal}
        onRequestClose={props.handleCloseModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>{props.aposta.titulo}</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </section>
  );
};
