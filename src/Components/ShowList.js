// import { useContext } from "react";
import { Link } from "react-router-dom";
//import { ShowContext } from "./ShowContext";
import { useDispatch,useSelector } from "react-redux";
import { fetchShows } from "../redux";
import { useEffect } from "react";
const ShowList = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchShows());
  },[dispatch])
const showData = useSelector(state => state.shows)
  
  return (
    <div className="list-view">
      
      {showData && showData.map((show) => (
        <div className="summary-list" key={show.show.id}>
          <h2>{show.show.name}</h2>
          <img src={show.show.image.original} alt="show-poster" />
          <p>{show.show.language}</p>

          <Link to={`/summary/${show.show.id}`}>
            <button>summary</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ShowList;
