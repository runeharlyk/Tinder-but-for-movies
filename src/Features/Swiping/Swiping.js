import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { firebase } from "../../auth/initFirebase";
import styles from "./Swiping.module.css"
import Card from "./Card/Card"

const db = firebase.database();
//https://api.themoviedb.org/3/discover/movie?
//api_key=a9d0af555a3bf6a117089d98841fcd0e&language=en
/*
    Make trailer viewable
    Show alternative pictures
    Show genres, actors
*/
const Swiping = () =>{
    const [movies, setMovies] = useState([]);
    const [MovieAction, setMovieAction] = useState({});
    const [interests, setinterests] = useState(null);
    const [genreNames, setGenreNames] = useState(null);
    const [pageN, setPageN] = useState(1);

    const interestsRef = () => {
        return db.ref(`users/${firebase.auth().currentUser.uid}/interests`);
    }

    const getGenreInterests = () => {
        var list = [];
        interestsRef().on('value', (snap) => { list = snap.val()??[] });
        return {genres:list};
    }

    useEffect(async() => {
        
    },[])

    useEffect(() => {
        const id = MovieAction.id;
        const type = MovieAction.type;
        const poster_path = MovieAction.poster_path;
        if(typeof(id) !== "number") return false;
        const MoviesRef = db.ref(`${firebase.auth().currentUser.uid}/movies`);
        const newMovieRef = MoviesRef.push();
       
        newMovieRef.set({
            id,
            type,
            poster_path,
            date: new Date().getTime()
        });
        const newMovielist = movies;
        newMovielist.pop();
        setMovies(newMovielist);
        if(newMovielist.length <= 2)setPageN(pageN => pageN+1);        
    },[MovieAction])

    useEffect(async () => {
        const genres = await axios(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=a9d0af555a3bf6a117089d98841fcd0e&language=en-US`,
          );
          setGenreNames(genres.data.genres);
          setinterests(getGenreInterests());
        const result = await axios(
            `https://api.themoviedb.org/3/discover/movie?api_key=a9d0af555a3bf6a117089d98841fcd0e&language=en&page=${pageN}&vote_average.gte=6.9&sort_by=popularity.desx&include_video=true`, 
            //&with_genres=${getGenreInterests().genres.join()}
          );
        setMovies(movies => result.data.results.concat(movies));   
    },[pageN])

    return (
        <div className={styles.container}>
            <div className={styles.movies}>
                {genreNames!==null && interests!==null?movies.map((movie,i) => (
                    movies.length===0?
                        (<div>No more fortnite!!!</div>)
                    :(
                        <Card callback={setMovieAction} interests={interests} genreNames={genreNames} movie={movie}/>
                    )
                )):null}
            </div>

            <div className={styles.footer}>
                <button className={styles.redo}><i className="material-icons">restart_alt</i></button>
                <button className={styles.nope}><i className="material-icons">clear</i></button>
                <button className={styles.super_like}><i className="material-icons">star</i></button>
                <button className={styles.like}><i className="material-icons">favorite</i></button>
                <button className={styles.bolt}><i className="material-icons">bolt</i></button>
            </div>
        </div>
    );
}

export default Swiping
