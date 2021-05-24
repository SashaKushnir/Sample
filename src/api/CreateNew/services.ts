import {ApiServicesResultType, myGetInstance} from "../api";


export const services = {
    getAllServices: () => {
        return myGetInstance.get<ApiServicesResultType>('/services')
    }
}
