import { Dispatch } from "redux";
import { ActionsTypes, RootState } from "../store";
import { commonActions } from "./forCommonActions";

export const commonR = () => (dispatch: Dispatch<ActionsTypes<typeof commonActions>>, getState: ()=>RootState) => {


    debugger

}
