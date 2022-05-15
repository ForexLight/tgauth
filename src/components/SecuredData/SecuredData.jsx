import React, {useState} from 'react';
import {acceptedUsers} from "../../bd";

const SecuredData = ({userData, }) => {
    const [isVerif] = useState(acceptedUsers.includes(`${userData.username}`))
    console.log(userData)

    const userConstruct = (
        <div>
            <span>id: {userData.id}</span><br/>
            <span>name: {userData.first_name}</span><br/>
            <span>token: {userData.hash}</span><br/>
            <span>data: {new Date(userData.auth_date).toString()}</span>
        </div>
    )

    return (
        <div>
            {isVerif ? userConstruct : <span>u are not admitted for see this data</span> }
        </div>
    );
};

export default SecuredData;
