import React, {useState, useEffect} from 'react'
import clamp from 'lodash-es/clamp'
import { useSpring, animated } from 'react-spring'
import { useGesture } from 'react-with-gesture'
import styles from './Card.module.css'
import axios from "axios"


//TRAILers http://api.themoviedb.org/3/movie/157336/videos?api_key=a9d0af555a3bf6a117089d98841fcd0e
// ALTERNATIVE POSTERS http://api.themoviedb.org/3/movie/157336/images?api_key=a9d0af555a3bf6a117089d98841fcd0e
/* Code base https://codesandbox.io/embed/r24mzvo3q */
/* Make genre id to name lookup table */
/* Make the discription visible */
/* Show all posters and pictures in different slides*/

const Card = (props) => {
    const [gone] = useState(() => new Set())
    const [focusedImage, setFocusedImages] = useState(props.movie.poster_path ? `https://image.tmdb.org/t/p/w500${props.movie.poster_path}` : "https://m.media-amazon.com/images/S/sash/8ZhQrGnWn9cWUVQ.png");
    const [imageDelta, setImageDelta] = useState(0);
    let images, imageIndex;
    const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }))
    const handleMovie = props.callback;
    const bind = useGesture(({ down, delta, velocity,xy, event}) => {
        const vel = velocity;
        const xTrigger = Math.abs(delta[0])> window.innerWidth/3;
        const yTrigger = delta[1] < -window.innerHeight/3;
        const trigger = velocity > 0.2 || xTrigger || yTrigger;
        const dir = delta[0] < 0 ? -1 : 1;
        if (!down && trigger) gone.add(props.movie.id);
        velocity = clamp(velocity, 1, 8)
        if(gone.has(props.movie.id)){
            if(!xTrigger && yTrigger){ // UP
                handleMovie({id:props.movie.id, type:2, poster_path:props.movie.poster_path});
            }else if(trigger && !yTrigger){ // RIGHT : LEFT
                (dir > 0)?handleMovie({id:props.movie.id, type:1, poster_path:props.movie.poster_path}):handleMovie({id:props.movie.id, type:0, poster_path:props.movie.poster_path});  
            }
            set({ xy: [(trigger && !yTrigger) ? ((200 + window.innerWidth)*dir):0, (!xTrigger && yTrigger)?-window.innerHeight:0], config: { mass: velocity/2, tension: 1000 * velocity, friction: 50 } })
        }else{
            if(vel === 0&& !down && event.type === "mousedown"){
                if(xy[1] > window.innerHeight/3*2)console.log(props.movie.overview);
                else if(xy[0] < window.innerWidth/2)setImageDelta(-1)
                else setImageDelta(1)
            }
            set({ xy: down ? delta : [0, 0], config: { mass: velocity/2, tension: 1000 * velocity, friction: 50 } })
        }        
    })

    useEffect(() => {
        const loadPosters = () => {
            if (imageDelta === 0) return;
            if (images !== []) {
                imageIndex = 0;
                axios.get(`http://api.themoviedb.org/3/movie/${props.movie.id}/images?api_key=a9d0af555a3bf6a117089d98841fcd0e`)
                    .then(res => {
                        const posters = res.data.posters;
                        images = posters.slice(0, 5).map(poster => {
                            return poster.file_path
                        })
                    })
            }else{
                const i = (imageDelta < 0 && imageIndex > 0) && (imageDelta > 0 && imageIndex < 5)?imageIndex+imageDelta:0
                setFocusedImages(images[i])
            }
            if (imageDelta !== 0) setImageDelta(0);
        }
        loadPosters();
    }, [imageDelta])

    return <animated.div className={styles.movie_card} {...bind()} style={{ transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0) rotate(${-x/(window.innerWidth/20)}deg)`) }} >
            <animated.div className={styles.action_label + " " + styles.like} style={{ opacity: xy.interpolate((x, y) => `${x/(window.innerWidth/4)}`) }}>Like</animated.div>
            <animated.div className={styles.action_label + " " + styles.nope} style={{ opacity: xy.interpolate((x, y) => `${x/(-window.innerWidth/4)}`) }}>Nope</animated.div>
            <div className={styles.bottom_box}><animated.div className={styles.action_label + " " + styles.super_like} style={{ opacity: xy.interpolate((x, y) => `${y/(-window.innerHeight/4)}`) }}>Super Like</animated.div></div>
            <div className={styles.overlay}></div>
            <img alt={props.movie.name} src={focusedImage}></img>
            <div className={styles.movieBox}>
                <div className={styles.movie_info}>
                    <h2>{props.movie.title}</h2>
                    <p>{props.movie.release_date}</p>
                    <p>Rating {props.movie.vote_average}</p>
                </div>
                    <ul className={styles.categories_list}>
                    {props.movie.genre_ids.map((genreId, i) => (
                        <li className={props.interests.genres.includes(genreId.toString())?styles.activeGenre:""} key={genreId.toString()}>{props.genreNames.find(x => x.id === genreId).name}</li>
                    ))}
                </ul>
            </div>
           
        </animated.div>
}

export default Card;