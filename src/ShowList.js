const ShowList = ({showData}) => {
    return (
        <div  className="list-view">
        {showData.map((show) => (
            <div className='summary' key={show.show.id}>
            <h1 >{show.show.name}</h1>
            <img style={{width:"100px"}} src={show.show.image.original} alt="image" />
            <p>{show.show.language}</p>
           {
               show.show.genres.map((genre=>(
                   <span >{genre} </span>
               )))
           }
           <button>summary</button>
            </div>
          
        ))}
      </div>
      );
}
 
export default ShowList;