import axios from "axios";
import { MenuArray, ProductCategoriesItem } from "../redux/newBanknote/newBanknoteReducer";
import {UserInter, UserType} from "./login/login";
import { ServiceCategoriesItem } from "../redux/services/servicesReducer";
import { History } from "../redux/history/newHistoryReducer";
import {CustomersArray} from "../redux/customers/customersReducer";
import {TicketItem} from "../redux/tickets/ticketsReducer";
import {SpaceItem} from "../redux/banquetInfo/banquetInfoReducer";

export const BaseURL = "http://194.213.104.146:222"
//http://imperia-api.com

export const myGetInstance = axios.create({
    baseURL: BaseURL
})
export const myPostInstance = axios.create({
    baseURL: BaseURL
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

export interface ApiCustomersResultType extends ApiResultType {
    customers: CustomersArray
}

export interface ApiServicesResultType extends ApiResultType {
    services: Array<ServiceCategoriesItem>
}

export interface ApiTicketsResultType extends ApiResultType {
    tickets: Array<TicketItem>
}

export interface ApiHistoryResultType extends ApiResultType {
    banquets: Array<History>
}

export interface ApiGetUsersResultType extends ApiResultType {
    users: Array<UserInter>
}

export interface ApiPatchUserResponseType extends ApiResultType {
    data: UserInter
}

export interface ApiGetBasicSpacesResponseType extends ApiResultType {
    spaces: Array<SpaceItem>
}
