import React, {useState, useEffect, useRef} from 'react';
import { firebase } from "../../auth/initFirebase";
import axios from 'axios';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import styles from "./Likes.module.css"
import Select from 'react-select';

const db = firebase.database();

//https://stackoverflow.com/questions/63405009/react-how-do-you-lazyload-image-from-api-response
// USE INDEXON for better firebase security

const options = [
  { value: 'title', label: 'Title' },
  { value: 'timeWhenRated', label: 'Date' },
  { value: 'vote_average', label: 'Rating'},
  { value: 'yourRating', label: 'Your rating' },
];

const getMovieInfo = (movieID) => {
  return axios(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=a9d0af555a3bf6a117089d98841fcd0e&language=en-US`,
  ).then((res)=>{
    return {movieinfo:res.data}
  }).catch(() =>{
    return {movieinfo:{}};
  })
}

const Likes = () =>{
    const [limit, setLimit] = useState(8);
    const [movieList, setMovieList] = useState([]);
    const [isTop, setIsTop] = useState(true);
    const [movieNum, setmovieNum] = useState(0);
    const movieGallery = useRef(null);
    document.title = "Liked Movies";

    const handleScroll = (e) => {
      const isTop = e.target.scrollTop === 0;
      const bottom = Math.round(e.target.scrollHeight - e.target.scrollTop)/4*3 <= e.target.clientHeight;
      isTop?setIsTop(true):setIsTop(false);
      if(bottom)setLimit(limit + 4);
    }

    const goToTop = () => {
      movieGallery.current.scrollTo(0, 0);
    }

    const getNumOfMovies = () => {
      const MoviesRef = db.ref(`${firebase.auth().currentUser.uid}/movies`);
      MoviesRef.once("value")
      .then((snapshot) => setmovieNum(snapshot.numChildren()));
    }

    const fetchMovies = async () => {
      const MoviesRef = db.ref(`${firebase.auth().currentUser.uid}/movies`);
      MoviesRef
      .orderByChild("date")
      .limitToFirst(limit)
      .on("value", async snapshot => {
        const movies = snapshot.val()??{};
        setMovieList(Object.values(movies));
      });
    }

    useEffect(() =>{
      getNumOfMovies();
    },[])

    useEffect(async ()=>{
      await fetchMovies();
    }, [limit]);

    return (
        <div className={styles.container}>
          <Fab onClick={goToTop} className={`${styles.goUp} ${!isTop?styles.active:""}`}><i className="material-icons">keyboard_arrow_up</i>
            
          </Fab>
          <div ref={movieGallery} className={styles.movieGallery} onScroll={handleScroll}>
            <div className={styles.topbox}>
              <h2>{movieNum} movie ratings</h2>
            </div>
            {
            movieList.map((movie,i) => (
              <div className={`${styles.ratedMovie} ${movie.type===0?styles.nope:movie.type===1?styles.like:styles.super_like}`}>
                <img alt={i.toString()} src={movie.poster_path?`https://image.tmdb.org/t/p/w500${movie.poster_path}`:"https://m.media-amazon.com/images/S/sash/8ZhQrGnWn9cWUVQ.png"} />
                <div className={styles.rating}></div>
              </div>
            ))}
            {limit >= movieNum?(<div className={styles.endBox}>You reach the end🚀</div>):null}
          </div>  
        </div>
    );
}

export default Likes