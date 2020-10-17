import {createStore, applyMiddleware } from 'redux';
import {persistStore} from 'redux-persist';
import logger  from 'redux-logger';
import createSagaMiddlware from 'redux-saga'
import { fetchCollectionsStart}  from './shop/shop.saga'

import rootReducer from './root-reducer';
import rootSaga from './root-saga';
const sagaMiddleware = createSagaMiddlware();
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
// export persisted version of store
export default {store,persistor};