import { ActionsTypes } from "../store";
import { newBanknoteActions } from "./newBanknoteActions";
import initialMenu from '../../responses/get_menu2.json'
import { Dispatch } from "redux";


const initialState: MenusInitial = initialMenu


export const newBanknoteReducer = (newBanknote: MenusInitial = initialState, action: ActionsTypes<typeof newBanknoteActions>): MenusInitial => {

    switch (action.type) {
        case "SET_MENU_INFO":
            return {
                ...newBanknote,
                menus: [...action.menus]
            }
        case "ADD_MENU_ITEM":
            // const flag = newBanknote.menus.map((obj) => obj.product_categories.map((inobj) => {
            //     inobj.products.some((doubleinObj) => doubleinObj.id === action.product.id)
            // }))
            // const prepareMenu = [...newBanknote.menus.map((obj) => {
            //     const categor = obj.product_categories.map((inobj) => {
            //         const inl = inobj.products.map((doubleinObj) => {
            //             if (doubleinObj.id === action.product.id) {
            //                 if (flag)
            //                     doubleinObj.amount = (doubleinObj.amount ? doubleinObj.amount : 0) + 1
            //                 else {
            //                     doubleinObj.amount = 1
            //                 }
            //                 return doubleinObj
            //             } else {
            //                 return doubleinObj
            //             }
            //         })
            //         inobj.products = inl
            //         return inobj
            //     })
            //     obj.product_categories = categor
            //     return obj
            // })]
            // return {
            //     ...newBanknote,
            //     menus: prepareMenu
            //     // {
                //     ...newBanknote.selectedOrders,
                //     selectedMenu: flag ? [...newBanknote.selectedOrders.selectedMenu.map((obj) => {
                //             if (obj.id === action.product.id)
                //                 return action.product
                //             return obj
                //         })]
                //         : [...newBanknote.selectedOrders.selectedMenu,
                //             action.product
                //         ]
                // }
           // }
        default:
            return newBanknote
    }
}

// Thunk
export const setMenuT = () => async (dispatch: Dispatch<ActionsTypes<typeof newBanknoteActions>>) => {
    // To Fetch firstly
    try {
        // Get request: API await with try
        const response = initialMenu
        // Set response to Bll
        if (response.response_status) {
            dispatch(newBanknoteActions.setMenuInfo(response.menus))
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


// export type Product = {
//     id: number
//     name: string
//     description: string | null
//     price: number
//     weight: number
//     menu_id: number
//     category_id: number
//     amount?: number
// }
export type MenuCategory = {
    id: number
    name: string
    description: string | null
}
export type ProductCategoriesItem = {
    id: number
    name: string
    description: string | null
    price: number
    weight: number
    updated_at: string
    menu_id: number
    category_id: number
    amount?: number
    category: MenuCategory
    created_at: string
}
export type Product_categories = Array<ProductCategoriesItem>
export type MenuItem = {
    id: number
    products: Product_categories
    name: string
    description: string | null
    category_id: number | null
    category: MenuCategory
    created_at: string,
    updated_at: string
    period_id: string | null
}
export type MenuArray = Array<MenuItem>

type MenusInitial = {
    menus: MenuArray
    response_status: boolean
    response_error: string | null
}


//
// type InitialMenu = NewBanknote & {
//     cart: [
//         tickets:
//         services:
//         menus: Product_categories
//     ]
// }
// type SelectedOrders = {
//     selectedMenu: Array<Product>
//     selectedTickets: Array<TicketCategoriesItem>
//     selectedServices: Array<ServiceCategoriesItem>
// }