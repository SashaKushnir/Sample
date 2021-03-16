import { ActionsTypes } from "../store";
import { newBanknoteActions } from "./newBanknoteActions";
import initialMenu from '../../responses/get_menu2.json'
import { Dispatch } from "redux";
import { TicketCategoriesItem } from "../tickets/ticketsReducer";
import { ServiceCategoriesItem } from "../services/servicesReducer";

const selectedOrders: SelectedOrders = {
    selectedMenu: [],
    selectedTickets: [],
    selectedServices: []

}
const initialState: MenusInitial = {
    "menus": [
        {
            "id": 1,
            "name": "Main",
            "description": null,
            "category_id": 1,
            "category": {
                "id": 1,
                "name": "Bar",
                "description": null
            },
            "products": [
                {
                    "id": 1,
                    "name": "Mojito",
                    "description": "Iced Sprite with mint, lime and lemon.",
                    "price": 12000,
                    "weight": 25000,
                    "menu_id": 1,
                    "category_id": 2,
                    "category": {
                        "id": 2,
                        "name": "Cold drinks",
                        "description": null
                    },
                    "created_at": "2021-03-16 10:55:37",
                    "updated_at": "2021-03-16 10:55:37"
                },
                {
                    "id": 2,
                    "name": "Simpleton Cocktail",
                    "description": "A sparkling combination of juice and vodka.",
                    "price": 10000,
                    "weight": 20000,
                    "menu_id": 1,
                    "category_id": 2,
                    "category": {
                        "id": 2,
                        "name": "Cold drinks",
                        "description": null
                    },
                    "created_at": "2021-03-16 10:55:37",
                    "updated_at": "2021-03-16 10:55:37"
                },
                {
                    "id": 3,
                    "name": "Martini",
                    "description": null,
                    "price": 12000,
                    "weight": 15000,
                    "menu_id": 1,
                    "category_id": 2,
                    "category": {
                        "id": 2,
                        "name": "Cold drinks",
                        "description": null
                    },
                    "created_at": "2021-03-16 10:55:37",
                    "updated_at": "2021-03-16 10:55:37"
                },
                {
                    "id": 4,
                    "name": "Pear Mimosa",
                    "description": "Champagne and pear nectar combine in a delicate drink.",
                    "price": 18000,
                    "weight": 15000,
                    "menu_id": 1,
                    "category_id": 2,
                    "category": {
                        "id": 2,
                        "name": "Cold drinks",
                        "description": null
                    },
                    "created_at": "2021-03-16 10:55:37",
                    "updated_at": "2021-03-16 10:55:37"
                },
                {
                    "id": 8,
                    "name": "Creamy Caramel Latt\u00e9",
                    "description": "Late with a touch of caramel.",
                    "price": 8500,
                    "weight": 18000,
                    "menu_id": 1,
                    "category_id": 1,
                    "category": {
                        "id": 1,
                        "name": "Hot drinks",
                        "description": null
                    },
                    "created_at": "2021-03-16 10:55:37",
                    "updated_at": "2021-03-16 10:55:37"
                },
                {
                    "id": 9,
                    "name": "Spiced Hot Cocoa",
                    "description": "Hot cocoa with a whipped cream and cinnamon",
                    "price": 6300,
                    "weight": 25000,
                    "menu_id": 1,
                    "category_id": 1,
                    "category": {
                        "id": 1,
                        "name": "Hot drinks",
                        "description": null
                    },
                    "created_at": "2021-03-16 10:55:37",
                    "updated_at": "2021-03-16 10:55:37"
                },
                {
                    "id": 10,
                    "name": "Warm Hazelnut Toddy",
                    "description": null,
                    "price": 11200,
                    "weight": 25000,
                    "menu_id": 1,
                    "category_id": 1,
                    "category": {
                        "id": 1,
                        "name": "Hot drinks",
                        "description": null
                    },
                    "created_at": "2021-03-16 10:55:37",
                    "updated_at": "2021-03-16 10:55:37"
                }
            ],
            "created_at": "2021-03-16 10:55:37",
            "updated_at": "2021-03-16 10:55:37",
            "period_id": null
        },
        {
            "id": 2,
            "name": "Summer",
            "description": null,
            "category_id": 1,
            "category": {
                "id": 1,
                "name": "Bar",
                "description": null
            },
            "products": [
                {
                    "id": 5,
                    "name": "Iced Tea With Plums and Thyme",
                    "description": "Served nonalcoholic fruit-and-herb blend sipper.",
                    "price": 12000,
                    "weight": 25000,
                    "menu_id": 2,
                    "category_id": 2,
                    "category": {
                        "id": 2,
                        "name": "Cold drinks",
                        "description": null
                    },
                    "created_at": "2021-03-16 10:55:37",
                    "updated_at": "2021-03-16 10:55:37"
                },
                {
                    "id": 6,
                    "name": "Iced Green Tea With Ginger and Mint",
                    "description": "Green tea is spiced with ginger and mint.",
                    "price": 10000,
                    "weight": 20000,
                    "menu_id": 2,
                    "category_id": 2,
                    "category": {
                        "id": 2,
                        "name": "Cold drinks",
                        "description": null
                    },
                    "created_at": "2021-03-16 10:55:37",
                    "updated_at": "2021-03-16 10:55:37"
                },
                {
                    "id": 7,
                    "name": "Fresh-Strawberry-Shake",
                    "description": "Fresh strawberries are at the heart of these thick and totally decadent frappes.",
                    "price": 10000,
                    "weight": 20000,
                    "menu_id": 2,
                    "category_id": 2,
                    "category": {
                        "id": 2,
                        "name": "Cold drinks",
                        "description": null
                    },
                    "created_at": "2021-03-16 10:55:37",
                    "updated_at": "2021-03-16 10:55:37"
                }
            ],
            "created_at": "2021-03-16 10:55:37",
            "updated_at": "2021-03-16 10:55:37",
            "period_id": "7"
        },
        {
            "id": 3,
            "name": "Main",
            "description": null,
            "category_id": 2,
            "category": {
                "id": 2,
                "name": "Kitchen",
                "description": null
            },
            "products": [
                {
                    "id": 11,
                    "name": "Margarita",
                    "description": "The simplest pizza ever. Cheese, basil and few slices of tomato.",
                    "price": 9000,
                    "weight": 40000,
                    "menu_id": 3,
                    "category_id": 4,
                    "category": {
                        "id": 4,
                        "name": "Pizza",
                        "description": null
                    },
                    "created_at": "2021-03-16 10:55:37",
                    "updated_at": "2021-03-16 10:55:37"
                },
                {
                    "id": 12,
                    "name": "Romana",
                    "description": "Cheese, beacon, arugula and parmesan.",
                    "price": 1300,
                    "weight": 45000,
                    "menu_id": 3,
                    "category_id": 4,
                    "category": {
                        "id": 4,
                        "name": "Pizza",
                        "description": null
                    },
                    "created_at": "2021-03-16 10:55:37",
                    "updated_at": "2021-03-16 10:55:37"
                },
                {
                    "id": 13,
                    "name": "Ortolana",
                    "description": "Mushrooms, zucchini, eggplant, parmesan and sliced parsley.",
                    "price": 13000,
                    "weight": 40000,
                    "menu_id": 3,
                    "category_id": 4,
                    "category": {
                        "id": 4,
                        "name": "Pizza",
                        "description": null
                    },
                    "created_at": "2021-03-16 10:55:37",
                    "updated_at": "2021-03-16 10:55:37"
                },
                {
                    "id": 14,
                    "name": "Quatro stagioni",
                    "description": "As the italian name quotes this is a pizza of four seasons.",
                    "price": 15000,
                    "weight": 45000,
                    "menu_id": 3,
                    "category_id": 4,
                    "category": {
                        "id": 4,
                        "name": "Pizza",
                        "description": null
                    },
                    "created_at": "2021-03-16 10:55:37",
                    "updated_at": "2021-03-16 10:55:37"
                },
                {
                    "id": 15,
                    "name": "Quatro formagi",
                    "description": "As the italian name quotes this is a pizza of four cheeses.",
                    "price": 180,
                    "weight": 40000,
                    "menu_id": 3,
                    "category_id": 4,
                    "category": {
                        "id": 4,
                        "name": "Pizza",
                        "description": null
                    },
                    "created_at": "2021-03-16 10:55:37",
                    "updated_at": "2021-03-16 10:55:37"
                },
                {
                    "id": 16,
                    "name": "Tomato soup",
                    "description": null,
                    "price": 8300,
                    "weight": 40000,
                    "menu_id": 3,
                    "category_id": 3,
                    "category": {
                        "id": 3,
                        "name": "Soups",
                        "description": null
                    },
                    "created_at": "2021-03-16 10:55:37",
                    "updated_at": "2021-03-16 10:55:37"
                },
                {
                    "id": 17,
                    "name": "Parsnip soup with toasted hazelnuts",
                    "description": null,
                    "price": 12000,
                    "weight": 30000,
                    "menu_id": 3,
                    "category_id": 3,
                    "category": {
                        "id": 3,
                        "name": "Soups",
                        "description": null
                    },
                    "created_at": "2021-03-16 10:55:37",
                    "updated_at": "2021-03-16 10:55:37"
                },
                {
                    "id": 18,
                    "name": "Celery soup",
                    "description": null,
                    "price": 14000,
                    "weight": 25000,
                    "menu_id": 3,
                    "category_id": 3,
                    "category": {
                        "id": 3,
                        "name": "Soups",
                        "description": null
                    },
                    "created_at": "2021-03-16 10:55:37",
                    "updated_at": "2021-03-16 10:55:37"
                }
            ],
            "created_at": "2021-03-16 10:55:37",
            "updated_at": "2021-03-16 10:55:37",
            "period_id": null
        },
        {
            "id": 4,
            "name": "Summer",
            "description": null,
            "category_id": 2,
            "category": {
                "id": 2,
                "name": "Kitchen",
                "description": null
            },
            "products": [],
            "created_at": "2021-03-16 10:55:37",
            "updated_at": "2021-03-16 10:55:37",
            "period_id": "8"
        }
    ]
}


