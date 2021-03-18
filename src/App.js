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
          <Redirect to="/Tinder-but-for-movies/app/recs" />
        </Route>
        <Route exact path="/Tinder-but-for-movies/">
          <Redirect to="/Tinder-but-for-movies/app/recs" />
         </Route>
        <Route path="/Tinder-but-for-movies/app/recs">
            <Swiping />
          </Route>
          <Route path="/Tinder-but-for-movies/app/likes">
            <Likes />
          </Route>
          <Route path="/Tinder-but-for-movies/app/matches">
            <Matches />
          </Route>
          <Route path="/Tinder-but-for-movies/app/profile">
            <Profile />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
