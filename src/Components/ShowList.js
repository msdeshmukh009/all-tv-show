import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { fetchShows } from "../redux";
import { useEffect } from "react";
const ShowList = () => {
  const dispatch = useDispatch();
  const showData = useSelector(state => state.shows)
  useEffect(()=>{
    dispatch(fetchShows(" "));
    
  },[dispatch])
//console.log(showData)
  return (
    <div className="list-view">
      
      {showData && showData.map((show) => (
        <div className="summary-list" key={show.show.id}>
          <h2>{show.show.name}</h2>
          <img src={show.show.image && show.show.image.original} alt="show-poster" />
          <p>{show.show.language}</p>

          <Link to={`/summary/${show.show.externals.thetvdb}`}>
            <button>summary</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ShowList;
