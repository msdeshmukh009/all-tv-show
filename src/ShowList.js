import { Link } from "react-router-dom";

const ShowList = ({showData}) => {
    return (
        <div  className="list-view">
        {showData.map((show) => (
            <div className='summary' key={show.show.id}>
            <h1 >{show.show.name}</h1>
            <img style={{width:"100px"}} src={show.show.image.original} alt="image" />
            <p>{show.show.language}</p>
           
          <Link to={`/summary/${show.show.id}`}><button>summary</button></Link>
           
            </div>
          
        ))}
      </div>
      );
}
 
export default ShowList;