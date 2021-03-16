import React from 'react';
import styles from "./Header.module.css"
import {NavLink, Redirect} from "react-router-dom";

const Header = () =>{
    return (
        <div className={styles.header}>
            <div className={styles.headerWrap}>
                <Redirect exact from="/" to="/app/recs" />
                <NavLink to="/app/recs" activeClassName={styles.active}><button><i className="material-icons">local_fire_department</i></button></NavLink>
                <NavLink to="/app/likes" activeClassName={styles.active}><button><i className="material-icons">favorite</i></button></NavLink>
                <NavLink to="/app/matches" activeClassName={styles.active}><button><i className="material-icons">forum</i></button></NavLink>
                <NavLink to="/app/profile" activeClassName={styles.active}><button><i className="material-icons">account_circle</i></button></NavLink>
            </div>
        </div>
    );
}

export default Header