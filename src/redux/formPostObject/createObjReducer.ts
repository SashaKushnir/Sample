import { ActionsTypes, RootState } from "../store";
import { createObjActions } from "./createObjActions";
import { ProductCategoriesItem } from "../newBanknote/newBanknoteReducer";
import { ServiceCategoriesItem } from "../services/servicesReducer";
import { Dispatch } from "redux";
import { newBanknoteActions } from "../newBanknote/newBanknoteActions";

export interface PostObject {
    menus: Array<ProductCategoriesItem> | null,
    tickets: Array<ProductCategoriesItem> | null,
    services: Array<ServiceCategoriesItem> | null,
    isFetching: boolean
}

const initialState: PostObject = {
    menus: null,
    services: null,
    tickets: null,
    isFetching: false
}


export const createObjReducer = (postObj = initialState, action: ActionsTypes<typeof createObjActions>) => {

    switch (action.type) {
        case "FETCHING_TOGGLE":
            return {
                ...postObj,
                isFetching: action.status
            }
        default:
            return postObj
    }
}