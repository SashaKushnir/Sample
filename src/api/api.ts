import axios from "axios";
import { MenuArray, ProductCategoriesItem } from "../redux/newBanknote/newBanknoteReducer";
import { UserType } from "./login/login";
import { ServiceCategoriesItem } from "../redux/services/servicesReducer";


export const BaseURL = "http://194.213.104.146:222"
//http://imperia-api.com

export const myGetInstance = axios.create({
    baseURL: BaseURL
})
export const myPostInstance = axios.create({
    baseURL: BaseURL,

})
export type ApiResultType = {
    response_error: string | null
    response_status: boolean
    response_status_code: number | null
    message?: string
}

export interface ApiMenusResultType extends ApiResultType {
    menus: MenuArray
}

export interface ApiLoginResultType extends ApiResultType {
    user: UserType
}

export interface ApiServicesResultType extends ApiResultType {
    services: Array<ServiceCategoriesItem>
}

export interface ApiTicketsResultType extends ApiResultType {
    tickets: Array<ProductCategoriesItem>
}
