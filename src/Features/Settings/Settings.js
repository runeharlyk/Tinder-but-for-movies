import React from 'react';
import styles from "./Settings.module.css"
import { firebase } from "../../auth/initFirebase";
import {FirebaseAuthConsumer} from "@react-firebase/auth";
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import LicensBanner from "../LicensBanner/LicensBanner"

const Settings = (props) =>{
    const [state, setState] = React.useState({
        rememberMe: true,
        RTU:true,
        notifications:true,
        useInterests:true,
        useActors:true,
        useLanguage:true,
        useLocation: true,
        useGenres:true,
    });
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };  
    
    return (
        <div className={`${styles.container} ${props.show?"":styles.hide}`}>
            <div className={styles.header}><h2>Settings</h2><h2 onClick={props.callback} className={styles.close}>Done</h2></div>
            <FirebaseAuthConsumer>
              {({ user}) => {
                return (
                <div className={styles.body}>
                    <h2>Account Settings</h2>
                    {
                        user.email?(
                        <div className={styles.colum}>
                            <div>Email</div>
                            <div>{user.email}</div>
                        </div>):null
                    }
                    {
                        user.phoneNumber?(
                        <div className={styles.colum}>
                            <div>Phone Number</div>
                            <div>{user.providerData[0].providerId}</div>
                        </div>):null
                    }
                    <div className={styles.colum}>
                        <div>Login Method</div>
                        <div>{user.providerData[0].providerId}</div>
                    </div>
                    
                    <div className={styles.colum}>
                        <div>Remember Me</div>
                        <div>
                            <Switch
                            checked={state.rememberMe}
                            onChange={handleChange}
                            color="primary"
                            name="rememberMe"
                            inputProps={{ 'aria-label': 'primary checkbox' }}/>
                        </div>
                    </div>
                    <div className={styles.signOut}>
                        <Button onClick={() => {firebase.auth().signOut();}} variant="contained">Sign out</Button>
                        <Button variant="contained" color="secondary">DELETE USER</Button>
                    </div>

                    <h2>App Settings</h2>
                    <div className={styles.colum}>
                        <div>Theme</div>
                        <div>
                            <i className="material-icons">brightness_low</i>
                            <i className="material-icons">brightness_medium</i>
                            <i className={styles.activeTheme} className="material-icons">brightness_high</i>
                        </div>
                    </div>

                    <h2>Privacy setting</h2>
                    <div className={styles.colum}>
                        <div>Profile type</div>
                        <div>Public<i className="material-icons">public</i></div>
                    </div>
                    <div className={styles.colum}>
                        <div>People and Groups</div>
                        <div><i className="material-icons">arrow_forward_ios</i></div>
                    </div>
                    <div className={styles.colum}>
                        <div>Store interests</div>
                        <div>
                        <Switch
                            checked={state.useInterests}
                            onChange={handleChange}
                            color="primary"
                            name="useInterests"
                            inputProps={{ 'aria-label': 'primary checkbox' }}/>
                        </div>
                    </div>
                    <div className={styles.colum}>
                        <div>Background Sync</div>
                        <div>On<i className="material-icons">sync</i></div>
                    </div>
                    <div className={styles.colum}>
                        <div>Real Time Update</div>
                        <div>On<i className="material-icons">sync</i></div>
                    </div>
                    <div className={styles.colum}>
                        <div>Notifications</div>
                        <div>On<i className="material-icons">arrow_forward_ios</i></div>
                    </div>
                    <div className={styles.colum}>
                        <div>Privacy Policy</div>
                        <div><a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Read me<i className="material-icons">arrow_forward_ios</i></a></div>
                    </div>

                    <h2>Content Delivery</h2>
                    <div className={styles.colum}>
                        <div>Use Interests</div>
                        <div>
                        <Switch
                            checked={state.useInterests}
                            onChange={handleChange}
                            color="secondary"
                            name="useInterests"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}/>
                        </div>
                    </div>
                    <div className={styles.colum}>
                        <div>Actors</div>
                        <div>
                        <Switch
                            checked={state.useInterests && state.useActors}
                            onChange={handleChange}
                            color="primary"
                            name="useActors"
                            inputProps={{ 'aria-label': 'primary checkbox' }}/>
                        </div>
                    </div>
                    <div className={styles.colum}>
                        <div>Use Language</div>
                        <div>
                        <Switch
                            checked={state.useInterests && state.useLanguage}
                            onChange={handleChange}
                            color="primary"
                            name="useLanguage"
                            inputProps={{ 'aria-label': 'primary checkbox' }}/>
                        </div>
                    </div>
                    <div className={styles.colum}>
                        <div>Use Location</div>
                        <div>
                        <Switch
                            checked={state.useInterests && state.useLocation}
                            onChange={handleChange}
                            color="primary"
                            name="useLocation"
                            inputProps={{ 'aria-label': 'primary checkbox' }}/>
                        </div>
                    </div>
                    <div className={styles.colum}>
                        <div>Genres</div>
                        <div>
                        <Switch
                            checked={state.useInterests && state.useGenres}
                            onChange={handleChange}
                            color="primary"
                            name="useGenres"
                            inputProps={{ 'aria-label': 'primary checkbox' }}/>
                        </div>
                    </div>
                    <LicensBanner />
                </div>
                )
              }}
              </FirebaseAuthConsumer>
        </div>
    );
}

export default Settings