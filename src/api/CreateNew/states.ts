import {ApiBanquetStatesResponseType, myGetInstance} from "../api";

export const BanquetStates = {
    getBanquetStates: (api_token: string) => {
        return myGetInstance.get<ApiBanquetStatesResponseType>('/banquet-states', {
            headers: {
                'api-token': api_token
            }
        })
    }
}
