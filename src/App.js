import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
//import { ShowProvider } from "./ShowContext";
import Home from "./Home";
import Info from "./Info";
import { Provider } from 'react-redux';
import store from "./redux/store";
//import TrialComponent from "./TrialComponent";
function App() {
  return (
    <Provider store={store}>
     {/* <ShowProvider> */}
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
  {/* </ShowProvider> */}
    </Provider>
  )
}

export default App;
