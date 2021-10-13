import {createContext} from "react";
import useFetch from "./useFetch";

export const ShowContext = createContext();

export const ShowProvider = (props) => {
    let baseUrl = "https://api.tvmaze.com/search/shows?q=all";
    const { data, isPending, error } = useFetch(baseUrl);
    return ( 
        <ShowContext.Provider value={{data,isPending,error}}>
            {props.children}
        </ShowContext.Provider>
     );
}
 
  