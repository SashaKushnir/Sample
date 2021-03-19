import { ActionsTypes } from "../store";
import { ticketsActions } from "./ticketsActions";
import ticketsInitial from '../../responses/get_tickets.json'
import { ProductCategoriesItem } from "../newBanknote/newBanknoteReducer";


let initialState: TicketInitial = ticketsInitial

export interface Determine {
    id: number
    day: number | null
    month: number | null
    year: number | null
    hours: number | null
    minutes: number | null
    is_templatable: boolean
}

export interface PeriodItem {
    id: number
    beg_datetime: Determine
    beg_datetime_id: number
    end_datetime: Determine
    end_datetime_id: number
    weekdays: string | null
    is_templatable: boolean
}

// export interface PeriodArray {
//     id: number
//     name: string
//     description: string
//     price: number
//     category_id: number
//     period: PeriodItem
// }
//
// export interface Ticket {
//     id: number
//     category_id: number
//     price: number
//     name: string
//     description: string
//     period_id:number | null
//     period:PeriodItem | null
//     category: MenuCategory
//     created_at: string | null
//     updated_at: string | null
// }

export interface TicketInitial {
    tickets: Array<ProductCategoriesItem>
    response_status: boolean
    response_error: string | null
}



export const ticketsReducer = (tickets = initialState, action: ActionsTypes<typeof ticketsActions>): TicketInitial => {

    switch (action.type) {

        default:
            return tickets
    }
}

// Thunk