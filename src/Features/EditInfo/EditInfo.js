import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "./EditInfo.module.css"
import Button from '@material-ui/core/Button';
import { firebase } from "../../auth/initFirebase";

const db = firebase.database();

const EditInfo = (props) =>{  
    const [genres, setGenres] = useState([]);
    const [interests, setinterests] = useState([]);

    const interestsRef = () => {
        return db.ref(`users/${firebase.auth().currentUser.uid}/interests`);
    }

    const getInterests = () => {
        var list = [];
        interestsRef().on('value', (snap) => { list = snap.val()??[] });
        return list;
    }

    const handleInterests = (e) => {
        const classList = e.target.classList;
        const isActive = classList.contains(styles.active);
        const genreId = e.target.dataset.genreId;
        var ref = interestsRef();
        var list = getInterests();
        
        
        if(isActive && list.includes(genreId)){
            if (list.indexOf(genreId) > -1)list.splice(list.indexOf(genreId), 1)
        }else if (!isActive && !list.includes(genreId)){
            list.push(genreId)
        }
        ref.set(list);
        setinterests(list);
        isActive?classList.remove(styles.active):classList.add(styles.active);
    }
    useEffect(() => {
        setinterests(getInterests());
    }, []) 

    useEffect(async () =>{
        const result = await axios(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=a9d0af555a3bf6a117089d98841fcd0e&language=en-US`,
          );
        setGenres(result.data.genres); 
    },[])
    return (
        <div className={`${styles.container} ${props.show?"":styles.hide}`}>
            <div className={styles.header}><h2>Your Interests</h2><h2 onClick={props.callback} className={styles.close}>Done<i className="material-icons">keyboard_arrow_right</i></h2></div>
            
            <div className={styles.body}>
                <div className={styles.topInfo}>Select a couple of genres you'd like to base our movie suggetions on</div>
                <div className={styles.flexWrapper}>
                    {genres.map((genre,i) => (
                        (
                            <div onClick={handleInterests} className={`${styles.interest} ${interests.includes(genre.id.toString())?styles.active:""}`} data-genre-id={genre.id}>{genre.name}</div>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
}

export default EditInfo