import {ActionsTypes} from "../store";
import {servicesActions} from "./servicesActions";
import {MenuCategory} from "../newBanknote/newBanknoteReducer";
import {CommentItem} from "../history/newHistoryReducer";

const initialState: Services = {}


export interface Period {
    id: number
    beg_datetime: datetime
    end_datetime: datetime
    beg_datetime_id: number
    end_datetime_id: number
    is_templatable: boolean
    weekdays: string
}

export interface datetime {
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
    once_paid_price: number
    hourly_paid_price: number | null
    category_id: number | null
    period_id: number | null
    period: Period | null
    category: MenuCategory
    created_at: string
    updated_at: string
    duration?: number | string
    ready?: boolean
    comments: Array<CommentItem>
    type: string
}

export type ServicesArray = Array<ServiceCategoriesItem>

interface Services {
    services?: ServicesArray
}

export const servicesReducer = (services = initialState, action: ActionsTypes<typeof servicesActions>): Services => {

    switch (action.type) {
        case "ADD_ENTERTAINMENT":
            return {
                ...services,
                services: services.services ? [...services.services.map((serviceI) => {
                    if (serviceI.id === action.entertainmentI.id) {
                        serviceI.showAmount = true
                        if (action.value) {
                            serviceI.amount = action.value
                            serviceI.comments = action.entertainmentI.comments?[...action.entertainmentI.comments]:[]
                        } else {
                            serviceI.amount = ""
                        }
                        //serviceI.ready = (serviceI.amount > 0) && (serviceI.duration?serviceI.duration > 0 : false)
                        serviceI.ready = (serviceI.amount > 0)

                    }
                    return serviceI
                })] : undefined
            }
        case "SAVE_COMMENT_TO_SERVICES":
            if (action.commentI.text)
                return {
                    ...services,
                    services: services.services ? [...services.services.map((ticketI) => {
                        if ((ticketI.id === action.commentI.target_id)) {
                            ticketI.comments.map((commentI, index, array) => {
                                    if (index === action.index) {
                                        commentI.text = action.commentI.text
                                    }
                                    return commentI
                                }
                            )
                        }
                        return ticketI
                    })] : []
                }
            else {
                return {
                    ...services,
                    services: services.services ? [...services.services.map((servicesI) => {
                        if(servicesI.id === action.parentId)
                        servicesI.comments = servicesI.comments?.filter((commentI, index) => {
                            return index !== action.index
                        })
                        return servicesI
                    })
                    ] : []
                }
            }
        case "ADD_COMMENT_TO_SERVICES":
            return {
                ...services,
                services: services.services ? [...services.services.map((serviceI) => {
                        if (serviceI.id === action.commentI.target_id) {
                            serviceI.comments = serviceI.comments?[...serviceI.comments,{...action.commentI}]
                                :[{...action.commentI}]
                        }
                        return serviceI
                    })
                ] : []
            }
        case "SET_ENTERTAINMENT_INFO":
            return {
                ...services,
                services: [...action.entertainmentI]
            }
        case "TOTALLY_DELETE_ENTERTAINMENT_ITEM":
            return {
                ...services,
                services: services.services ? [...services.services.map((serviceI) => {
                    if (serviceI.id === action.entertainmentI.id) {
                        delete serviceI.amount
                        delete serviceI.duration
                        serviceI.comments = []
                        serviceI.showAmount = false
                    }
                    return serviceI
                })] : undefined
            }
        case "TOTALLY_DELETE_ALL_ENTERTAINMENT_ITEMS":
            return {
                ...services,
                services: services.services ? [...services.services.map((serviceI) => {
                    delete serviceI.amount
                    serviceI.comments = []
                    delete serviceI.duration
                    serviceI.showAmount = false
                    return serviceI
                })] : undefined
            }
        case "SET_DURATION":
            return {
                ...services,
                services: services.services ? services.services.map((obj) => {
                    if (obj.id === action.id) {
                        obj.duration = action.duration
                    }
                    return obj
                }) : undefined
            }
        default:
            return services
    }
}
// Thunk
