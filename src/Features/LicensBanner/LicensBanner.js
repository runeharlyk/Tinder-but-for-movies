import React from 'react';
import styles from "./LicensBanner.module.css"

const LicensBanner = () =>{
    return (
        <div className={styles.banner}>
             Tinder, but for movies © 2021< br />
             (NOT ASSOCIATED WITH Tinder)
        </div>
    );
}

export default LicensBanner