import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./Components/NotFound";
import Home from "./Components/Home";
import Info from "./Components/Info";
import { Provider } from 'react-redux';
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}> 
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
              
            </Route>
            <Route path="/summary/:id">
            <Info/>
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  )
}

export default App;
