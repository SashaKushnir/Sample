import {ActionsTypes} from "../store";
import {banquetActions} from "./banquetInfoActions";
import {CustomerType} from "../customers/customersReducer";

let initialState: BanquetInitial = {
    name: "None",
    description: "None",
    beginning: "",
    end: "",
    advance_amount: 0,
    total: 0,
    customer: null,
    state: 1
}

export interface SpaceItem {
    "id": number
    "name": string
    "description": null | string
    "number": number
    "floor": number
    "price": number
    "category_id": number | null
    "period_id": unknown
    "period": unknown
    "category": SpaceCategory
    "created_at": string
    "updated_at": string
    "type": string
    selected?: boolean
}

export interface SpaceCategory {
    "id": number
    "name": string
    "description": string | null
    "type": string
}


export type BanquetInitial = {
    id?: number
    name: string
    description: string | null
    beginning: string
    end: string
    advance_amount: number
    total: number
    customer: CustomerType | null
    state: number
    basicSpaces?: Array<SpaceItem>
}

export const banquetReducer = (banquet = initialState, action: ActionsTypes<typeof banquetActions>): BanquetInitial => {

    switch (action.type) {
        case "SET_NAME":
            return {
                ...banquet,
                name:action.name
            }
        case "SELECT_UNSELECT_SPACE_BY_ID":
            return {
                ...banquet,
                basicSpaces: banquet.basicSpaces?[...banquet.basicSpaces.map((spaceI) => {
                    if(spaceI.id === action.spaceId) {
                        spaceI.selected = !!!spaceI.selected
                    }
                    return spaceI
                })]:[]
            }
        case "SET_BEGINING":
            return{
                ...banquet,
                beginning: action.time
            }
        case "SET_BASIC_SPACES_INFO":
            return {
                ...banquet,
                basicSpaces: [...action.spaces]
            }
        case "SET_END":
            return{
                ...banquet,
                end: action.time
            }
        case "REMOVE_ID_FOR_BANQUET":
            delete banquet.id
            return {
                ...banquet,
            }
        case "SET_ID_FOR_BANQUET":
            return {
                ...banquet,
                id: action.banquetId
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
        case "SET_STATE":
            return{
                ...banquet,
               state: action.state
            }
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

