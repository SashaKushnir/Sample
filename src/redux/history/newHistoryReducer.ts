import { ActionsTypes } from "../store";
import { TicketArray } from "../tickets/ticketsReducer";
import {ServiceCategoriesItem, ServicesArray} from "../services/servicesReducer";
import { historyActions } from "./newHistoryAction";
import {MenuArray, Product_categories, ProductCategoriesItem} from "../newBanknote/newBanknoteReducer";
import data from "./../../responses/banquets.json"
import {CustomerType} from "../customers/customersReducer";

const initialState: HistoryInitial = {}



export const historyReducer = (history = initialState, action: ActionsTypes<typeof historyActions>): HistoryInitial => {

    switch (action.type) {
        case "SET_HISTORY_INFO":
            return {
                ...history,
                banquets: [...action.history]
            }
        case "DELETE_ONE_HISTORY":
            return{
                ...history,
                banquets: history.banquets?.filter((obj:History) => obj.id !== action.id)
            }
        default:
            return history
    }
}

export interface Ticket_order  {
    id: number
    banquet_id: number
    discount_id: number | null
    created_at: string
    updated_at: string
    discount: number | null
    items: TicketArray
}

export interface Product_order  {
    id: number
    banquet_id: number
    discount_id: number| null
    created_at: string
    updated_at: string
    discount: number | null
    items: Product_categories
}

export interface Service_order  {
    id: number
    banquet_id: number
    discount_id: number | null
    created_at: string
    updated_at: string
    discount: number | null
    items: ServicesArray
}

export interface State  {
    id: number
    name: string
    description: string | null
    type: string
}

type StateArray = Array<State>


export interface History{
    id: number
    name:string
    description: string | null
    advance_amount: number
    child_guests_amount: number
    adult_guests_amount: number
    beg_datetime: string
    end_datetime: string
    state_id: number
    customer_id: number
    created_at: string
    updated_at: string
    paid_at: string | null
    total: number
    ticket_order: Ticket_order | null
    product_order: Product_order | null
    service_order: Service_order | null
    state: StateArray
    customer: CustomerType
}

type HistoryArray = Array<History>

type HistoryInitial = {
    banquets?: HistoryArray
}



