import Summary from "./Summary";
import Navbar from "./Navbar";
import {useDispatch,useSelector} from 'react-redux';
import { fetchShows } from "../redux";
import { useEffect } from "react";
const Info = () => {
    const dispatch = useDispatch();
    const showData = useSelector(state => state.shows);
    useEffect(()=>{
        dispatch(fetchShows());
    },[dispatch])
   
    return ( <div className="info">
        <Navbar />
        {showData && showData.loading && <div>Loading...</div>}
        {showData && showData.error && <h2>{showData.error}</h2>}
        {showData && <Summary/> } 
    </div> );
}
 
export default Info;