import React from 'react';
import firebase from "firebase/app";
import Button from '@material-ui/core/Button';
import styles from './Login.module.css';

export default function Login() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
       <h2>Login</h2>
       <div className={styles.buttonContainer}>
        <Button className={styles.loginButton} variant="contained"
          onClick={() => {
            const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(googleAuthProvider);
          }}
        >
          Sign In with Google
          </Button>
          
          </div>
        </div>
    </div>
  );
}