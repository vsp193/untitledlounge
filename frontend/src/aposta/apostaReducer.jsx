const INITIAL_STATE = { apostas: [] };

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'GET_APOSTAS':
      return {
        ...state,
        apostas: action.payload
      }
    default:
      return state;
  }
}
