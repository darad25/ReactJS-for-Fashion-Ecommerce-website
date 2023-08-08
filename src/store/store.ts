import { compose, createStore, applyMiddleware, Middleware } from 'redux';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import createSagaMiddleware from '@redux-saga/core';

import { rootSaga } from './root-saga';

// import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

export type RootState = ReturnType<typeof rootReducer>;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

type ExtendedPersistConfig = PersistConfig<RootState> & {
  whitelist: (keyof RootState) [];
};

const persistConfig: ExtendedPersistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
}; 

const sagaMiddleware = createSagaMiddleware(); 

const persistedReducer = persistReducer(persistConfig, rootReducer);

// to hide our things from logging in developer tools you can change this to production, when you want to start production
const middleWares = [ process.env.NODE_ENV !== 'production' && logger,
  sagaMiddleware  
].filter((middleware): middleware is Middleware => Boolean(middleware));
// boolean would filter out anything thats false and not true
 
// install redux dev tools extension in chrome 
//    this means that use redux dev tools extension if not available use use our normal compose from redux lib
const composeEnhancer = 
    (process.env.NODE_ENV !== 'production' && 
       window && 
       window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || 
    compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);  