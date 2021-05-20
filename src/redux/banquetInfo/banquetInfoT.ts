import {Dispatch} from "redux";
import {ActionsTypes, RootState} from "../store";
import {banquetActions} from "./banquetInfoActions";
import {commonActions} from "../forCommon/forCommonActions";
import {spaces} from "../../api/table/tables";


export const getListOfSpaces = (token: string) => async (d: Dispatch<ActionsTypes<typeof banquetActions | typeof commonActions>>,
                                                         getState: () => RootState) => {
    try {
        d(commonActions.fetchingToggle(true))
        const res = await spaces.getListOfSpaces(token)
        if (res.data.success) {
            d(banquetActions.setSpacesBasicInfo(res.data.data))
        } else {

        }
        d(commonActions.fetchingToggle(false))
    } catch (e) {
        console.warn(e.message)
        d(commonActions.fetchingToggle(false))
    }
}


export const gettingSpacesByDate = (fromHistory: boolean) => async (d: Dispatch<ActionsTypes<typeof banquetActions | typeof commonActions>>,
                                                                    getState: () => RootState) => {
    try {
        d(commonActions.fetchingToggle(true))
        const res = await spaces.getOrderedSpaces(getState().banquet.beginning, getState().banquet.end,
            getState().common.userInfo?.api_token as string)
        if (res.data.success) {
            if (fromHistory) {
                d(banquetActions.setFlagsToPreventSpacesBeingDisabled(getState().banquet.basicSpaces?.filter((spaceI) =>
                    spaceI.selected) || [], getState().banquet.beginning.split(' ')[0]))
            }
            d(banquetActions.setDisabledSpaces(res.data.data))
        } else {

        }
        d(commonActions.fetchingToggle(false))
    } catch (e) {
        console.warn(e.message)
        d(commonActions.fetchingToggle(false))
    }
}