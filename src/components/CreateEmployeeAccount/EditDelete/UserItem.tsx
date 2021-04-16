import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {UserInter} from "../../../api/login/login";

interface UserItemProps {
    userI: UserInter
}

export const UserItem: React.FC<UserItemProps> = ({userI}) => {
    const d = useDispatch()

    return <div>
        <div>
            {userI.name}
        </div>
        <div>
            {userI.password}
        </div>
        <div>
            {userI.role}
        </div>
        <div>
            {userI.type}
        </div>
    </div>
}