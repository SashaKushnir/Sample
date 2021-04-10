import { RootState } from "../redux/store";

// Get menu data
//
// export const selectMenuKitchen = (state: RootState) => state.createObj.createNew?.menus
// export const selectTickets = (state: RootState) => state.createObj.tickets.tickets
// export const selectServices = (state:RootState) => state.createObj.services.services
// //export const selectHistory = (state:RootState) => state.history.history

export const selectMenuKitchen = (state: RootState) => state.createNew?.menus
export const selectTickets = (state: RootState) => state.tickets?.tickets
export const selectServices = (state:RootState) => state.services.services
export const selectHistory = (state:RootState) => state.history.banquets
export const selectUsers = (state:RootState) => state.customers
// export const selectSelectedOrders = (state:RootState) => state.createNew.selectedOrders
// export const selectSelectedMenu = (state: RootState) => state.createNew.selectedOrders.selectedMenu
// export const selectSelectedTickets = (state: RootState) => state.createNew.selectedOrders.selectedTickets
// export const selectSelectedServices = (state: RootState) => state.createNew.selectedOrders.selectedServices

