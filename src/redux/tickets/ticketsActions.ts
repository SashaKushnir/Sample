import {ProductCategoriesItem} from "../newBanknote/newBanknoteReducer";
import {TicketItem} from "./ticketsReducer";
import {CommentMainProperties} from "../../components/CreateNewWrapper/CreateNewMenus/MenuList/DishItem/ProductCategoriesMyItemBasket";

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
    }) as const,
    addTicketComment: (commentI: CommentMainProperties, index: number) => ({
        type: "SAVE_COMMENT_TO_TICKETS",
        commentI,
        index
    }) as const,
    addTicketEmptyComment: (commentI: CommentMainProperties) => ({type: "ADD_COMMENT_TO_TICKETS", commentI}) as const,
}
