import { RootState } from "../redux/store";

// Get menu data

export const selectMenuKitchen = (state: RootState) => state.createNew.menus
export const selectTickets = (state: RootState) => state.tickets.ticket_categories