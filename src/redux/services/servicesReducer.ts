
import { ActionsTypes } from "../store";
import { servicesActions } from "./servicesActions";
import services from '../../responses/get_services_list.json'
import { PeriodItem } from "../tickets/ticketsReducer";
import {MenuCategory} from "../newBanknote/newBanknoteReducer";

const initialState: Services = {
    "services": [
        {
            "id": 1,
            "name": "Clown show",
            "description": "A fun clown that will bring a lot of joy to your children",
            "once_paid_price": 20000,
            "hourly_paid_price": 20000,
            "category_id": 1,
            "period_id": 5,
            "period": {
                "id": 5,
                "beg_datetime": {
                    "id": 9,
                    "day": null,
                    "month": 1,
                    "year": null,
                    "hours": null,
                    "minutes": null,
                    "is_templatable": true
                },
                "end_datetime": {
                    "id": 10,
                    "day": null,
                    "month": 12,
                    "year": null,
                    "hours": null,
                    "minutes": null,
                    "is_templatable": true
                },
                "beg_datetime_id": 9,
                "end_datetime_id": 10,
                "is_templatable": true,
                "weekdays": "1,2,3,4,5,6"
            },
            "category": {
                "id": 1,
                "name": "Entertainment",
                "description": null
            },
            "created_at": "2021-03-16 10:55:37",
            "updated_at": "2021-03-16 10:55:37"
        },
        {
            "id": 2,
            "name": "Barman show",
            "description": null,
            "once_paid_price": 50000,
            "hourly_paid_price": 40000,
            "category_id": 1,
            "period_id": 6,
            "period": {
                "id": 6,
                "beg_datetime": {
                    "id": 11,
                    "day": null,
                    "month": 1,
                    "year": null,
                    "hours": 18,
                    "minutes": null,
                    "is_templatable": true
                },
                "end_datetime": {
                    "id": 12,
                    "day": null,
                    "month": 12,
                    "year": null,
                    "hours": 3,
                    "minutes": null,
                    "is_templatable": true
                },
                "beg_datetime_id": 11,
                "end_datetime_id": 12,
                "is_templatable": true,
                "weekdays": "2,3,4,5,6"
            },
            "category": {
                "id": 1,
                "name": "Entertainment",
                "description": null
            },
            "created_at": "2021-03-16 10:55:37",
            "updated_at": "2021-03-16 10:55:37"
        },
        {
            "id": 3,
            "name": "Carved fruits arrangement",
            "description": "Carved apples, bananas, mangoes and melons",
            "once_paid_price": 50000,
            "hourly_paid_price": 40000,
            "category_id": 2,
            "period_id": null,
            "period": null,
            "category": {
                "id": 2,
                "name": "Catering",
                "description": null
            },
            "created_at": "2021-03-16 10:55:37",
            "updated_at": "2021-03-16 10:55:37"
        },
        {
            "id": 4,
            "name": "Champagne glasses pyramid",
            "description": null,
            "once_paid_price": 100000,
            "hourly_paid_price": null,
            "category_id": 2,
            "period_id": null,
            "period": null,
            "category": {
                "id": 2,
                "name": "Catering",
                "description": null
            },
            "created_at": "2021-03-16 10:55:37",
            "updated_at": "2021-03-16 10:55:37"
        }
    ],

"response_status": true,
    "response_error": "error"
}

// export interface ServiceItem {
//     id: number
//     name: string
//     description: string | null
//     once_paid_price: number
//     hourly_paid_price: number
//     service_category_id: number
//     period: PeriodItem | null
// }

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

// export interface End_datetime{
//     id: number
//     day: string | null
//     month: number | null
//     year: number | null
//     hours: number | null
//     minutes: number | null
//     is_templatable: boolean
// }

export interface ServiceCategoriesItem {
    id: number
    name: string
    description: string | null
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

export const servicesReducer = (tickets = initialState, action: ActionsTypes<typeof servicesActions>):Services => {

    switch (action.type) {

        default:
            return tickets
    }
}
// Thunk