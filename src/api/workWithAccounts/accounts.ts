import {ApiGetUsersResultType, ApiPatchUserResponseType, ApiResultType, myGetInstance} from "../api";
import {CreateNewEmployeeType} from "../../components/CreateEmployeeAccount/CreateNewEmployeeForm";
import {EditUserObjectType} from "../../components/CreateEmployeeAccount/EditUserForm/EditUserForm";

export const accounts = {
    tryCreateAccount: (signUpObject: CreateNewEmployeeType, api_token: string) => {
        return myGetInstance.post('/users', {data: signUpObject},{
            headers: {
                'api-token': api_token
            }
        })
    },
    getAllAccounts: (token: string) => {
        return myGetInstance.get<ApiGetUsersResultType>('/users',{
            headers:{
                'api-token': token
            }
        })
    },
    editAccountByToken: (newUserData: EditUserObjectType, token: string) => {
        return myGetInstance.patch<ApiPatchUserResponseType>('/users', {data: newUserData}, {
            headers: {
                'api-token': token
            }
        })
    },
    deleteAccountById: (id: number, headerToken: string) => {
        return myGetInstance.delete<ApiResultType>('/users',  {
            headers: {
                'api-token': headerToken
            },
            data: {id: id}
        })
    },
}
