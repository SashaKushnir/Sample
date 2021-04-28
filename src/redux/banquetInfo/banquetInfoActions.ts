import {CustomerType} from "../customers/customersReducer";

export const banquetActions = {
    setName: (name: string) => ({type: "SET_NAME", name}) as const,
    setBegining: (time: string) => ({type: "SET_BEGINING", time}) as const,
    setEnd: (time: string) => ({type: "SET_END", time}) as const,
    setDescription: (description: string) => ({type: "SET_DESCRIPTION", description}) as const,
    setAdvance: (num: number) => ({type: "SET_ADVANCE", num}) as const,
    setState: (state: number) => ({type: "SET_STATE", state}) as const,
    setTotalPrice: (price: number) => ({type: "SET_TOTAL_PRICE", price}) as const,
    setCustomer: (cus: CustomerType) => ({type: "SET_CUSTOMER", cus}) as const,
    setBanquetId: (banquetId: number) => ({type: "SET_ID_FOR_BANQUET", banquetId}) as const,
    removeBanquetId: () => ({type: "REMOVE_ID_FOR_BANQUET"}) as const,
}
