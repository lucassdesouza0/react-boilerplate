import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "./ducks";
import rootSagas from "./sagas";

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

const composer =  compose(applyMiddleware(...middlewares));

const store = createStore(reducers, composer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

sagaMiddleware.run(rootSagas);

export default store;
