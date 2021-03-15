import { ActionsTypes } from "../store";
import { newBanknoteActions } from "./newBanknoteActions";
import initialMenu from '../../responses/get_menu2.json'
import { Dispatch } from "redux";

const initialState: NewBanknote  = initialMenu



export const newBanknoteReducer = (newBanknote: NewBanknote = initialState, action: ActionsTypes<typeof newBanknoteActions>): NewBanknote => {

    switch (action.type) {

        default:
            return newBanknote
    }
}

// Thunk
export const setMenuT = () => async (dispatch: Dispatch<ActionsTypes<typeof newBanknoteActions>>) => {
    // To Fetch firstly

    // Get request: API await with try
    const response = initialMenu
    // Set response to Bll
    dispatch(newBanknoteActions.addItem())
    // Stop Fetching
    // Catch don't forget
}




export type Products = {
    id: number
    name: string
    description: string
    price: number
    weight: number
    menu_id: number
    category_id: number
    amount?:number
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
    products: Array<Products>
}
export type Product_categories = Array<ProductCategoriesItem>
export type MenuItem = {
    id: number
    menu_category: MenuCategory
    product_categories: Product_categories
}
export type MenuArray = Array<MenuItem>
type NewBanknote = {
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