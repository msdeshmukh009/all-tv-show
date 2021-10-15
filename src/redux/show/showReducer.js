import {FETCH_SHOWS_REQUEST,
FETCH_SHOWS_SUCCESS,
FETCH_SHOWS_FAILURE} from './showActionTypes';

const initialState = {
    loading: true,
    shows: null,
    error: null
}

const reducer = (state=initialState,action) =>{
    switch(action.type){
        case FETCH_SHOWS_REQUEST: return{
            ...state,
            loading:true
        }
        case FETCH_SHOWS_SUCCESS: return{
            loading:false,
            shows:action.payload,
            error:null
        }
        case FETCH_SHOWS_FAILURE: return{
            loading: false,
            shows:null,
            error:action.payload
        }
        default: return state
    }
}

export default reducer;