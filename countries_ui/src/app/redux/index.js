import { 
    createStore, 
    combineReducers,
    applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import countriesViewer from './reducer.js';

const rootReducer = combineReducers({
    countriesViewer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;