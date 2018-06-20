import { createStore, combineReducers } from 'redux';
import countriesViewer from './reducer.js';

const rootReducer = combineReducers({
    countriesViewer,
});
const store = createStore(rootReducer);

export default store;