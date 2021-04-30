import {ApiCustomersResultType, myGetInstance} from "../api";

export const customers = {
    getAllUsers: () => {
        return myGetInstance.get<ApiCustomersResultType>('/customers')
    }
}
