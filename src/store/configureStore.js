import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import mapReducer from '../reducers/map';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {

    // store creation
    const store = createStore(
        combineReducers({
            auth: authReducer,
            map:mapReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};

