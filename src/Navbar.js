import { Link } from "react-router-dom";

const Navbar = ({ title }) => {
  return (
    <div className="navbar">
      <nav>
        <Link to="/">
          <img src="home_white_24dp.svg" alt="home" />
        </Link>
        <h1>{title}</h1>
      </nav>
    </div>
  );
};

export default Navbar;
