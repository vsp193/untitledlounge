import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TodoForm from './todoForm';
import TodoList from './todoList';

import { changeDescription, search, add, markAsDone, markAsPending, remove } from './todoActions';

class Todo extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.search();
  }

  render() {
    return (
      <div>
        <TodoForm
          handleChange={this.props.changeDescription}
          handleSearch={this.props.search}
          handleAdd={this.props.add}
          description={this.props.description} />

        <TodoList
          list={this.props.list}
          handleMarkAsDone={this.props.markAsDone}
          handleMarkAsPending={this.props.markAsPending}
          handleRemove={this.props.remove} />
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    description: state.todo.description,
    list: state.todo.list
  }
);

const mapDispatchToProps = dispatch => 
  bindActionCreators({
    changeDescription,
    search,
    add,
    markAsDone,
    markAsPending,
    remove
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
