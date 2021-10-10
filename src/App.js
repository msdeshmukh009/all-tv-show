import './App.css';
import ShowList from './ShowList';
import Summary from './Summary';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import useFetch from './useFetch';
function App() {
  let baseUrl = "https://api.tvmaze.com/search/shows?q=all";
  const {data:showData, isPending, error} = useFetch(baseUrl);
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
          {isPending && <div>Loading...</div>}
          {error && <div>{ error }</div>}
          {showData && <ShowList showData={showData} />}
          </Route>
          <Route path="/summary/:id">
          {showData && <Summary showData={showData} error={error} isPending={isPending}/>}
          </Route>
        </Switch>
      </Router>
        
        
    </div>
  );
}

export default App;
