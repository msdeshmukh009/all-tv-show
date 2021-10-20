import { useState, useEffect } from "react";
const BookTicket = ({ show, handleClose }) => {
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [date, setDate] = useState(localStorage.getItem("date") || "");
  const [time, setTime] = useState(localStorage.getItem("time") || "");
  const [email, setemail] = useState(localStorage.getItem("email") || "");
  const [noOFSeats, setNoOFSeats] = useState(
    localStorage.getItem("seats") || ""
  );
  const [message, setMessage] = useState(null);
  const [bookingStatus, setBookingStatus] = useState(false);
  const [buttonState, setBUttonstate] = useState(false);
  useEffect(() => {
    localStorage.setItem("name", name);
    localStorage.setItem("date", date);
    localStorage.setItem("time", time);
    localStorage.setItem("email", email);
    localStorage.setItem("seats", noOFSeats);
  }, [name, date, time, email, noOFSeats]);
  function clickHandler(e) {
    e.preventDefault();
    setBUttonstate(true);
    setTimeout(() => {
      if (name && date && time && email && noOFSeats) {
        setBookingStatus(true);
        setBUttonstate(false);
        setMessage("All set!! enjoy the show");
      } else {
        setBUttonstate(false);
        setMessage("Fill all the details");
      }
    }, 2000);
  }
  return (
    <div className="book-ticket-box">
      <div className="box">
        <span className="close-icon" onClick={handleClose}>
          x
        </span>
        {!bookingStatus && (
          <div className="poster-img">
            <h1>Book tickets for {show.name} </h1>
            <img src={show.image.original} alt="" />
          </div>
        )}
        {!bookingStatus && (
          <div className="form">
            <form>
              <input
                value={name}
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
                type="text"
              />
              <input
                value={email}
                placeholder="Email"
                onChange={(e) => setemail(e.target.value)}
                type="email"
              />
              <input
                value={noOFSeats}
                placeholder="No. of Seats"
                min="1"
                onChange={(e) => setNoOFSeats(e.target.value)}
                type="number"
              />
              <label>Date:</label>
              <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                type="date"
              />
               <label>Time:</label>
              <input
                value={time}
                onChange={(e) => setTime(e.target.value)}
                type="time"
              />

              {!buttonState && (
                <button onClick={clickHandler} type="submit">
                  Book
                </button>
              )}
              {buttonState && (
                <button disabled onClick={clickHandler} type="submit">
                  Booking...
                </button>
              )}
            </form>
          </div>
        )}{" "}
        {message && (
          <div className="message">
            <p>{message}</p>
            <img src="/undraw_movie_night_fldd.svg" alt="booked" />
          </div>
        )}
      </div>
    </div>
  );
};

export default BookTicket;
