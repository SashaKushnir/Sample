import {Customer, CustomersArray} from ".//customersReducer";

export const customersActions = {
    addUsersInfo: (user: CustomersArray) => ({type: "ADD_USER_INFO", user}) as const,
    deleteOneUser: (user: Customer) => ({type: "DELETE_ONE_USER", user}) as const
}
