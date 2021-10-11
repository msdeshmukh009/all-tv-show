import { useState,useEffect } from "react";
const BookTicket = ({show,handleClose}) => {
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [date, setDate] = useState(localStorage.getItem("date") || "");
  const [time, setTime] = useState(localStorage.getItem("time") || "");
  const [message,setMessage] = useState(null);
  const [bookingStatus,setBookingStatus] = useState(false);
  const [buttonState,setBUttonstate] = useState(false);
  useEffect(() => {
    localStorage.setItem("name", name);
    localStorage.setItem("date", date);
    localStorage.setItem("time", time);
  }, [name, date, time]);
  function clickHandler(e){
      e.preventDefault();
      setBUttonstate(true);
      setTimeout(()=>{if(name && date && time){
        setBookingStatus(true);
        setBUttonstate(false);
      setMessage("All set enjoy the show")
    }else{
        setBUttonstate(false);
        setMessage("Fill all the details")
    }},2000)
      
  }
    return ( 
    <div className="book-ticket-box">
       
            <div className="box">
           <span className="close-icon" onClick={handleClose} >x</span>
         {
             !bookingStatus && <div className="form">
                 <h1>Book ticket for {show[0].show.name} </h1>
           <form>
           <label>
             Name:
             <input value={name} onChange={(e) => setName(e.target.value)} />
           </label>
           <label>
             Date:{" "}
             <input
               value={date}
               onChange={(e) => setDate(e.target.value)}
               type="date"
             />
           </label>
           <label>
             Time:{" "}
             <input
               value={time}
               onChange={(e) => setTime(e.target.value)}
               type="time"
             />
           </label>
           {
               !buttonState && <button onClick={clickHandler} type="submit">Book</button>
           }
           {
               buttonState && <button disabled onClick={clickHandler} type="submit">Booking...</button>
           }
         </form>
             </div>
         }  
         <div className="message">{message}</div>
           </div>
       
       
    </div> );
}
 
export default BookTicket;