import axios from "axios";
import { ApiCommonResultType, myGetInstance } from "./api";
import { MenuArray } from "../redux/newBanknote/newBanknoteReducer";


export const menus = {
    getAllMenus: () => {
        return myGetInstance.get<ApiCommonResultType<{menus: MenuArray}>>('/menus?category_id=1')
    }
}
