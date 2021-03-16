import './App.css';
import Header from "./Features/Header/Header"
import Swiping from "./Features/Swiping/Swiping"
import Likes from "./Features/Likes/Likes"
import Matches from "./Features/Matches/Matches"
import Profile from "./Features/Profile/Profile"

//https://developers.themoviedb.org/3/genres/get-movie-list

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <Router className="App">
      <Header></Header>
      <Switch>
          <Route exact path="/">
            <Redirect to="/app/matches" />
         </Route>
          <Route path="/app/recs">
            <Swiping />
          </Route>
          <Route path="/app/likes">
            <Likes />
          </Route>
          <Route path="/app/matches">
            <Matches />
          </Route>
          <Route path="/app/profile">
            <Profile />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
