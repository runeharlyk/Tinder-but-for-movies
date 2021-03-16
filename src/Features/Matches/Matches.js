import React, { useState, useEffect } from 'react';
import { firebase } from "../../auth/initFirebase";
import styles from "./Matches.module.css"

const db = firebase.database();

const Matches = (props) =>{  
    return (
        <div className={styles.container}>
            Your matches <br></br>
            Chats and groups
            
        </div>
    );
}

export default Matches