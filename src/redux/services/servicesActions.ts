import {ServiceCategoriesItem} from "./servicesReducer";
import {CommentMainProperties} from "../../components/CreateNewWrapper/CreateNewMenus/MenuList/DishItem/ProductCategoriesMyItemBasket";

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
    setDuration: (duration: number | string, id: number) => ({
        type: "SET_DURATION",
        duration,
        id
    }) as const,
    addServiceComment: (commentI: CommentMainProperties, index: number, parentId: number) => ({
        type: "SAVE_COMMENT_TO_SERVICES",
        commentI,
        index,
        parentId
    }) as const,
    addServiceEmptyComment: (commentI: CommentMainProperties) => ({type: "ADD_COMMENT_TO_SERVICES", commentI}) as const,
}
