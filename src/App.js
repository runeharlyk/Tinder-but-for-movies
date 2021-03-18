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
            <Redirect to="/Tinder-but-for-movies/app/matches" />
         </Route>
<<<<<<< HEAD
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
=======
          <Route path="./app/recs">
            <Swiping />
          </Route>
          <Route path="./app/likes">
            <Likes />
          </Route>
          <Route path="./app/matches">
            <Matches />
          </Route>
          <Route path="./app/profile">
>>>>>>> 8d338070635cc482ff467f936c428d1f7fdbe2f7
            <Profile />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
