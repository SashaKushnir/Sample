import {ActionsTypes} from "../store";
import {BanquetStateActions} from "./BanquetStatesA";
import {ProductCategoriesItem} from "../newBanknote/newBanknoteReducer";


export interface BanquetState {
    id: number
    name: string
    description: string | null
    type: string
}
export type BanquetStateArray = Array<BanquetState>

export interface States{
    states?: BanquetStateArray
}

const initialBanquetState = {}


export const BanquetStates = (state: States = initialBanquetState, action: ActionsTypes<typeof BanquetStateActions>): States => {
    switch (action.type) {
        case "SET_STATES":
            return{
                ...state,
                states: action.states
            }
        default:
            return {
                ...state
            }
    }
}
