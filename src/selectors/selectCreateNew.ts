import { RootState } from "../redux/store";

// Get menu data

export const menuKitchenInfo = (state: RootState) => state.createNew.menus
export const ticketsInfo = (state: RootState) => state.tickets.ticket_categories