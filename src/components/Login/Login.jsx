import React from 'react';

import TelegramLoginButton from "telegram-login-button";
import {useNavigate} from "react-router-dom";

const Login = ({setUserData}) => {

    const navigate = useNavigate()

    const onAuth = (ctx) => {
        setUserData(ctx)
        navigate('..', {replace: true})
    }

    return (
        <div>
            <h2>For login throw through telegram push the button here </h2>
            <TelegramLoginButton botName={'reacttgauth_bot'} dataOnauth={onAuth}/>
        </div>
    );
};

export default Login;
