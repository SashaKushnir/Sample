import { Dispatch } from "redux";
import { ActionsTypes } from "../store";
import { servicesActions } from "./servicesActions";
import { commonActions } from "../forCommon/forCommonActions";
import { services } from "../../api/CreateNew/services";
import {message} from "antd";

export const setServicesT = () => async (d: Dispatch<ActionsTypes<typeof servicesActions | typeof commonActions>>) => {
    try {
        d(commonActions.fetchingMenusToggle(true))
        const response = await services.getAllServices()
        // Set response to Bll
        if (response.data.success) {
            d(servicesActions.setEntertainmentInfo(response.data.data))
            d(commonActions.fetchingMenusToggle(false))
        } else {
            console.warn(response.data.message)
            message.info("Помилка, невдала спроба", 3)
        }
    } catch (error) {
        message.info("Помилка, невдала спроба, перевірте інтернет підключення", 3)
        console.warn(error)
        d(commonActions.fetchingMenusToggle(false))
    }
}