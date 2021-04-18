import {ActionsTypes} from "../store";
import {banquetActions} from "./banquetInfoActions";
import {State} from "../history/newHistoryReducer";
import {CustomerType} from "../customers/customersReducer";

let initialState: BanquetInitial = {
    name: "None",
    description: "None",
    beginning: "",
    end: "",
    advance_amount: 0,
    total: 0,
    customer: null
}

export type BanquetInitial = {
    name: string
    description: string | null
    beginning: string
    end: string
    advance_amount: number
    total: number
    customer: CustomerType | null
}

export const banquetReducer = (banquet = initialState, action: ActionsTypes<typeof banquetActions>): BanquetInitial => {

    switch (action.type) {
        case "SET_NAME":
            return {
                ...banquet,
                name:action.name
            }
        case "SET_BEGINING":
            return{
                ...banquet,
                beginning: action.time
            }
        case "SET_END":
            return{
                ...banquet,
                end: action.time
            }
        case "SET_DESCRIPTION":
            return{
                ...banquet,
                description: action.description
            }
        case "SET_ADVANCE":
            return{
                ...banquet,
                advance_amount: action.num
            }
        // case "SET_STATE":
        //     return{
        //         ...banquet,
        //         state: {
        //
        //             name: action.state
        //         }
        //     }
        case "SET_TOTAL_PRICE":
            return{
                ...banquet,
                total: action.price
            }
        case "SET_CUSTOMER":
            return{
                ...banquet,
                customer: action.cus
            }
        default:
            return banquet
    }
}

