import {CustomerType, CustomersArray} from ".//customersReducer";

export const customersActions = {
    setCustomersInfo: (customers: CustomersArray) => ({type: "ADD_CUSTOMER_INFO", customers}) as const,
    deleteOneCustomer: (customer: CustomerType) => ({type: "DELETE_ONE_CUSTOMER", customer}) as const,
    pushCreatedCustomer: (customer: CustomerType) => ({type: "PUSH_CUSTOMER", customer}) as const
}
