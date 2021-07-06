import {ApiTicketsResultType, myGetInstance} from "../api";

export const tickets = {
    getAllTickets: (api_token: string) => {
        return myGetInstance.get<ApiTicketsResultType>('/tickets', {
            headers: {
                'api-token': api_token
            }
        })
    }
}
