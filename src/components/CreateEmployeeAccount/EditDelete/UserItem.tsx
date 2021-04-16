import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {UserInter} from "../../../api/login/login";
import {createNewEmployeeA} from "../../../redux/CreateNewEmployee/CreateNewEmployeeA";
import {deleteUser} from "../../../redux/CreateNewEmployee/CreateNewEmployeeT";

interface UserItemProps {
    userI: UserInter
}

export const UserItem: React.FC<UserItemProps> = ({userI}) => {
    const d = useDispatch()
    const editUser = () => {
        d(createNewEmployeeA.editUser(userI.name, userI.password, userI.role_id, userI.api_token))
    }
    const deleteU = () => {
        d(deleteUser(userI.api_token))
    }
    return <div onClick={editUser}>
        <div>
            {userI.id}
        </div>
        <div >
            {userI.name}
        </div>
        <div>
            {userI.type}
        </div>
        <div>
            {userI.password}
        </div><div>
            {userI.created_at}
        </div><div>
            {userI.updated_at}
        </div>
        <button onClick={deleteU}>
            Delete
        </button>
    </div>
}