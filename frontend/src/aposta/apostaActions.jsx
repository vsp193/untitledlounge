import axios from 'axios';

const URL = 'http://localhost:3003/api/apostas';

export const actions = ({
  GET_APOSTAS: 'GET_APOSTAS'
});

export const getApostas = () => {
  return (dispatch, getState) => {
    axios.get(`${URL}`)
      .then(resp => dispatch({
        type: actions.GET_APOSTAS,
        payload: resp.data
      }));
  };
}
