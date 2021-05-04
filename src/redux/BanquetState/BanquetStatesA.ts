import {BanquetStateArray} from "./BanquetStatesR";

export const BanquetStateActions = {
    setStates: (states: BanquetStateArray) => ({type:"SET_STATES", states}) as const
}
