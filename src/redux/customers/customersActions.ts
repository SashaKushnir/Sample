import {CustomerType, CustomersArray} from ".//customersReducer";

export const customersActions = {
    addUsersInfo: (user: CustomersArray) => ({type: "ADD_USER_INFO", user}) as const,
    deleteOneUser: (user: CustomerType) => ({type: "DELETE_ONE_USER", user}) as const
}
