import { ActionsTypes } from "../store";
import { TicketArray } from "../tickets/ticketsReducer";
import { ServicesArray } from "../services/servicesReducer";
import { historyActions } from "./newHistoryAction";
import { MenuArray } from "../newBanknote/newBanknoteReducer";

const initialState:  HistoryArray | null = null


export const historyReducer = (history = initialState, action: ActionsTypes<typeof historyActions>): HistoryInitial | null=> {

    switch (action.type) {
        default:
            return history
    }
}

type HistoryInitial = {
    name:string
    description: string | null
    customer_id: number
    advance_amount: number | null
    child_guests_amount: number | null
    adult_guests_amount: number | null
    beg_datetime: string | null
    end_datetime: string | null
    products: MenuArray | null
    services: ServicesArray | null
    tickets: TicketArray | null
}

export type HistoryArray = Array<HistoryInitial>

