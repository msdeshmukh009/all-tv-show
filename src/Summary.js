import { useParams } from "react-router";
import { useState,useEffect } from "react";
const Summary = ( {showData}) => {
    const [summaryShow,setSummaryShow] = useState(null);
    const [status,setStatus] = useState('pending');
    const {id} = useParams();
    let baseUrl = "https://api.tvmaze.com/search/shows?q=all";
    console.log(id)
   
    useEffect(()=>{
        fetch(baseUrl)
        .then(res=>res.json())
        .then((data)=>{
            
            let show = data.filter(item => item.show.id == id);
            setSummaryShow(show);
            //console.log(show)
            console.log(summaryShow)
           // console.log(data)
         })
         .then(()=>{
            setStatus("resolved")
         })
    },[status])
        
    return ( 
        <div className="summary">
           <h2>summary</h2>
           {summaryShow && <div>{summaryShow[0].show.name}</div>}
           {summaryShow && <div>{summaryShow[0].show.summary}</div>}
        </div>  
     );
}
 
export default Summary;