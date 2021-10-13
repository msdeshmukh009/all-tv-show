import { useParams } from "react-router";
import { useState,useContext } from "react";
import BookTicket from "./BookTicket";
import { ShowContext } from "./ShowContext";
const Summary = () => {
  const { id } = useParams();
  const { data } = useContext(ShowContext);
  const [isBookingBox, setIsBookingBox] = useState(false);
  let show = data && data.filter((item) => item.show.id === Number(id));
  let generArray = show && show[0].show.genres;
  let summarystr = show && show[0].show.summary;

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
      {show && (
        <div className="show-img">
          <img src={show[0].show.image.original} alt="poster" />
        </div>
      )}
      {show && (
        <div className="show-info">
          <h1>{show[0].show.name}</h1>
          <table style={{ textAlign: "center", margin: "auto" }}>
            <tbody>
            <tr><th>Genres:</th><td>{generStr}</td></tr>
            <tr><th>Premiered:</th><td>{show[0].show.premiered}</td></tr>
            <tr><th>Status:</th><td>{show[0].show.status}</td></tr>
            <tr><th>Average-runtime:</th><td>{show[0].show.averageRuntime}min</td></tr>
            <tr><th>Rating:</th><td>{show[0].show.rating.average}</td></tr>
            </tbody>
          </table>

          <div
            className="summary-para"
            dangerouslySetInnerHTML={{ __html: `${summarystr}` }}
          ></div>
          <button onClick={togglePopup}>book tickets!!</button>
        </div>
      )}
      {isBookingBox && <BookTicket show={show} handleClose={togglePopup} />}
    </div>
  );
};

export default Summary;
