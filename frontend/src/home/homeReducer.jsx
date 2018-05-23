const INITIAL_STATE = { apostas: [], memes: [], frases: [] };

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'GET_DATA':
      return {
        ...state,
        apostas: action.payload.apostas,
        memes: action.payload.memes,
        frases: action.payload.frases
      }
    default:
      return state;
  }
}
