import {ActionsTypes} from "../store";
import {banquetActions} from "./banquetInfoActions";
import {CustomerType} from "../customers/customersReducer";
import {BanquetState} from "../BanquetState/BanquetStatesR";

let initialState: BanquetInitial = {
    name: "",
    description: "",
    beginning: "",
    end: "",
    advance_amount: 0,
    total: 0,
    customer: null,
    state: null,
    notDisabledSpaces: [],
    notDisabledDate: ""
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
    intervals?:Array<any>
    "category": SpaceCategory
    "created_at": string
    "updated_at": string
    "type": string
    selected?: boolean
    disabled?: boolean
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
    state: BanquetState | null
    basicSpaces?: Array<SpaceItem>
    notDisabledSpaces: Array<SpaceItem>
    notDisabledDate: string
}

export const banquetReducer = (banquet = initialState, action: ActionsTypes<typeof banquetActions>): BanquetInitial => {

    switch (action.type) {
        case "SET_NAME":
            return {
                ...banquet,
                name:action.name
            }
        case "SAVE_APPROPRIATE_DATA":
            return {
                ...banquet,
                notDisabledDate: action.date,
                notDisabledSpaces: [...action.dontDisable]
            }
        case "CLEAR_APPROPRIATE_DATA":
            return {
                ...banquet,
                notDisabledDate: "",
                notDisabledSpaces: []
            }
        case "SELECT_UNSELECT_SPACE_BY_ID":
            return {
                ...banquet,
                basicSpaces: banquet.basicSpaces?[...banquet.basicSpaces.map((spaceI) => {
                    if(spaceI.id === action.spaceId) {
                        spaceI.selected = !spaceI.selected
                    }
                    return spaceI
                })]:[]
            }
        case "SET_DISABLED_SPACES":
            return {
                ...banquet,
                basicSpaces:banquet.basicSpaces?.map((spaceI) => {
                    if(!((banquet.notDisabledSpaces?.some((dontI) => dontI.id === spaceI.id)) && (
                        banquet.beginning.includes(banquet.notDisabledDate))
                    )) {

                        if (action.disablingArr.some((actionSpaceI) => {

                            return (actionSpaceI.id === spaceI.id) && (actionSpaceI.intervals ?
                                (actionSpaceI.intervals.length > 0) : false);})) {
                            spaceI.disabled = true
                        }
                    }
                    return spaceI
                })
            }
        case "CLEAR_ALL_INFO_ABOUT_SPACES":
            return {
                ...banquet,
                basicSpaces: banquet.basicSpaces?[...banquet.basicSpaces.map((spaceI) => {
                    spaceI.disabled=false
                    spaceI.selected=false
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
        case "SET_ARRAY_OF_SPACES_SELECTED":
            if(banquet.basicSpaces?.length === 0) {
                alert("mistake, no basic spaces before setting...")
            }
            return {
                ...banquet,
                basicSpaces: banquet.basicSpaces?[...banquet.basicSpaces.map((spaceI) => {
                    action.spaces.forEach((actionI) => {
                        if(spaceI.id === actionI.id)
                            spaceI.selected = true
                    })
                    return spaceI
                })]:[]
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

