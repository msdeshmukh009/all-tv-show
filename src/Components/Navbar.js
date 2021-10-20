import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {searchMovies,fetchShows} from '../redux/show/showActions'
const Navbar = (props) => {
  const onChangeInput = e => {
   props.searchMovies(e.target.value)
  } 
  const onSubmitEvent = e => {
    e.preventDefault();
   props.fetchShows(props.text)
  }
  return (
    <div  className="navbar">
      <nav>
        <Link to="/">
          <img src="/home_white_24dp.svg" alt="home" />
        </Link>
        <h1>{props.title}</h1>
        <form onSubmit={onSubmitEvent}>
          <input placeholder="Search by show name..." onChange={onChangeInput}/>
          <button>search</button>
        </form>
      </nav>
    </div>
  );
};
const mapStateToProps = state => ({
  text:state.text
})
export default connect(mapStateToProps, {searchMovies,fetchShows})(Navbar);
