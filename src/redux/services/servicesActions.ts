import { ServiceCategoriesItem } from "./servicesReducer";

export const servicesActions = {
    addEntertainmentItem: (entertainmentI: ServiceCategoriesItem, value: number | null) =>
        ({type: "ADD_ENTERTAINMENT", entertainmentI, value}) as const,
    deleteFullEntertainmentItem: (entertainmentI: ServiceCategoriesItem) => ({
        type: "TOTALLY_DELETE_ENTERTAINMENT_ITEM",
        entertainmentI
    }) as const,
    deleteAllAmount: () => ({
        type: "TOTALLY_DELETE_ALL_ENTERTAINMENT_ITEMS"
    }) as const,
    setEntertainmentInfo: (entertainmentI: Array<ServiceCategoriesItem>) => ({
        type: "SET_ENTERTAINMENT_INFO",
        entertainmentI
    }) as const,
    setDuration: (duration: number | string, id:number) => ({
        type: "SET_DURATION",
        duration,
        id
    }) as const
}
