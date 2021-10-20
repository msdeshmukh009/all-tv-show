import { useParams } from "react-router";
import { useState } from "react";
import BookTicket from "./BookTicket";
import {connect} from 'react-redux';
import { fetchShow } from "../redux";
import { useEffect } from "react";

const Summary = ({showData,fetchshowData}) => {
  const { id } = useParams();
  
  useEffect(()=>{
    fetchshowData(id)
  },[fetchshowData,id])

const [isBookingBox, setIsBookingBox] = useState(false);
//console.log(showData)
//let show = showData && showData.filter((item) => item.show.id === Number(id));
  //console.log(show)
  
  let generArray = showData && showData.genres;
  let summarystr = showData && showData.summary;
 // console.log(generArray)
  const togglePopup = () => {
    setIsBookingBox(!isBookingBox);
  };
  
  let generStr = "";
  generArray &&
    generArray.map((item) => {
      generStr += " " + item;
      return generStr;
    });
  

  return (
    <div className="summary">
      {showData && (
        <div className="show-img">
          <img src={showData.image.original} alt="poster" />
        </div>
      )}
      {showData && (
        <div className="show-info">
          <h1>{showData.name}</h1>
          <table style={{ textAlign: "center", margin: "auto" }}>
            <tbody>
            <tr><th>Genres:</th><td>{generStr}</td></tr>
            <tr><th>Premiered:</th><td>{showData.premiered}</td></tr>
            <tr><th>Status:</th><td>{showData.status}</td></tr>
            <tr><th>Average-runtime:</th><td>{showData.averageRuntime}min</td></tr>
            <tr><th>Rating:</th><td>{showData.rating.average}</td></tr>
            </tbody>
          </table>

          <div
            className="summary-para"
            dangerouslySetInnerHTML={{ __html: `${summarystr}` }}
          ></div>
          <button onClick={togglePopup}>book tickets!!</button>
        </div>
      )}
      {isBookingBox && <BookTicket show={showData} handleClose={togglePopup} />}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    showData: state.show
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchshowData: (id) => dispatch(fetchShow(id))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Summary);