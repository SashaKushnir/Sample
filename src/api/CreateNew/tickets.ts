import {ApiTicketsResultType, myGetInstance} from "../api";

export const tickets = {
    getAllTickets: () => {
        return myGetInstance.get<ApiTicketsResultType>('/tickets')
    }
}
