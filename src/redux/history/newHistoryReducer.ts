import {ActionsTypes} from "../store";
import {TicketArray} from "../tickets/ticketsReducer";
import {ServicesArray} from "../services/servicesReducer";
import {historyActions} from "./newHistoryAction";
import {Product_categories} from "../newBanknote/newBanknoteReducer";
import {CustomerType} from "../customers/customersReducer";
import {SpaceItem} from "../banquetInfo/banquetInfoReducer";

const initialState: HistoryInitial = {
    beg_datetime: "",
    end_datetime: ""
}



export const historyReducer = (history = initialState, action: ActionsTypes<typeof historyActions>): HistoryInitial => {

    switch (action.type) {
        case "SET_HISTORY_INFO":
            return {
                ...history,
                banquets: [...action.history]
            }
        case "SET_BEG_DATETIME":
            return {
                ...history,
                beg_datetime: action.beg_datetime
            }
        case "SET_END_DATETIME":
            return {
                ...history,
                end_datetime: action.end_datetime
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
    comments: Array<CommentItem>
    total: number
}

export interface Product_order  {
    id: number
    banquet_id: number
    discount_id: number| null
    created_at: string
    updated_at: string
    discount: number | null
    items: Product_categories
    comments: Array<CommentItem>,
    total: number
}

export interface Service_order  {
    id: number
    banquet_id: number
    discount_id: number | null
    created_at: string
    updated_at: string
    discount: number | null
    items: ServicesArray
    total: number
}

export interface State  {
    id: number
    name: string
    description: string | null
    type: string
}

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
    space_order: SpaceOrderGet | null
    state: State
    customer: CustomerType
    comments: Array<CommentItem>
}

export interface CommentItem {
    container_id?: number
    container_type?: string
    created_at?: string
    id?: number
    target_id: number
    target_type: string
    text: string
    type?: string
    updated_at?: string
}

type HistoryArray = Array<History>

type HistoryInitial = {
    banquets?: HistoryArray
    beg_datetime: string
    end_datetime: string
}


export interface SpaceOrderGet {
    "id": number
    "banquet_id": number
    "discount_id": number | null
    "created_at": string
    "updated_at": string
    "discount": null | unknown
    "items"?:Array<SpaceItem>
}
//
//
// export interface SpaceOrderGetItem {
//     "id": number
//     "name": string
//     "description": unknown | null
//     "number": number
//     "floor": number
//     "price": 0,
//     "category_id": 1,
//     "period_id": null,
//     "period": null,
//     "category": {
//         "id": 1,
//         "name": "table",
//         "description": null,
//         "type": "space_categories"
//     },
//     "created_at": "2021-04-23 16:52:12",
//     "updated_at": "2021-04-23 16:52:12",
//     "type": "spaces",
//     "beg_datetime": "2021-04-16 17:00:00",
//     "end_datetime": "2022-04-16 21:00:00",
//     "comments": []
// }
//
//
//         "items": [
//         {
//
//         },
