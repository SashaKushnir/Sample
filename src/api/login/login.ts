import { ApiLoginResultType, myPostInstance } from "../api";
import { LoginFormType } from "../../components/Authorisation/LoginForm";


export const login = {
    tryLogin: (loginObject: LoginFormType) => {
        return myPostInstance.post<ApiLoginResultType>('/users/login', loginObject)
    }
}
export type UserType = {
    id: number
    name: string
    password: "MANAGER_USER"
    api_token: string
    role_id: number
    role: {
        id: number
        name: string
        description: string | null
        can_read: boolean
        can_insert: boolean
        can_modify: boolean
        is_owner: boolean
        created_at: string
        updated_at: string
    }
    created_at: string
    updated_at: string
} | null
