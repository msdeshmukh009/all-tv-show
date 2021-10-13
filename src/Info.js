import { useContext } from "react";
import { ShowContext } from "./ShowContext";
import Summary from "./Summary";
import Navbar from "./Navbar";
const Info = () => {
    const {data,isPending,error} = useContext(ShowContext);
    return ( <div className="info">
        <Navbar />
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {data && <Summary/> } 
    </div> );
}
 
export default Info;