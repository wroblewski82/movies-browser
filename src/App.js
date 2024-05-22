import { HashRouter, Route, Routes } from "react-router-dom";
import { Navigation } from "./Navigation";
import MovieList from "./features/MovieList";
import PeopleList from "./features/PeopleList";

const App = () => {
  return (
    <>
      <HashRouter>
        <Navigation />
        <Routes>
          <Route path="/movies" Component={MovieList} />
          <Route path="/people" Component={PeopleList} />
          <Route exact path="/" render={() => "/movies"} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
