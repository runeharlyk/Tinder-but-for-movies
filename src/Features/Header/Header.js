import React from 'react';
import styles from "./Header.module.css"
import {NavLink, Redirect} from "react-router-dom";

const Header = () =>{
    return (
        <div className={styles.header}>
            <div className={styles.headerWrap}>
                <Redirect exact from="/" to="/Tinder-but-for-movies/app/recs" />
                <NavLink to="/Tinder-but-for-movies/app/recs" activeClassName={styles.active}><button><i className="material-icons">local_fire_department</i></button></NavLink>
                <NavLink to="/Tinder-but-for-movies/app/likes" activeClassName={styles.active}><button><i className="material-icons">favorite</i></button></NavLink>
                <NavLink to="/Tinder-but-for-movies/app/matches" activeClassName={styles.active}><button><i className="material-icons">forum</i></button></NavLink>
                <NavLink to="/Tinder-but-for-movies/app/profile" activeClassName={styles.active}><button><i className="material-icons">account_circle</i></button></NavLink>
            </div>
        </div>
    );
}

export default Header