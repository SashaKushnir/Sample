import { ProductCategoriesItem } from "../newBanknote/newBanknoteReducer";
import {TicketItem} from "./ticketsReducer";

export const ticketsActions = {
    addTicketItem: (ticketI: TicketItem, value: number | null) =>
        ({type: "ADD_TICKET", ticketI, value}) as const,
    deleteFullTicketItem: (ticketI: TicketItem) => ({
        type: "TOTALLY_DELETE_TICKET_ITEM",
        ticketI
    }) as const,
    deleteAllAmounts: () => ({
        type: "TOTALLY_DELETE_ALL_TICKET_ITEMS"
    }) as const,
    setTicketInfo: (ticketI: Array<TicketItem>) => ({
        type: "SET_TICKET_INFO",
        ticketI
    }) as const
}
