import axios from 'axios';

const URL = 'http://localhost:3003/api/todos';

export const actions = ({
  DESCRIPTION_CHANGED: 'DESCRIPTION_CHANGED',
  TODO_SEARCHED: 'TODO_SEARCHED',
  DESCRIPTION_CLEARED: 'DESCRIPTION_CLEARED'
});

export const changeDescription = event => ({
  type: actions.DESCRIPTION_CHANGED,
  payload: event.target.value
});

export const search = () => {
  return (dispatch, getState) => {
    const description = getState().todo.description;
    const search = description ? `&description__regex=/${description}/` : '';

    axios.get(`${URL}?sort=-createdAt${search}`)
      .then(resp => dispatch({
        type: actions.TODO_SEARCHED,
        payload: resp.data
      }));
  };
}

export const add = (description) => {
  return (dispatch, getState) => {
    const description = getState().todo.description;

    axios.post(URL, { description })
      .then(resp => dispatch(clear()))
      .then(resp => dispatch(search()));
  };
}

export const markAsDone = (todo) => {
  return dispatch => {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
      .then(() => dispatch(search()));
  }
}

export const markAsPending = (todo) => {
  return dispatch => {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
      .then(() => dispatch(search()));
  }
}

export const remove = (id) => {
  return dispatch => {
    axios.delete(`${URL}/${id}`)
      .then(() => dispatch(search()));
  }
}

export const clear = () => {
  return { type: actions.DESCRIPTION_CLEARED };
}
