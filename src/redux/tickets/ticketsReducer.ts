import { ActionsTypes } from "../store";
import { ticketsActions } from "./ticketsActions";
import {CommentItem} from "../history/newHistoryReducer";


let initialState: TicketInitial = {}

export interface Determine {
    id: number
    day: number | null
    month: number | null
    year: number | null
    hours: number | null
    minutes: number | null
    is_templatable: boolean
    type: string
}

export interface PeriodItem {
    id: number
    beg_datetime: Determine
    beg_datetime_id: number
    end_datetime: Determine
    end_datetime_id: number
    weekdays: string | null
    is_templatable: boolean
    type: string
}

export type Category = {
    id: number
    name: string
    description: string
    type: string
}


export type TicketItem = {
    id: number
    name: string
    description: string
    price: number
    category_id: number
    period_id: number
    period: PeriodItem
    category: Category
    created_at: string
    updated_at: string
    type?: string
    amount?: number | string
    showAmount?: boolean
    ready?: boolean
    comments: Array<CommentItem>
}

export type TicketArray = Array<TicketItem>

export type TicketInitial = {
    tickets?: TicketArray
}





export const ticketsReducer = (tickets = initialState, action: ActionsTypes<typeof ticketsActions>): TicketInitial => {

    switch (action.type) {
        case "ADD_TICKET":
            return {
                ...tickets,
                tickets: tickets.tickets? [...tickets.tickets.map((ticketI) => {
                    if(ticketI.id === action.ticketI.id){
                        ticketI.showAmount=true
                        if(action.value){
                            ticketI.amount = action.value
                        } else {
                            ticketI.amount=""
                        }
                        ticketI.amount > 0 ?  ticketI.ready = true :  ticketI.ready = false
                        ticketI.comments =  action.ticketI.comments?[...action.ticketI.comments]:[]
                    }
                    return ticketI
                })] : undefined
            }
        case "SET_TICKET_INFO":
            return {
                ...tickets,
                tickets:[...action.ticketI]
            }
        case "TOTALLY_DELETE_TICKET_ITEM":
            return {
                ...tickets,
                tickets: tickets.tickets?[...tickets.tickets.map((ticketI)=>{
                    if(ticketI.id === action.ticketI.id) {
                        delete ticketI.amount
                        ticketI.showAmount=false
                    }
                    return ticketI
                })]:undefined
            }
        case "TOTALLY_DELETE_ALL_TICKET_ITEMS":
            return {
                ...tickets,
                tickets: tickets.tickets?[...tickets.tickets.map((ticketI)=>{
                        delete ticketI.amount
                        ticketI.showAmount=false
                    return ticketI
                })]:undefined
            }
        default:
            return tickets
    }
}
