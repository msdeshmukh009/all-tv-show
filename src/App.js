import "./index.css";
import ShowList from "./ShowList";
import Summary from "./Summary";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import useFetch from "./useFetch";
import NotFound from "./NotFound";
import Navbar from "./Navbar";
function App() {
  let baseUrl = "https://api.tvmaze.com/search/shows?q=all";
  // let baseUrl = "https://api.tvmaze.com/shows"
  const { data: showData, isPending, error } = useFetch(baseUrl);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar title="All Tv Shows" />
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {showData && <ShowList showData={showData} />}
          </Route>
          <Route path="/summary/:id">
            <Navbar />
            {showData && (
              <Summary
                showData={showData}
                error={error}
                isPending={isPending}
              />
            )}
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
