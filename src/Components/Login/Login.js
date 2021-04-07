import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebase.config';
import { Button } from 'react-bootstrap';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';


const Login = () => {
const [loggedInUser, seLoggedInUser]=useContext(UserContext)

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    let history = useHistory();
  let location = useLocation();


  let { from } = location.state || { from: { pathname: "/" } };
  
    const provider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {

                // var credential = result.credential;
                // var token = credential.accessToken;
                const userInfo = {email: result.user.email,
                name:result.user.displayName};
                seLoggedInUser(userInfo)
                history.replace(from);
                console.log("user",userInfo);
                // ...
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                console.log(errorCode,errorMessage,email);
           
            });
    }


    return (
        <div style={{display: "flex",justifyContent:"center",marginTop:'200px'}}>

            <Button onClick={handleGoogleSignIn} variant="success">Google login</Button>{' '}
        </div>
    );
};

export default Login;