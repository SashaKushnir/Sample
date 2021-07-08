import axios from "axios";
import {MenuArray} from "../redux/newBanknote/newBanknoteReducer";
import {UserInter, UserType} from "./login/login";
import {ServiceCategoriesItem} from "../redux/services/servicesReducer";
import {History} from "../redux/history/newHistoryReducer";
import {CustomersArray, CustomerType, FamilyMemberGetter} from "../redux/customers/customersReducer";
import {TicketItem} from "../redux/tickets/ticketsReducer";
import {SpaceItem} from "../redux/banquetInfo/banquetInfoReducer";
import {BanquetStateArray} from "../redux/BanquetState/BanquetStatesR";

export const BaseURL = "https://imperia.pp.ua/api"
//http://imperia-api.com

export const myGetInstance = axios.create({
    baseURL: BaseURL
})
export const myPostInstance = axios.create({
    baseURL: BaseURL
})

export type ApiResultType = {
    errors?: any            //HashMap
    success: boolean
    message?: string
}

export interface ApiMenusResultType extends ApiResultType {
    data: MenuArray
}

export interface ApiLoginResultType extends ApiResultType {
    data: UserType
}

export interface ApiCustomersResultType extends ApiResultType {
    data: CustomersArray
}

export interface ApiServicesResultType extends ApiResultType {
    data: Array<ServiceCategoriesItem>
}

export interface ApiTicketsResultType extends ApiResultType {
    data: Array<TicketItem>
}

export interface ApiHistoryResultType extends ApiResultType {
    data: Array<History>
}

export interface ApiGetUsersResultType extends ApiResultType {
    data: Array<UserInter>
}

export interface ApiPatchUserResponseType extends ApiResultType {
    data: UserInter
}

export interface ApiGetBasicSpacesResponseType extends ApiResultType {
    data: Array<SpaceItem>
}

export interface ApiBanquetStatesResponseType extends ApiResultType {
    data: BanquetStateArray
}

export interface ApiPostCustomerResponseType extends ApiResultType {
    data: CustomerType
}

export interface ApiPostFamilyMemberResponseType extends ApiResultType {
    data: FamilyMemberGetter
}

