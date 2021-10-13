import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import { ShowProvider } from "./ShowContext";
import Home from "./Home";
import Info from "./Info";
function App() {
  return (
  <ShowProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/summary/:id">
              <Info />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </div>
  </ShowProvider>
  );
}

export default App;
