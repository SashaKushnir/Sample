import { ActionsTypes } from "../store";
import { newBanknoteActions } from "./newBanknoteActions";
import initialMenu from '../../responses/get_menu2.json'
import { Dispatch } from "redux";
import { TicketCategoriesItem } from "../tickets/ticketsReducer";
import { ServiceCategoriesItem } from "../services/servicesReducer";


const initialState: MenusInitial = initialMenu


export const newBanknoteReducer = (newBanknote: MenusInitial = initialState, action: ActionsTypes<typeof newBanknoteActions>): MenusInitial => {

    switch (action.type) {
        case "SET_MENU_INFO":
            return {
                ...newBanknote,
                menus: [...action.menus]
            }
        case "ADD_MENU_ITEM":

            return {
                ...newBanknote,
                selectedOrders: {...newBanknote.selectedOrders,

                    selectedMenu: newBanknote.selectedOrders?.selectedMenu ?
                        [...newBanknote.selectedOrders?.selectedMenu,
                        action.product
                    ]:undefined
                }
            }
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
        }else {
            console.warn(response.response_error)
        }
    } catch (error) {
        alert("Something went wrong")
        console.warn(error)
    }
    // Catch don't forget
}


export type Product = {
    id: number
    name: string
    description: string
    price: number
    weight: number
    menu_id: number
    category_id: number
    amount?: number
}
export type MenuCategory = {
    id: number
    name: string
    description: string
}
export type ProductCategoriesItem = {
    id: number
    name: string
    description: string
    products: Array<Product>
}
export type Product_categories = Array<ProductCategoriesItem>
export type MenuItem = {
    id: number
    menu_category: MenuCategory
    product_categories: Product_categories
}
export type MenuArray = Array<MenuItem>
type SelectedOrders = {
    selectedMenu?: Array<Product>
    selectedTickets?: Array<TicketCategoriesItem>
    selectedServices?: Array<ServiceCategoriesItem>
}
type MenusInitial = {
    menus: MenuArray
    response_status: boolean
    selectedOrders?: SelectedOrders
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