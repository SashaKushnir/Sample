import { MenuArray } from "./newBanknoteReducer";

export const newBanknoteActions = {
    addMenuItem: () => ({type: "ADD_MENU_ITEM"}) as const,
    setMenuInfo: (menus: MenuArray) => ({type: "SET_MENU_INFO", menus}) as const
}