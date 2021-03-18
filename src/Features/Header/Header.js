import React from 'react';
import styles from "./Header.module.css"
import {NavLink, Redirect} from "react-router-dom";

const Header = () =>{
    return (
        <div className={styles.header}>
            <div className={styles.headerWrap}>
<<<<<<< HEAD
                <Redirect exact from="/" to="/Tinder-but-for-movies/app/recs" />
                <NavLink to="/Tinder-but-for-movies/app/recs" activeClassName={styles.active}><button><i className="material-icons">local_fire_department</i></button></NavLink>
                <NavLink to="/Tinder-but-for-movies/app/likes" activeClassName={styles.active}><button><i className="material-icons">favorite</i></button></NavLink>
                <NavLink to="/Tinder-but-for-movies/app/matches" activeClassName={styles.active}><button><i className="material-icons">forum</i></button></NavLink>
                <NavLink to="/Tinder-but-for-movies/app/profile" activeClassName={styles.active}><button><i className="material-icons">account_circle</i></button></NavLink>
=======
                <Redirect exact from="/" to="./app/recs" />
                <NavLink to="../app/recs" activeClassName={styles.active}><button><i className="material-icons">local_fire_department</i></button></NavLink>
                <NavLink to="../app/likes" activeClassName={styles.active}><button><i className="material-icons">favorite</i></button></NavLink>
                <NavLink to="../app/matches" activeClassName={styles.active}><button><i className="material-icons">forum</i></button></NavLink>
                <NavLink to="../app/profile" activeClassName={styles.active}><button><i className="material-icons">account_circle</i></button></NavLink>
>>>>>>> 8d338070635cc482ff467f936c428d1f7fdbe2f7
            </div>
        </div>
    );
}

export default Header