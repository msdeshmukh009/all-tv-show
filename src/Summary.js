import { useParams } from "react-router";
import { useState,useEffect } from "react";
import useFetch from "./useFetch";
const Summary = ( ) => {
    const [summaryShow,setSummaryShow] = useState(null);
    const {id} = useParams();
    let baseUrl = "https://api.tvmaze.com/search/shows?q=all";
    const {data:showData, isPending, error} = useFetch(baseUrl); 
    let show = showData.filter(item=> item.show.id === Number(id)); 
    setSummaryShow(show);
//   useEffect(()=>{
   
   
      
//   })
      
   
    //console.log(id);
   // useEffect(()=>{
   //    let show = showData.filter(item=> item.show.id === Number(id))
   //    setSummaryShow(show);
   //   console.log(error)
   // },[showData, id,error,isPending])
   

        
    return ( 
        <div className="summary">
           <h2>summary</h2>
           {/* {isPending && <div>Loading...</div>}
           {error && <div><p>no...</p></div>} */}
           {summaryShow && <div>{summaryShow[0].show.name}</div>}
           {summaryShow && <div>{summaryShow[0].show.summary}</div>}
        </div>  
     );
}
 
export default Summary;