export const newBanknoteReducer = (newBanknote: MenusInitial = initialState, action: ActionsTypes<typeof newBanknoteActions>): MenusInitial => {

    switch (action.type) {
        case "SET_MENU_INFO":
            return {
                ...newBanknote,
                menus: [...action.menus]
            }
        case "ADD_MENU_ITEM":
            const flag = newBanknote.menus.map((obj) => obj.product_categories.map((inobj) => {
                inobj.products.some((doubleinObj) => doubleinObj.id === action.product.id)
            }))
            const prepareMenu = [...newBanknote.menus.map((obj) => {
                const categor = obj.product_categories.map((inobj) => {
                    const inl = inobj.products.map((doubleinObj) => {
                        if (doubleinObj.id === action.product.id) {
                            if (flag)
                                doubleinObj.amount = (doubleinObj.amount ? doubleinObj.amount : 0) + 1
                            else {
                                doubleinObj.amount = 1
                            }
                            return doubleinObj
                        } else {
                            return doubleinObj
                        }
                    })
                    inobj.products= inl
                    return inobj
                })
                obj.product_categories = categor
                return obj
            })]
            return {
                ...newBanknote,
                menus: prepareMenu
                // {
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


export type Product = {
    id: number
    name: string
    description: string | null
    price: number
    weight: number
    menu_id: number
    category_id: number
    amount?: number
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
    products: Array<Product>
}
export type Product_categories = Array<ProductCategoriesItem>
export type MenuItem = {
    id: number
   // menu_category: MenuCategory
    products: Product_categories
    name: string
    description: string | null
    category_id: number | null
    category: MenuCategory
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