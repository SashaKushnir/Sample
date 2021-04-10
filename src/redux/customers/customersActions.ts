import {CustomerType, CustomersArray} from ".//customersReducer";

export const customersActions = {
    setCustomersInfo: (customers: CustomersArray) => ({type: "ADD_USER_INFO", customers}) as const,
    deleteOneCustomer: (customer: CustomerType) => ({type: "DELETE_ONE_USER", customer}) as const
}
