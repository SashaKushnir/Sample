import { RootState } from "../redux/store";

// Get menu data

export const selectMenuKitchen = (state: RootState) => state.createNew?.menus
export const selectTickets = (state: RootState) => state.tickets.ticket_categories
export const selectServices = (state:RootState) => state.services.service_categories
export const selectSelectedMenus = (state:RootState) => state.createNew.selectedOrders
