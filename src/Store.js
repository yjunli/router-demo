import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer as logreducer } from './Log/index'

const reducer = combineReducers({
    log: logreducer
});

const middlewares = [thunk];

const storeEnhancers = compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default createStore(reducer, {}, storeEnhancers);