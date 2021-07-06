// import { ApiMenusResultType, myGetInstance } from "../api";
//
//
// export const menus = {
//     getAllMenus: () => {
//         return myGetInstance.get<ApiMenusResultType>('/menus')
//     }
// }
import {ApiMenusResultType, myGetInstance} from "../api";
import axios from "axios";


export const menus = {
    getAllMenus: (api_token: string) => {
        return myGetInstance.get<ApiMenusResultType>('/menus', {
            headers: {
                'api-token': api_token
            }
        })
    }
}

