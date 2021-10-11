import { useParams } from "react-router";
import { useState } from "react";
import BookTicket from "./BookTicket";
import useFetch from "./useFetch";
const Summary = () => {
  const { id } = useParams();
  let baseUrl = "https://api.tvmaze.com/search/shows?q=all";
  const { data, isPending, error } = useFetch(baseUrl);
  const [isBookingBox, setIsBookingBox] = useState(false);
  const togglePopup = () => {
    setIsBookingBox(!isBookingBox);
  };
  let show = data && data.filter((item) => item.show.id === Number(id));

  let generArray = show && show[0].show.genres;
  let generStr = "";
  generArray &&
    generArray.map((item) => {
      generStr += " " + item;
      return generStr;
    });
  let summarystr = show && show[0].show.summary;

  return (
    <div className="summary">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
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
            <tr><th>genres:</th><td>{generStr}</td></tr>
            <tr><th>Premiered:</th><td>{show[0].show.premiered}</td></tr>
            <tr><th>Status:</th><td>{show[0].show.status}</td></tr>
            <tr><th>Average-runtime:</th><td>{show[0].show.averageRuntime}min</td></tr>
            <tr><th>Rating:</th><tr>{show[0].show.rating.average}</tr></tr>
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
