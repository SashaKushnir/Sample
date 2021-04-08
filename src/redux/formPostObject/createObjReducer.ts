import {ActionsTypes} from "../store";
import {createObjActions} from "./createObjActions";
import {ProductCategoriesItem} from "../newBanknote/newBanknoteReducer";
import {ServiceCategoriesItem} from "../services/servicesReducer";

export interface PostObject {
    postBanquetObj?: BanquetType
}

const initialState: PostObject = {

}


export const createObjReducer = (postObj = initialState, action: ActionsTypes<typeof createObjActions>) => {

    switch (action.type) {
        case "SET_POST_BANQUET_OBJ":
            return {
                ...postObj,
                postBanquetObj: action.payload
            }
        default:
            return postObj
    }
}
type Product_order = {
    discount_id?: number
    items?: Array<Product>
}

export type Product = {
    id: number
    amount: number
}

type Ticket_order = {
    discount_id?: number
    items?: Array<Ticket>
}

type Ticket = {
    id: number
    child_tickets_amount: number
    adult_tickets_amount: number
    birthday_tickets_amount: number
}

type Service_order = {
    discount_id?: number
    items?: Array<Service>
}

type Service = {
    id: number
    amount: number
    duration: number
}

export type BanquetType = {
    name: string
    description: string | null
    customer_id: number
    state_id: number
    advance_amount: number
    child_guests_amount: number
    adult_guests_amount: number
    beg_datetime: string | null
    end_datetime: string | null
    product_order?: Product_order
    ticket_order?: Ticket_order
    service_order?: Service_order
}
