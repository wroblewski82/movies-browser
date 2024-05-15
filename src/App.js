import { HashRouter } from "react-router-dom";
import { Navigation } from "./Navigation";

const App = () => {
  return (
    <>
      <HashRouter>
        <Navigation />
      </HashRouter>
    </>
  );
};

export default App;
