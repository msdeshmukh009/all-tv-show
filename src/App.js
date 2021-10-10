import './App.css';
import {useState,useEffect} from 'react';
import ShowList from './ShowList';
import Summary from './Summary';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  let baseUrl = "https://api.tvmaze.com/search/shows?q=all";
  const [showData, setShowData] = useState(null);
  const [isPending,setIsPending] = useState(true);
  useEffect(() => {
    fetch(baseUrl)
      .then((response) => {
        console.log(response.ok)
        return response.json()})
      .then((data) => {
        //console.log(data);
        setShowData(data);
        setIsPending(false);
      });
  }, [baseUrl]);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {isPending && <div>Loading...</div>}
          {showData && <ShowList showData={showData} />}
          </Route>
          <Route path="/summary/:id">
          {showData && <Summary showData={showData}/>}
          </Route>
        </Switch>
      </Router>
        
        
    </div>
  );
}

export default App;
