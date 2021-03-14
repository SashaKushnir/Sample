import { ActionsTypes } from "../store";
import { newBanknoteActions } from "./newBanknoteActions";
import * as initialMenu from '../../responses/get_menu2.json'

const initialState: NewBanknote = initialMenu
export type Products = {
    id: number
    name: string
    description: string
    price: number
    weight: number
    menu_id: number
    category_id: number
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


export const newBanknoteReducer = (newBanknote: NewBanknote = initialState, action: ActionsTypes<typeof newBanknoteActions>): NewBanknote => {

    switch (action.type) {

        default:
            return newBanknote
    }
}

// Thunk