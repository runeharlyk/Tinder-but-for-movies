import React, {useState} from 'react';
import styles from "./Profile.module.css"
import {FirebaseAuthConsumer} from "@react-firebase/auth";
import { RWebShare } from "react-web-share";
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import Settings from "../Settings/Settings"
import EditInfo from "../EditInfo/EditInfo"
import LicensBanner from "../LicensBanner/LicensBanner"

const Profile = () =>{
  const [showSetting, setShowSettings] = useState(false);
  const [showEditInfo, setShowEditInfo] = useState(false);
  document.title = 'Your Profile';

  const toogleSetting = () => {
    setShowSettings(showSetting => !showSetting);
  }

  const toogleEditInfo = () => {
    setShowEditInfo(showEditInfo => !showEditInfo);
  }

  const handleUpload = () =>{

  }

    return (
        <div className={styles.container}>
          <EditInfo show={showEditInfo} callback={toogleEditInfo} />
          <Settings show={showSetting} callback={toogleSetting}/>
          
          <div className={styles.header}>
            <div className={styles.headerContainer}>
              <div className={styles.flexWrapper}>
              <FirebaseAuthConsumer>
              {({ user}) => {
                return (
                    <div className={styles.userInfo}>
                      
                      <img alt="" className={styles.userPhoto} src={user.photoURL || process.env.PUBLIC_URL + '/blank-profile-picture.png'}></img>
                      <div className={styles.userName}>{user.displayName}</div>
                    </div>
                )
              }}
              </FirebaseAuthConsumer>
              <div className={styles.menu}>
              <div  className={styles.menuBlob}>
                <Fab onClick={toogleSetting} aria-label="settings">
                  <Icon>settings</Icon>
                </Fab>
                <div>Settings</div>
              </div>
                <div className={styles.menuBlob}>
                <Fab color="secondary" aria-label="upload">
                  <input type="file" hidden id="actual-btn"/>
                  <label for="actual-btn"><Icon>upload</Icon></label>
                </Fab>
                  <div>Add imdb ratings</div>
                </div>
                <div className={styles.menuBlob}>
                <Fab  onClick={toogleEditInfo} aria-label="edit info">
                  <Icon>edit</Icon>
                </Fab>
                  <div>Edit info</div></div>
                </div>
              </div>
              </div>
            </div>
            <div className={styles.footer}>
              <div className={`${styles.menuBlob} ${styles.shareContainer}`}>
              <Fab color="primary" aria-label="share" className={styles.share}>
                <RWebShare
                  data={{
                    text: "Swipe movies and find matches",
                    url: "https://developer.runeharlyk.dk/Explore/files/Tinder%20For%20Movies/index.html",
                    title: "Tinder, but for movie",
                  }}
                >
                    <Icon>share</Icon>
                </RWebShare>
              </Fab>
              <div>Share</div>
              <LicensBanner />
              </div>
            </div>
        </div>
    );
}

//<i className="material-icons">person_add</i><i className="material-icons">groups</i><i className="material-icons">group_add</i>

export default Profile