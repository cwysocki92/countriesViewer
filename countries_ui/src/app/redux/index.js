import { 
    createStore, 
    combineReducers,
    applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import persistState from 'redux-localstorage';
import countriesViewer from './reducer.js';

const rootReducer = combineReducers({
    countriesViewer,
});

const store = createStore(rootReducer, applyMiddleware(thunk), persistState());

export default store;