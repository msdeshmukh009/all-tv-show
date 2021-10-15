//import axios from 'axios';
import {FETCH_SHOWS_REQUEST,
    FETCH_SHOWS_SUCCESS,
    FETCH_SHOWS_FAILURE} from './showActionTypes';

export const fetchShowsRequest = () =>{
    return{
        type:FETCH_SHOWS_REQUEST
    }
}
export const fetchShowsSuccess = (shows) =>{
    return{
        type:FETCH_SHOWS_SUCCESS,
        payload:shows
    }
}
export const fetchShowsFailure= (error) =>{
    return{
        type:FETCH_SHOWS_FAILURE,
        payload:error
    }
}

// export const fetchShows = () =>{
//     return (dispatch) =>{
//         dispatch(fetchShowsRequest)
//         axios.get('https://api.tvmaze.com/search/shows?q=all')
//             .then(response => {
//                 const shows = response.data;
//                 dispatch(fetchShowsSuccess(shows))
//             })
//             .catch(error => {
//                 dispatch(fetchShowsFailure(error.message))
//             })
//     }
// }

export const fetchShows = () =>{
    return (dispatch) =>{
        dispatch(fetchShowsRequest)
        fetch('https://api.tvmaze.com/search/shows?q=all')
        .then(response => {
            if(!response.ok){
                throw Error("could not fetch the data for that endpoint")
            }
            return response.json()})
        .then(data => {
            dispatch(fetchShowsSuccess(data))
        })
        .catch(error => {
            dispatch(fetchShowsFailure(error.message))
        })
    }
}