import {ActionsTypes} from "../store";
import {banquetActions} from "./banquetInfoActions";

let initialState: BanquetInitial = {
    name: "None",
    decription: "None",
    beginnig: "01.01.2000",
    end: "01.01.2000",
}


export type BanquetInitial = {
    name: string
    decription: string | null
    beginnig: string
    end: string
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
                beginnig: action.time
            }
        case "SET_END":
            return{
                ...banquet,
                end: action.time
            }
        case "SET_DESCRIPTION":
            return{
                ...banquet,
                decription: action.description
            }
        default:
            return banquet
    }
}

