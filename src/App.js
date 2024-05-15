import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { Navigation } from "./Navigation";
import Movies from "./Pages/Movies";
import People from "./Pages/People";

const App = () => {
  return (
    <>
      <HashRouter>
        <Navigation />
        <Switch>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/people">
            <People />
          </Route>
          <Route path="/">
            <Redirect to="/movies" />
          </Route>
        </Switch>
      </HashRouter>
    </>
  );
};

export default App;
