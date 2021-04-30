import {ActionsTypes} from "../store";
import {newBanknoteActions} from "./newBanknoteActions";
import {CommentItem} from "../history/newHistoryReducer";


const initialState: MenusInitial = {}

export const setInitialComment = (productI: ProductCategoriesItem) => {
    return {
        text: "",
        target_id: productI.id,
        target_type: productI.type
    }
}

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
                menus: newBanknote.menus ?
                    [...newBanknote.menus.map((menuI) => {
                        const curM = menuI.products.map((productI) => {
                            if (productI.id === action.productI.id) {
                                productI.showAmount = true
                                productI.amount = action.value === null ? 0 : action.value
                                productI.amount > 0 ? productI.ready = true : productI.ready = false
                                productI.comments = action.productI.comments ? [...action.productI.comments] : []
                            }
                            return productI
                        })
                        menuI.products = curM
                        return menuI
                    })] : undefined
            }
        case "TOTALLY_DELETE_MENU_ITEM":
            return {
                ...newBanknote,
                menus: newBanknote.menus ?
                    [...newBanknote.menus.map((menuI) => {
                        menuI.products.map((productI) => {
                            if (productI.id === action.productI.id) {
                                productI.comments = []
                                productI.showAmount = false
                                delete productI.amount

                            }
                            return productI
                        })
                        return menuI
                    })] : undefined
            }
        case "ADD_COMMENT_TO_MENUS":
            return {
                ...newBanknote,
                menus: newBanknote.menus ? [...newBanknote.menus.map((categoryI) => {
                    categoryI.products.map((productI) => {
                        if (productI.id === action.commentI.target_id) {
                            productI.comments.push({...action.commentI})
                        }
                        return productI
                    })
                    return categoryI
                })
                ] : []
            }
        case "SAVE_COMMENT_TO_MENUS":
            if (action.commentI.text)
                return {
                    ...newBanknote,
                    menus: newBanknote.menus ? [...newBanknote.menus.map((categoryI) => {
                        categoryI.products.map((productI) => {
                            if ((productI.id === action.commentI.target_id)) {
                                productI.comments.map((commentI, index, array) => {
                                    if (index === action.index) {
                                        commentI.text = action.commentI.text
                                    }
                                    return commentI

                                })
                            }
                            return productI
                        })
                        return categoryI
                    })
                    ] : []
                }
        else{
            return {
                ...newBanknote,
                menus: newBanknote.menus?[...newBanknote.menus.map((categoryI) => {
                    categoryI.products.map((productI) => {
                            productI.comments = productI.comments.filter((commentI, index) =>{
                                return index !== action.index
                            })
                        return productI
                    })
                    return categoryI
                })
                ]: []
            }
        }
        case "TOTALLY_DELETE_ALL_MENU_ITEMS":
            return {
                ...newBanknote,
                menus: newBanknote.menus ?
                    [...newBanknote.menus.map((menuI) => {
                        menuI.products.map((productI) => {
                            productI.showAmount = false
                            delete productI.amount
                            return productI
                        })
                        return menuI
                    })] : undefined

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
    weight: number
    menu_id: number
    category_id: number
    amount?: number | string
    showAmount?: boolean
    category: MenuCategory
    created_at: string
    updated_at: string
    ready?: boolean
    type?: string
    comments: Array<CommentItem>
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
    type: string
}
export type MenuArray = Array<MenuItem>

type MenusInitial = {
    menus?: MenuArray
}
