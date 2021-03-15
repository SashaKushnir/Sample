import { MenuArray, Product } from "./newBanknoteReducer";

export const newBanknoteActions = {
    addMenuItem: (product: Product) => ({type: "ADD_MENU_ITEM", product}) as const,
    setMenuInfo: (menus: MenuArray) => ({type: "SET_MENU_INFO", menus}) as const
}