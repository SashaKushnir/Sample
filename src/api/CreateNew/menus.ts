// import { ApiMenusResultType, myGetInstance } from "../api";
//
//
// export const menus = {
//     getAllMenus: () => {
//         return myGetInstance.get<ApiMenusResultType>('/menus')
//     }
// }
import { ApiMenusResultType } from "../api";
import axios from "axios";


export const menus = {
    getAllMenus: () => {
        return axios.get<ApiMenusResultType>('http://194.213.104.146:88/api/menus')
    }
}

