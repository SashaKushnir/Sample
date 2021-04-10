import {CustomerType, CustomersArray} from ".//customersReducer";

export const customersActions = {
    setCustomersInfo: (customers: CustomersArray) => ({type: "ADD_CUSTOMER_INFO", customers}) as const,
    deleteOneCustomer: (customer: CustomerType) => ({type: "DELETE_ONE_CUSTOMER", customer}) as const,
    selectedCustomer: (customer: CustomerType) => ({type: "SELECTED_CUSTOMER", customer}) as const,
   // selectCustomer: (customer: CustomerType) => ({type: "SELECT_CUSTOMER", customer}) as const,
    //unSelectAllCustomer: () => ({type: "UN_SELECT_ALL_CUSTOMER"}) as const,
}
