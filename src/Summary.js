const Summary = ({showData}) => {
    return ( 
        <div className="summary">
            {
                showData.map((show)=>(
                    <div>{show.show.summary}</div>
                ))
            }
        
        </div>  
     );
}
 
export default Summary;