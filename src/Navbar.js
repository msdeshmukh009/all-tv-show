import { Link } from "react-router-dom";

const Navbar = () => {
    return ( <div className="navbar">
        <nav>
            <Link to="/">Home</Link>
        </nav>
    </div> );
}
 
export default Navbar;