import { ActionsTypes } from "../store";
import { ProductCategoriesItem } from "../newBanknote/newBanknoteReducer";
import { ServiceCategoriesItem } from "../services/servicesReducer";
import { commonActions } from "./forCommonActions";

export interface PostObject {
    menus: Array<ProductCategoriesItem> | null,
    tickets: Array<ProductCategoriesItem> | null,
    services: Array<ServiceCategoriesItem> | null,
    isFetching: boolean
}

const initialState = {
    isFetching: false
}


export const commonReducer = (common = initialState, action: ActionsTypes<typeof commonActions>) => {

    switch (action.type) {
        case "FETCHING_TOGGLE":
            return {
                ...common,
                isFetching: action.status
            }
        default:
            return common
    }
}