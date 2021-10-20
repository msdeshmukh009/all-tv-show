import {FETCH_SHOWS_REQUEST,
FETCH_SHOWS_SUCCESS,
FETCH_SHOWS_FAILURE,
SEARCH_MOVIES,
FETCH_SHOW} from './showActionTypes';

const initialState = {
    text:"",
    loading: true,
    shows: null,
    show:null,
    error: null
}

const reducer = (state=initialState,action) =>{
    switch(action.type){
        case SEARCH_MOVIES: return{
            ...state,
            text:action.payload,
            loading:false
        }
        case FETCH_SHOWS_REQUEST: return{
            ...state,
            loading:true
        }
        case FETCH_SHOW: return{
            ...state,
            loading:false,
            show:action.payload
        }
        case FETCH_SHOWS_SUCCESS: return{
            ...state,
            loading:false,
            shows:action.payload,
            error:null
        }
        case FETCH_SHOWS_FAILURE: return{
            ...state,
            loading: false,
            shows:null,
            error:action.payload
        }
        default: return state
    }
}

export default reducer;