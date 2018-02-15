import React from 'react';

export default props => (
  <div id='todo-form'>
		<h1>Form</h1>
    <input placeholder='Digite o título da sua tarefa'
      onChange={props.handleChange}
      value={props.description} />
    <button onClick={props.handleSearch}>Pesquisar</button>
    <button onClick={props.handleAdd}>Adicionar</button>
	</div>
);
