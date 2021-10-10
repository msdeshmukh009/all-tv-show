import { Link } from "react-router-dom";

const ShowList = ({showData}) => {
    return (
        <div  className="list-view">
        {showData.map((show) => (
            <div className='summary' key={show.id}>
            <h1 >{show.name}</h1>
            <img style={{width:"100px"}} src={show.image.original} alt="show-poster" />
            <p>{show.language}</p>
           
          <Link to={`/summary/${show.id}`}><button>summary</button></Link>
           
            </div>
          
        ))}
      </div>
      );
}
 
export default ShowList;