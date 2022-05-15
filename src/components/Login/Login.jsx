import React from 'react';

import TelegramLoginButton from "telegram-login-button";

const Login = ({setUserData}) => {

    const onAuth = (ctx) => {
        console.log(ctx)
    }

    return (
        <div>
            <h2>For login throw through telegram push the button here </h2>
            <TelegramLoginButton botName={'reacttgauth_bot'} dataOnauth={(user) => console.log(user)}/>
        </div>
    );
};

export default Login;
