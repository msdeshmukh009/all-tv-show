import { Link } from "react-router-dom";

const ShowList = ({showData}) => {
    return (
        <div  className="list-view">
          
          {showData.map((show) => (
            <div className='summary-list' key={show.show.id}>
            <h2 >{show.show.name}</h2>
            <img  src={show.show.image.original} alt="show-poster" />
            <p>{show.show.language}</p>
           
          <Link to={`/summary/${show.show.id}`}><button>summary</button></Link>
           
            </div>
          
        ))}
          
      </div>
      );
}
 
export default ShowList;