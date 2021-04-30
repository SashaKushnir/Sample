import { ApiLoginResultType, myGetInstance } from "../api";
import { LoginFormType } from "../../components/Authorisation/LoginForm";


export const login = {
    tryLogin: (loginObject: LoginFormType) => {
        return myGetInstance.post<ApiLoginResultType>('/users/login', loginObject)
    },
    loginByToken: (token: string) => {
        return myGetInstance.post<ApiLoginResultType>('/users/login', {api_token: token})
    }
}

export type UserType = UserInter | null

export interface UserInter {
    id: number
    name: string
    password: string
    api_token: string
    role_id: number
    role: RoleType
    type?: string
    created_at?: string
    updated_at?: string
}

export interface RoleType {
    id: number
    name: string
    description: string | null
    can_read: boolean
    can_insert: boolean
    can_modify: boolean
    is_owner: boolean
    created_at: string
    updated_at: string
    type?:string
}