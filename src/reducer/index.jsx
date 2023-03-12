import { combineReducers } from 'redux';
import infoModalReducer from './infoModalReducer';
import detailModalReducer from './detailModalReducer';

const rootReducer = combineReducers({
    infoModalState: infoModalReducer,
    detailModalState: detailModalReducer
});

export default rootReducer;