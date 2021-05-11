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
    }
}