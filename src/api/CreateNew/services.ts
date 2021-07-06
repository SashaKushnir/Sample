import {ApiServicesResultType, myGetInstance} from "../api";


export const services = {
    getAllServices: (api_token: string) => {
        return myGetInstance.get<ApiServicesResultType>('/services', {
            headers: {
                'api-token': api_token
            }
        })
    }
}
