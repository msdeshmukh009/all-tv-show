import { useParams } from "react-router";
import { useState, useEffect } from "react";
import useFetch from "./useFetch";
const Summary = () => {
  const { id } = useParams();
  let baseUrl = "https://api.tvmaze.com/search/shows?q=all";
  const { data, isPending, error } = useFetch(baseUrl);
  let show = data && data.filter((item) => item.show.id === Number(id));
  let generArray = show && show[0].show.genres;
  let generStr = "";
      generArray && generArray.map(item=>{
     generStr+=" " +item;
        })
      console.log(generStr)

  return (
    <div className="summary">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {show && <div><h2>{show[0].show.name}</h2></div>}
      {show && <div><img style={{width:"20%"}} src={show[0].show.image.original} alt="" /></div> }
      {show && <div><p>{generStr}</p></div>}
      {show && <div>{show[0].show.summary}</div>}
    </div>
  );
};

export default Summary;
