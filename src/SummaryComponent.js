import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchShows } from "./redux";
const SummaryComponent = ({showData,fetchshowData}) => {
    useEffect(()=>{
        fetchshowData();
        console.log(showData)
    },[])
    return showData.loading ? (<h2>Loading</h2>)
           : showData.error ? (<h2>{showData.error}</h2>)
           : (
               <div>
                   <h2>List</h2>
                   <div>
                   {
                       showData && showData.shows &&
                       showData.map(show => <p>{show.show.name}</p>) 
                   }
                   </div>
               </div>
           ) 
}
const mapStateToProps = state => {
    return {
      showData: state.shows
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      fetchshowData: () => dispatch(fetchShows())
    }
  } 
export default connect(mapStateToProps,mapDispatchToProps)(SummaryComponent);