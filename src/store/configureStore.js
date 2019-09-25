import { createStore, applyMiddleware } from 'redux';
import { storageMiddleware } from './middleware/storageMiddleware';

import rootReducer from './reducers';

export default createStore(rootReducer, applyMiddleware(storageMiddleware));

