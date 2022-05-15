import React, {useState} from 'react';
import {acceptedUsers} from "../../bd";

const SecuredData = ({userData, }) => {
    const [isVerif, setIsVerif] = useState(acceptedUsers.includes(`${userData.username}`))
    console.log(userData)

    const userConstruct = (
        <div>
            <span>id: {userData.id}</span>
            <span>name: {userData.first_name}</span>
            <span>token: {userData.hash}</span>
            <span>data: {new Date(userData.auth_date)}</span>
        </div>
    )

    return (
        <div>
            {isVerif ? userConstruct : <span>u are not admitted for see this data</span> }
        </div>
    );
};

export default SecuredData;
