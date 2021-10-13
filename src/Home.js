import ShowList from "./ShowList";
import { useContext } from "react";
import { ShowContext } from "./ShowContext";
import Navbar from "./Navbar";
const Home = () => {
    const {data:showData,isPending,error} = useContext(ShowContext);
    return ( <div className="home">
        <Navbar title="All Tv Shows" />
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {showData && <ShowList/>} 
    </div> );
}
 
export default Home;