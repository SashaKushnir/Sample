import { ActionsTypes } from "../store";
import { servicesActions } from "./servicesActions";
import services from '../../responses/get_services_list.json'
import { MenuCategory } from "../newBanknote/newBanknoteReducer";
import { Dispatch } from "redux";
import { newBanknoteActions } from "../newBanknote/newBanknoteActions";
import initialMenu from "../../responses/get_menu2.json";

const initialState: Services = services


export interface Period{
    id:number
    beg_datetime: datetime
    end_datetime: datetime
    beg_datetime_id: number
    end_datetime_id: number
    is_templatable: boolean
    weekdays: string
}

export interface datetime{
    id: number
    day: string | null
    month: number | null
    year: number | null
    hours: number | null
    minutes: number | null
    is_templatable: boolean
}



export interface ServiceCategoriesItem {
    id: number
    name: string
    description: string | null
    amount?: number | string
    showAmount?: boolean
    once_paid_price: number | null
    hourly_paid_price: number | null
    category_id: number | null
    period_id: number | null
    period: Period | null
    category: MenuCategory
    created_at: string
    updated_at: string
}

interface Services {
    services: Array<ServiceCategoriesItem>
    response_status: boolean
    response_error: string | null
}

export const servicesReducer = (services = initialState, action: ActionsTypes<typeof servicesActions>):Services => {

    switch (action.type) {
        case "ADD_ENTERTAINMENT":
            return {
                ...services,
                services: [...services.services.map((serviceI) => {
                    if(serviceI.id === action.entertainmentI.id){
                        serviceI.showAmount=true
                        if(action.value){
                            serviceI.amount = action.value

                        } else {
                            serviceI.amount=""
                        }
                    }
                    return serviceI
                })]
            }
        case "SET_ENTERTAINMENT_INFO":
            return {
                ...services,
                services: [...action.entertainmentI]
            }
        case "TOTALLY_DELETE_ENTERTAINMENT_ITEM":
            return {
                ...services,
                services: [...services.services.map((serviceI)=>{
                    if(serviceI.id === action.entertainmentI.id) {
                        delete serviceI.amount
                        serviceI.showAmount=false
                    }
                    return serviceI
                })]
            }
        default:
            return services
    }
}
// Thunk
export const setServicesT = () => async (dispatch: Dispatch<ActionsTypes<typeof servicesActions>>) => {
    // To Fetch firstly
    try {
        // Get request: API await with try
        const response = services
        // Set response to Bll
        if (response.response_status) {
            dispatch(servicesActions.setEntertainmentInfo(response.services))
            // Stop Fetching
        } else {
            console.warn(response.response_error)
        }
    } catch (error) {
        alert("Something went wrong")
        console.warn(error)
    }
    // Catch don't forget
}