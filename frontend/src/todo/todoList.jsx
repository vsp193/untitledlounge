import React from 'react';

export default props => {
  const renderRows = () => {
    const list = props.list || [];

    return list.map(todo => (
      <tr key={todo._id}>
        <td>{todo.description}</td>
        {todo.done ? 
          <td><button onClick={() => props.handleMarkAsPending(todo)}>Desconcluir</button></td> :
          <td><button onClick={() => props.handleMarkAsDone(todo)}>Concluir</button></td>
        }
        <td><button onClick={() => props.handleRemove(todo._id)}>Remover</button></td>
      </tr>
    ));
  };

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  );
};
