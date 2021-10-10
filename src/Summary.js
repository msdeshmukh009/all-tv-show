import { useParams } from "react-router";
import { useState,useEffect } from "react";
const Summary = ( {showData}) => {
    const [summaryShow,setSummaryShow] = useState(null);
    const {id} = useParams();
    
    //console.log(id);
   useEffect(()=>{
      let show = showData.filter(item=> item.show.id === Number(id))
      setSummaryShow(show);
     // console.log(summaryShow)
   },[showData, id])
   

        
    return ( 
        <div className="summary">
           <h2>summary</h2>
           {summaryShow && <div>{summaryShow[0].show.name}</div>}
           {summaryShow && <div>{summaryShow[0].show.summary}</div>}
        </div>  
     );
}
 
export default Summary;