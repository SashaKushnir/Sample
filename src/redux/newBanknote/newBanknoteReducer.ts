import { ActionsTypes } from "../store";
import { newBanknoteActions } from "./newBanknoteActions";
import initialMenu from '../../responses/get_menu2.json'
import { PeriodItem } from "../tickets/ticketsReducer";


const initialState:  MenusInitial = {}


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
                menus: newBanknote.menus?
                    [...newBanknote.menus.map((menuI) => {
                    const curM = menuI.products.map((productI) => {
                        if (productI.id === action.productI.id) {
                            productI.showAmount=true
                            productI.amount = action.value === null ? 0
                                : action.value
                        }
                        return productI
                    })
                    menuI.products = curM
                    return menuI
                })]: undefined
            }
        case "TOTALLY_DELETE_MENU_ITEM":
            return {
                ...newBanknote,
                menus: newBanknote.menus?
                    [...newBanknote.menus.map((menuI) => {
                        menuI.products.map((productI) => {
                            if (productI.id === action.productI.id) {
                                productI.showAmount=false
                                delete productI.amount
                            }
                            return productI
                        })
                        return menuI
                    })]:undefined
            }
        case "TOTALLY_DELETE_ALL_MENU_ITEMS":
            return {
                ...newBanknote,
                menus: newBanknote.menus?
                    [...newBanknote.menus.map((menuI) => {
                        menuI.products.map((productI) => {
                                productI.showAmount=false
                                delete productI.amount
                            return productI
                        })
                        return menuI
                    })]:undefined

            }
        default:
            return newBanknote
    }
}

// Thunk
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
    amount?: number | string
    showAmount?: boolean
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
    menus?: MenuArray
}