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
    return <div>
        <div onClick={editUser}>
            <div>
                <b>Name: </b>
                {userI.name}
            </div>
            <div>
                <b>Type: </b>
                {userI.type}
            </div>
            <div>
                <b>Password: </b>
                {userI.password}
            </div>
            <div>
                <b>Created at: </b>
                {userI.created_at}
            </div>
            <div>
                <b>Updated at: </b>
                {userI.updated_at}
            </div>
        </div>
        <button onClick={deleteU}>
            Delete
        </button>
    </div>
}