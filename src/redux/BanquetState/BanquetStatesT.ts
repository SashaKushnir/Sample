import {Dispatch} from "redux";
import {ActionsTypes, RootState} from "../store";
import {commonActions} from "../forCommon/forCommonActions";
import {BanquetStateActions} from "./BanquetStatesA";
import {BanquetStates} from "../../api/CreateNew/states";
import {banquetActions} from "../banquetInfo/banquetInfoActions";
import {message} from "antd";

export const setBanqueStateT = () => async (d: Dispatch<ActionsTypes<typeof banquetActions
    | typeof BanquetStateActions | typeof commonActions>>, getState: () => RootState) => {

    try {
        d(commonActions.fetchingToggle(true))
        const response = await BanquetStates.getBanquetStates(getState().common.userInfo?.api_token as string)
        // Set response to Bll
        if (response.data.success) {
            d(BanquetStateActions.setStates(response.data.data))
            d(banquetActions.setState(response.data.data[0]))
        } else {
            console.warn(response.data.message)
            message.info("Помилка, невдала спроба загрузки даних", 3)
        }
        d(commonActions.fetchingToggle(false))
    } catch (error) {
        message.info("Помилка, невдала спроба, перевірте інтернет підключення", 3)
        console.warn(error)
        d(commonActions.fetchingToggle(false))
    }
}
