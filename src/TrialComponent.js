import React from "react";
import { useEffect } from "react";
import {connect} from 'react-redux';
import { fetchShows } from "./redux";
import { useParams } from "react-router"; 
import useFetch from "./useFetch";


const TrialComponent = ({showData,fetchShows}) => {
    useEffect(()=>{
        fetchShows()
        console.log(showData)
    },[])
    const { id } = useParams();
   let show = showData && showData.filter((item) => item.show.id === Number(id));
    console.log(showData && show[0])
    return (
        <div>
        <h2>Summary</h2>
        {
            showData && <div>
                <h1>{show[0].show.name}</h1>
            </div>
            
        }
        </div>
        
    )
    

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