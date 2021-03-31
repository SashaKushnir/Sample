import { ApiMenusResultType, myGetInstance } from "../api";
import { MenuArray } from "../../redux/newBanknote/newBanknoteReducer";


export const menus = {
    getAllMenus: () => {
        return myGetInstance.get<ApiMenusResultType<MenuArray>>('/menus')
    }
}
