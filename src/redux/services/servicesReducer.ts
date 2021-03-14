import { ActionsTypes } from "../store";
import { servicesActions } from "./servicesActions";
import * as services from '../../responses/get_services_list.json'
import { PeriodItem } from "../tickets/ticketsReducer";

const initialState: Services = services

export interface ServiceItem {
    id: number
    name: string
    description: string | null
    once_paid_price: number
    hourly_paid_price: number
    service_category_id: number
    period: PeriodItem | null
}

export interface ServiceCategoriesItem {
    id: number
    name: string
    description: string | null
    services: Array<ServiceItem>
}

interface Services {
    service_categories: Array<ServiceCategoriesItem>
    response_status: boolean
    "response_error": string | null
}

export const servicesReducer = (tickets = initialState, action: ActionsTypes<typeof servicesActions>):Services => {

    switch (action.type) {

        default:
            return tickets
    }
}

// Thunk