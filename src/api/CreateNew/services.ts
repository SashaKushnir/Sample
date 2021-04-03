import { ApiServicesResultType, myGetInstance } from "../api";
import { ServiceCategoriesItem } from "../../redux/services/servicesReducer";


export const services = {
    getAllServices: () => {
        return myGetInstance.get<ApiServicesResultType>('/services')
    }
}
