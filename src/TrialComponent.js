import React, {useEffect} from "react";
import {connect} from 'react-redux';
import { fetchShows } from "./redux";


const TrialComponent = ({showData,fetchShows}) => {
    useEffect(()=>{
        fetchShows();
        console.log(showData)
    },[])
    return (
        <div>
            {showData.loading && <h2>Loading...</h2>}
            {showData.error && <h2>{showData.error}</h2>}
            {
                showData.map(show =>(
                  <div>
                      <h2>{show.show.name}</h2>
                  </div>  
                ))
            }
        </div>
    )
    // showData.loading ? (<h2>Loading...</h2>)
    // : showData.error ? (<h2>{showData.error}</h2>)
    // : (
    //     <div>
    //         <h2>All Tv Shows</h2>
    //         <div>
    //             {
    //                 showData && showData.shows && 
    //                 showData.shows.map(show =>  <h2>{show.show.name}</h2>)
    //             }
    //         </div>
    //     </div>
    // )

}
const mapStateToProps = (state) =>{
    return{
        showData:state.shows
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        fetchShows: ()=>dispatch(fetchShows())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TrialComponent);