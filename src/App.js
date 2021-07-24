import "./App.css";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./LayOut/HomePage";
import DetaiPage from "./LayOut/DetaiPage";
import PublicNavBar from "./components/PublicNavbar/";
import TrendingPage from "./LayOut/TrendingPage";


function App() {
  return (
    <>
      <Router>
          <PublicNavBar />
          
        <Switch>
          <Route path="/trending" exact component={TrendingPage} />
          <Route path="/" exact component={HomePage} />
          <Route path="/movie/:id" exact component={DetaiPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
