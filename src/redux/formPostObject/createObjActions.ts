import { BanquetType } from "./createObjReducer";

export const createObjActions = {
    setPostBanquetObj: (payload: BanquetType) => ({type : "SET_POST_BANQUET_OBJ", payload})
}
