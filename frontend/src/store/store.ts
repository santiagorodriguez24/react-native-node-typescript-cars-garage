import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // necesary to use redux devtools extension
import createSagaMiddleware from 'redux-saga';

import rootReducer from 'store/reducers';
import rootSagas from 'store/sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// mount it on the Store
const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
);

// then run the saga
sagaMiddleware.run(rootSagas);

export default store;
