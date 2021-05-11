import {CustomerType} from "../customers/customersReducer";
import {SpaceItem} from "./banquetInfoReducer";
import {BanquetState} from "../BanquetState/BanquetStatesR";

export const banquetActions = {
    setName: (name: string) => ({type: "SET_NAME", name}) as const,
    setBegining: (time: string) => ({type: "SET_BEGINING", time}) as const,
    setEnd: (time: string) => ({type: "SET_END", time}) as const,
    setDescription: (description: string) => ({type: "SET_DESCRIPTION", description}) as const,
    setAdvance: (num: number) => ({type: "SET_ADVANCE", num}) as const,
    setState: (state: BanquetState) => ({type: "SET_STATE", state}) as const,
    setTotalPrice: (price: number) => ({type: "SET_TOTAL_PRICE", price}) as const,
    setCustomer: (cus: CustomerType) => ({type: "SET_CUSTOMER", cus}) as const,
    setBanquetId: (banquetId: number) => ({type: "SET_ID_FOR_BANQUET", banquetId}) as const,
    removeBanquetId: () => ({type: "REMOVE_ID_FOR_BANQUET"}) as const,
    setSpacesBasicInfo: (spaces: Array<SpaceItem>) => ({type: "SET_BASIC_SPACES_INFO", spaces}) as const,
    setArrayOfSpacesSelected: (spaces: Array<SpaceItem>) => ({type: "SET_ARRAY_OF_SPACES_SELECTED", spaces}) as const,
    setSpaceSelectedOrUnSelected: (spaceId: number, status: boolean | undefined = undefined) =>
         ({type: "SELECT_UNSELECT_SPACE_BY_ID", spaceId}) as const
}
