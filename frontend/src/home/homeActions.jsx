import axios from 'axios';

const URL = 'http://localhost:3003/api/home';

export const actions = ({
  GET_DATA: 'GET_DATA'
});

export const getData = () => {
  return (dispatch, getState) => {
    axios.get(`${URL}`)
      .then(resp => dispatch({
        type: actions.GET_DATA,
        payload: resp.data
      }));
  };
}
