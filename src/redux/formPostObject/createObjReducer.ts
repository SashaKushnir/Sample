import {ActionsTypes} from "../store";
import {createObjActions} from "./createObjActions";
import {ProductCategoriesItem} from "../newBanknote/newBanknoteReducer";
import {ServiceCategoriesItem} from "../services/servicesReducer";

export interface PostObject {
    menus: Array<ProductCategoriesItem> | null,
    tickets: Array<ProductCategoriesItem> | null,
    services: Array<ServiceCategoriesItem> | null,
}

const initialState: PostObject = {
    menus: null,
    services: null,
    tickets: null
}


export const createObjReducer = (postObj = initialState, action: ActionsTypes<typeof createObjActions>) => {

    switch (action.type) {
        default:
            return postObj
    }
}
