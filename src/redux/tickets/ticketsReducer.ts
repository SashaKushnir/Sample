import { ActionsTypes } from "../store";
import { ticketsActions } from "./ticketsActions";
import ticketsInitial from '../../responses/get_tickets.json'


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
    end_datetime: Determine
    weekdays: number[]
    is_templatable: boolean
}

export interface PeriodArray {
    id: number
    name: string
    description: string
    price: number
    category_id: number
    period: PeriodItem
}

export interface TicketCategoriesItem {
    id: number
    name: string
    description: string
    tickets: Array<PeriodArray>
}

export interface TicketInitial {
    ticket_categories: Array<TicketCategoriesItem>
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