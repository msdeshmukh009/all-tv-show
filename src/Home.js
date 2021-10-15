import ShowList from "./ShowList";
// import { useContext } from "react";
// import { ShowContext } from "./ShowContext";
import Navbar from "./Navbar";
import React, {useEffect} from "react";
import {useSelector,useDispatch} from 'react-redux';
import { fetchShows } from "./redux";
import Summary from './Summary'
const Home = () => { 
const dispatch = useDispatch();
const showData = useSelector(state => state.shows);
useEffect(()=>{
    dispatch(fetchShows());
    
},[])


//console.log(showData)
    return ( <div className="home">
        <Navbar title="All Tv Shows" />
        {showData && showData.loading && <div>Loading...</div>}
        {showData && showData.error && <h2>{showData.error}</h2>}
        {showData && <ShowList props={showData}/>} 
        {/* {showData && <Summary props={showData}/>} */}
    </div> );
}

export default Home;