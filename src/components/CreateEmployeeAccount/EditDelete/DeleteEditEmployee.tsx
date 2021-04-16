import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getAllEmployees} from "../../../redux/CreateNewEmployee/CreateNewEmployeeT";
import {RootState} from "../../../redux/store";
import {UserItem} from "./UserItem";
import s from './DeleteEditEmployee.module.css'
import {EditUserForm} from "../EditUserForm/EditUserForm";

export const DeleteEditEmployee = () => {
    const token = localStorage.getItem('api_token')
    const d = useDispatch()
    const users = useSelector((state: RootState) => state.accounts.users)?.map((userI, index) =>
        <UserItem key={index} userI={userI} />)

    useEffect(() => {
        if(token)
            d(getAllEmployees(token))
    },[])

    return <div className={s.deleteEdit}>
        <div>
            <EditUserForm/>
        </div>
        <div className={s.uploadedUsers}>
            {users}
        </div>
    </div>
}