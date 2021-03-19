import { ActionsTypes } from "../store";
import { newBanknoteActions } from "./newBanknoteActions";
import initialMenu from '../../responses/get_menu2.json'
import { Dispatch } from "redux";
import { PeriodItem } from "../tickets/ticketsReducer";


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
                menus: [...newBanknote.menus.map((menuI) => {
                    const curM = menuI.products.map((productI) => {
                        if (productI.id === action.productI.id) {
                            if(action.value){
                                productI.amount = action.value
                            }else {
                                productI.amount =/* (productI.amount ? productI.amount : 0) + */1
                            }
                        }
                        return productI
                    })
                    menuI.products = curM
                    return menuI
                })]
            }
        case "TOTALLY_DELETE_MENU_ITEM":
            return {
                ...newBanknote,
                menus: [...newBanknote.menus.map((menuI)=>{
                    menuI.products.map((productI)=> {
                        if(productI.id === action.productI.id){
                            delete productI.amount
                        }
                        return productI
                    })
                    return menuI
                })]
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
        } else {
            console.warn(response.response_error)
        }
    } catch (error) {
        alert("Something went wrong")
        console.warn(error)
    }
    // Catch don't forget
}

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
    weight?: number
    menu_id?: number
    category_id: number
    amount?: number
    period_id?: number | null
    period?: PeriodItem | null
    category: MenuCategory
    created_at: string
    updated_at: string
}
export type Product_categories = Array<ProductCategoriesItem>
export type MenuItem = {
    id: number
    products: Product_categories
    name: string
    description: string | null
    category_id: number | null
    category: MenuCategory
    created_at: string
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