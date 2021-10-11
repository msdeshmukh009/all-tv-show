import { useParams } from "react-router";
import { useState } from "react/cjs/react.development";
import BookTicket from "./BookTicket";
import useFetch from "./useFetch";
const Summary = () => {
  const { id } = useParams();
  let baseUrl = "https://api.tvmaze.com/search/shows?q=all";
  const { data, isPending, error } = useFetch(baseUrl);
  const [isOpen,setIsOpen] = useState(false);
  const togglePopup = () => {
        setIsOpen(!isOpen);
  }
  let show = data && data.filter((item) => item.show.id === Number(id));

  let generArray = show && show[0].show.genres;
  let generStr = "";
  generArray && generArray.map(item=>{
     generStr+=" " +item;
     return generStr;
        })
        let summarystr =show && show[0].show.summary;

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
               <button onClick={togglePopup}>book ticket</button>
               </div> 
      }
      {
        isOpen && <BookTicket show={show} handleClose={togglePopup}/>
      }
    </div>
  );
};

export default Summary;
