import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
    <div className="not-found">
        <p>Not able to find this page</p>
        <Link to="/">Get back to home page</Link>
    </div> 
    );
}
 
export default NotFound;