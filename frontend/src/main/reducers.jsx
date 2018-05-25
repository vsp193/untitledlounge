import { combineReducers } from 'redux';
import homeReducer from '../home/homeReducer';
import apostaReducer from '../aposta/apostaReducer';

const rootReducer = combineReducers({
  home: homeReducer,
  aposta: apostaReducer
});

export default rootReducer;
