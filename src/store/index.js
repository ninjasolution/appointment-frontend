import { applyMiddleware, combineReducers, compose,createStore,} from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import { AuthReducer } from './reducers/AuthReducer';
import GlobalSettingReducer from './reducers/GlobalSettingReducer';

const asyncDispatchMiddleware = store => next => action => {
    let syncActivityFinished = false;
    let actionQueue = [];

    function flushQueue() {
        actionQueue.forEach(a => store.dispatch(a)); // flush queue
        actionQueue = [];
    }

    function asyncDispatch(asyncAction) {
        actionQueue = actionQueue.concat([asyncAction]);

        if (syncActivityFinished) {
            flushQueue();
        }
    }

    const actionWithAsyncDispatch =
        Object.assign({}, action, { asyncDispatch });

    const res = next(actionWithAsyncDispatch);

    syncActivityFinished = true;
    flushQueue();

    return res;
};

const middlewares = [thunk, asyncDispatchMiddleware];
let composeEnhancers = compose;

if(!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // middlewares.push(createLogger());
    composeEnhancers = composeWithDevTools
}

const middleware = applyMiddleware(...middlewares);


const reducers = combineReducers({
    auth: AuthReducer,
    globals: GlobalSettingReducer
});

export default createStore(reducers, undefined,  composeEnhancers(middleware));
