import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Helmet} from "react-helmet";

import firebase from "firebase/app";
import "firebase/auth";
import {
  FirebaseAuthProvider,
  IfFirebaseAuthed,
  IfFirebaseUnAuthed
} from "@react-firebase/auth";
import { config } from "./auth/config";
import Login from './auth/Login/Login';

import "firebase/database";
import {FirebaseDatabaseProvider} from "@react-firebase/database";

/*
TODO LIST
intrest and genres
groups, people
*/


ReactDOM.render(
  <React.StrictMode>
    <FirebaseAuthProvider firebase={firebase} {...config} >
      
      <Helmet>     
          <title>Rune Harlyk</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
          <link rel="manifest" href="%PUBLIC_URL%/manifest.json"></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        </Helmet>
        
        <IfFirebaseUnAuthed>
        {() => {
              return <Login />;
            }} 
        </IfFirebaseUnAuthed>
        <IfFirebaseAuthed>
            {() => {
              return <FirebaseDatabaseProvider firebase={firebase} {...config}><App /></FirebaseDatabaseProvider>
            }}
          </IfFirebaseAuthed>
          
    </FirebaseAuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
