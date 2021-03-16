import React, {useState} from 'react'
import clamp from 'lodash-es/clamp'
import { useSpring, animated } from 'react-spring'
import { useGesture } from 'react-with-gesture'
import Fab from '@material-ui/core/Fab';
import styles from './Card.module.css'

/* Code base https://codesandbox.io/embed/r24mzvo3q */
/* Make genre id to name lookup table */
/* Make the discription visible */
/* Show all posters and pictures in different slides*/

const Card = (props) => {
    const [gone] = useState(() => new Set())
    const [showDiscription, setShowDiscription] = useState(false)
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
                if(xy[1] > window.innerHeight/3*2)setShowDiscription(true)
                else if(xy[0] < window.innerWidth/2)console.log("Prev img");
                else console.log("Next img");
            }
            set({ xy: down ? delta : [0, 0], config: { mass: velocity/2, tension: 1000 * velocity, friction: 50 } })
        }        
    })

    const hideDiscription = () => {
        setShowDiscription(showDiscription => showDiscription = false)
    }

    return <animated.div className={styles.movie_card} {...bind()} style={{ transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0) rotate(${-x/(window.innerWidth/20)}deg)`) }} >
            <animated.div className={styles.action_label + " " + styles.like} style={{ opacity: xy.interpolate((x, y) => `${x/(window.innerWidth/4)}`) }}>Like</animated.div>
            <animated.div className={styles.action_label + " " + styles.nope} style={{ opacity: xy.interpolate((x, y) => `${x/(-window.innerWidth/4)}`) }}>Nope</animated.div>
            <div className={styles.bottom_box}><animated.div className={styles.action_label + " " + styles.super_like} style={{ opacity: xy.interpolate((x, y) => `${y/(-window.innerHeight/4)}`) }}>Super Like</animated.div></div>
            <div className={styles.overlay}>
                {showDiscription?(
                    <React.Fragment>
                        <img alt={props.movie.title} src={props.movie.poster_path?`https://image.tmdb.org/t/p/w500${props.movie.backdrop_path}`:"https://m.media-amazon.com/images/S/sash/8ZhQrGnWn9cWUVQ.png"}></img>
                        <Fab className={styles.downButton} onClick={hideDiscription}><i className="material-icons">south</i></Fab>
                        <div><h2>{props.movie.title} - Overview</h2><div>{props.movie.overview}</div></div>
                    </React.Fragment>
                    )
                :""}
            </div>
            <img alt={props.movie.name} src={props.movie.poster_path?`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`:"https://m.media-amazon.com/images/S/sash/8ZhQrGnWn9cWUVQ.png"}></img>
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