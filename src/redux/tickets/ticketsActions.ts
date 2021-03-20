import { ProductCategoriesItem } from "../newBanknote/newBanknoteReducer";

export const ticketsActions = {
    addTicketItem: (ticketI: ProductCategoriesItem, value: number | null) =>
        ({type: "ADD_TICKET", ticketI, value}) as const,
    deleteFullTicketItem: (ticketI: ProductCategoriesItem) => ({
        type: "TOTALLY_DELETE_TICKET_ITEM",
        ticketI
    }) as const,
    setTicketInfo: (ticketI: Array<ProductCategoriesItem>) => ({
        type: "SET_TICKET_INFO",
        ticketI
    }) as const
}