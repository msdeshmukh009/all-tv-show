import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './show/showReducer';
const initialState ={};
const store = createStore(reducer,initialState,
    composeWithDevTools(applyMiddleware(thunk)))

export default store;