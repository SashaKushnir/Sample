import { MenuArray, ProductCategoriesItem } from "./newBanknoteReducer";

export const newBanknoteActions = {
    addMenuItem: (productI: ProductCategoriesItem, value: number | null
    ) => ({type: "ADD_MENU_ITEM", productI, value}) as const,
    deleteFullItem: (productI: ProductCategoriesItem, flagAllM=false)=> ({type: "TOTALLY_DELETE_MENU_ITEM", productI}) as const,
    deleteAllAmount: () => ({type: "TOTALLY_DELETE_ALL_MENU_ITEMS"}) as const,
    setMenuInfo: (menus: MenuArray) => ({type: "SET_MENU_INFO", menus}) as const
}
