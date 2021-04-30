import {UserInter} from "../../api/login/login";
import {EditUserType} from "../../components/CreateEmployeeAccount/EditDelete/UserItem";
import {BanquetStateArray} from "./BanquetStatesR";

export const BanquetStateActions = {
    setStates: (states: BanquetStateArray) => ({type:"SET_STATES", states}) as const
}
