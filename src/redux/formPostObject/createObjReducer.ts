import { ActionsTypes, RootState } from "../store";
import { createObjActions } from "./createObjActions";
import { MenuArray, ProductCategoriesItem } from "../newBanknote/newBanknoteReducer";
import { ServiceCategoriesItem } from "../services/servicesReducer";
import { Dispatch } from "redux";
import { newBanknoteActions } from "../newBanknote/newBanknoteActions";

interface PostObject {
    menus: Array<ProductCategoriesItem> | null,
    tickets: Array<ProductCategoriesItem> | null,
    services: Array<ServiceCategoriesItem> | null
}

const initialState: PostObject = {
    menus: null,
    services: null,
    tickets: null
}


export const createObjReducer = (postObj = initialState, action: ActionsTypes<typeof createObjActions>) => {

    switch (action.type) {
        case "CREATE_POST_OBJECT":
            return {
                ...postObj
            }
        default:
            return postObj
    }
}

// Thunk
export const createPost = () => (dispatch: Dispatch<ActionsTypes<typeof newBanknoteActions>>, getState: ()=>RootState) => {
    let mainpost: PostObject = {
        menus: getState().createNew.menus.reduce((acum:Array<ProductCategoriesItem>,menuI,index)=>
            acum.concat(menuI.products.filter((productI)=> productI.showAmount).map((obj)=>{
                delete obj.showAmount
                delete obj.amount
                return obj
            })),[]),
        tickets: getState().tickets.tickets.filter((ticketI)=>ticketI.showAmount).map((obj)=>{
            delete obj.amount
            delete obj.showAmount
            return obj
        }),
        services: getState().services.services.filter((serviceI)=> serviceI.showAmount).map((obj)=>{
            delete obj.amount
            delete obj.showAmount
            return obj
        })
    }
console.log(mainpost)
debugger

}

