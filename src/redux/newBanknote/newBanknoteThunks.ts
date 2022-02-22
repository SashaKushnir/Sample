import { Dispatch } from "redux";
import {ActionsTypes, RootState} from "../store";
import { newBanknoteActions } from "./newBanknoteActions";
import { menus } from "../../api/CreateNew/menus";
import { commonActions } from "../forCommon/forCommonActions";
import {message} from "antd";

export const setMenuT = () => async (d: Dispatch<ActionsTypes<typeof newBanknoteActions | typeof commonActions>>, getState: () => RootState) => {
    try {
        d(commonActions.fetchingMenusToggle(true))
        if(getState().common.userInfo?.api_token) {
            const response = await menus.getAllMenus(getState().common.userInfo?.api_token as string)
            if (response.data.success) {
                d(newBanknoteActions.setMenuInfo(response.data.data))
                d(commonActions.fetchingMenusToggle(false))
            } else {
                console.warn(response.statusText)
                message.info("Помилка, невдала спроба", 3)
            }
        }
    } catch (error) {
        message.info("Помилка, невдала спроба, перевірте інтернет підключення", 3)
        console.warn(error)
        d(commonActions.fetchingMenusToggle(false))
    }
}
