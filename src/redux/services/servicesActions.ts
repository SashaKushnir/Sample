import { ServiceCategoriesItem } from "./servicesReducer";

export const servicesActions = {
    addEntertainmentItem: (entertainmentI: ServiceCategoriesItem, value: number | null) =>
        ({type: "ADD_ENTERTAINMENT", entertainmentI, value}) as const,
    deleteFullEntertainmentItem: (entertainmentI: ServiceCategoriesItem) => ({
        type: "TOTALLY_DELETE_ENTERTAINMENT_ITEM",
        entertainmentI
    }) as const,
    setEntertainmentInfo: (entertainmentI: Array<ServiceCategoriesItem>) => ({
        type: "SET_ENTERTAINMENT_INFO",
        entertainmentI
    }) as const
}