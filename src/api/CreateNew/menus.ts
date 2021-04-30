import { ApiMenusResultType, myGetInstance } from "../api";


export const menus = {
    getAllMenus: () => {
        return myGetInstance.get<ApiMenusResultType>('/menus')
    }
}
