import {ApiUsersResultType, myGetInstance} from "../api";

export const users = {
    getAllUsers: () => {
        return myGetInstance.get<ApiUsersResultType>('/users')
    }
}
