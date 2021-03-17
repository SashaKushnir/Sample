import { MenuArray, ProductCategoriesItem } from "./newBanknoteReducer";

export const newBanknoteActions = {
    addMenuItem: (productI: ProductCategoriesItem) => ({type: "ADD_MENU_ITEM", productI}) as const,
    setMenuInfo: (menus: MenuArray) => ({type: "SET_MENU_INFO", menus}) as const
}
