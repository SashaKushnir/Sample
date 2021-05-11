import {ApiBanquetStatesResponseType, myGetInstance} from "../api";

export const BanquetStates = {
    getBanquetStates: () => {
        return myGetInstance.get<ApiBanquetStatesResponseType>('/banquet-states')
    }
}
