import { Dispatch } from "redux";
import {ActionsTypes, RootState} from "../store";
import { commonActions } from "../forCommon/forCommonActions";
import { history } from "../../api/CreateNew/history";
import {historyActions} from "./newHistoryAction";
import {BanquetType} from "../formPostObject/createObjReducer";
import {message} from "antd";

export const setHistoryT = () => async (d: Dispatch<ActionsTypes<typeof historyActions | typeof commonActions>>, getState: () => RootState) => {

    try {
        d(commonActions.fetchingToggle(true))
        const response = await history.getAllHistory(getState().common.userInfo?.api_token as string)
        // Set response to Bll
        if (response.data.success ) {
            d(historyActions.setHistoryInfo(response.data.data))
        } else {
            console.warn(response.data.message)
        }
        d(commonActions.fetchingToggle(false))
    } catch (error) {
        message.info("Помилка, невдала спроба, перевірте інтернет підключення", 3)
        console.warn(error)
        d(commonActions.fetchingToggle(false))
    }
}

export const getFilteredHistory = (beg_datetime: string, end_datetime:string) => async (d: Dispatch<ActionsTypes<typeof historyActions | typeof commonActions>>, getState: () => RootState) => {

    try {
        d(commonActions.fetchingToggle(true))
        end_datetime+=' 23:59:59'
        const response = await history.getFilteredHistory(beg_datetime, end_datetime,getState().common.userInfo?.api_token as string)
        // Set response to Bll
        if (response.data.success ) {
            d(historyActions.setHistoryInfo(response.data.data))
        } else {
            console.warn(response.data.message)
        }
        d(commonActions.fetchingToggle(false))
    } catch (error) {
        message.info("Нема банкетів з такою датою", 3)
        console.warn(error)
        d(commonActions.fetchingToggle(false))
    }
}

export const updateHistoryT = (updObj: BanquetType, token: string) => async (d: Dispatch<ActionsTypes<typeof historyActions | typeof commonActions>>) => {

    try {
        d(commonActions.fetchingToggle(true))
        const response = await history.patchHistory(updObj, token)
        if (response.data.success) {
            message.info("Успішно змінено", 3)
        } else {
            message.info("Помилка, невдала спроба", 3)
        }
        d(commonActions.fetchingToggle(false))
    } catch (error) {
        message.info("Помилка, невдала спроба, перевірте інтернет підключення", 3)
        console.warn(error)
        d(commonActions.fetchingToggle(false))
    }
}
export const deleteHistoryT = (id:number, api_token:string) => async (d: Dispatch<ActionsTypes<typeof historyActions | typeof commonActions>>) => {

    try {
        d(commonActions.fetchingToggle(true))
        const response = await history.deleteHistory(id, api_token)

        // Set response to Bll
        if (response.data.success) {
            d(historyActions.deleteOneHistoty(id))
            d(commonActions.fetchingToggle(false))
            message.info("Видалено", 3)
        } else {
            console.warn(response.data.message)
            d(commonActions.fetchingToggle(false))
            message.info("Помилка, невдала спроба", 3)
        }
    } catch (error) {
        message.info("Помилка, невдала спроба, перевірте інтернет підключення", 3)
        console.warn(error)
        d(commonActions.fetchingToggle(false))
    }
}
