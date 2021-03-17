import { MenuArray, ProductCategoriesItem } from "./newBanknoteReducer";

export const newBanknoteActions = {
    addMenuItem: (productI: ProductCategoriesItem, value: number | null
    ) => ({type: "ADD_MENU_ITEM", productI, value}) as const,
    deleteFullItem: (productI: ProductCategoriesItem)=> ({type: "TOTALLY_DELETE_MENU_ITEM", productI}) as const,
    setMenuInfo: (menus: MenuArray) => ({type: "SET_MENU_INFO", menus}) as const
}
