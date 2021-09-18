import React from 'react'
import { auth, provider } from './firebase';
import "./login.css";
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {

    const [{}, dispatch] = useStateValue();

    const signin =() => {
        auth.signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type : actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch((error) => alert(error.message));
    }

    return (
        <div className="login">
            
            <span className="left_span">
            <img src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg" alt="" /> <a> News</a>
            </span>

            <button onClick={signin}>Sign in with Google</button>
            
        </div>
    )
}

export default Login
