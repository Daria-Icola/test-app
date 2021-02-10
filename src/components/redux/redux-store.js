import { combineReducers, createStore} from 'redux';
import {collectionPageReducer } from './collectionPageReducer'
import { formPageReducer } from './formPageReducer'


let reducers = combineReducers({
    FormPage: formPageReducer,
    CollectionPage: collectionPageReducer,
});



export const store = createStore(reducers);

window.__store__ = store;

