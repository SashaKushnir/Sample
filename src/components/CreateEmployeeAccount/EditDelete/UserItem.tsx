import React, {SyntheticEvent} from 'react'
import {useDispatch} from "react-redux";
import {UserInter} from "../../../api/login/login";
import {createNewEmployeeA} from "../../../redux/CreateNewEmployee/CreateNewEmployeeA";
import {deleteUser} from "../../../redux/CreateNewEmployee/CreateNewEmployeeT";
import s from './UserItem.module.css'

interface UserItemProps {
    userI: UserInter
}

export interface EditUserType {
    name: string
    password: string
    role_id: 1 | 2 | 3
    api_token: string
    id?: number
}

export const UserItem: React.FC<UserItemProps> = ({userI}) => {
    const d = useDispatch()
    const editUser = () => {
        d(createNewEmployeeA.editUser({
            name: userI.name,
            password:userI.password,
            role_id: userI.role_id as 1 | 2 | 3,
            api_token: userI.api_token,
            id: userI.id
        }))
    }
    const deleteU = (e: SyntheticEvent) => {
        d(deleteUser(userI.api_token, userI.id))
        e.stopPropagation()
    }
    return <div onClick={editUser} className={s.userItemWrap}>
        <div>
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