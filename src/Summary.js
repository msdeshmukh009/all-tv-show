import { useParams } from "react-router";
//import { useState, useEffect } from "react";
import useFetch from "./useFetch";
const Summary = () => {
  const { id } = useParams();
  let baseUrl = "https://api.tvmaze.com/search/shows?q=all";
  const { data, isPending, error } = useFetch(baseUrl);
  
  let show = data && data.filter((item) => item.show.id === Number(id));
  console.log(show)
  let generArray = show && show[0].show.genres;
  let generStr = "";
      generArray && generArray.map(item=>{
     generStr+=" " +item;
     return generStr;
        })
        let summarystr =show && show[0].show.summary;
        //console.log(summarystr)
      //   console.log(generStr)
      // console.log(show)
  return (
    <div className="summary">
      <h1>summary</h1>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {show && <div>
               <h2>{show[0].show.name}</h2>
               <img style={{width:"20%"}} src={show[0].show.image.original} alt="poster" />
               <p>{generStr}</p>
               <p>Premiered: {show[0].show.premiered} <br/>Status:{show[0].show.status} </p>
               <p>Average runtime: {show[0].show.averageRuntime}min</p>
               <p>Rating: {show[0].show.rating.average}</p>
               <div dangerouslySetInnerHTML={{ __html: `${summarystr}` }}></div>
               <a href={show[0].show.officialSite} target="_blank">officialSite</a>
               </div> 
      }
    </div>
  );
};

export default Summary;
