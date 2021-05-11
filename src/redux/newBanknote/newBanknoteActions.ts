import {MenuArray, ProductCategoriesItem} from "./newBanknoteReducer";
import {CommentMainProperties} from "../../components/CreateNewWrapper/CreateNewMenus/MenuList/DishItem/ProductCategoriesMyItemBasket";

export const newBanknoteActions = {
    addMenuItem: (productI: ProductCategoriesItem, value: number | null
    ) => ({type: "ADD_MENU_ITEM", productI, value}) as const,
    deleteFullItem: (productI: ProductCategoriesItem, flagAllM = false) => ({
        type: "TOTALLY_DELETE_MENU_ITEM",
        productI
    }) as const,
    deleteAllAmount: () => ({type: "TOTALLY_DELETE_ALL_MENU_ITEMS"}) as const,
    setMenuInfo: (menus: MenuArray) => ({type: "SET_MENU_INFO", menus}) as const,
    addComment: (commentI: CommentMainProperties) => ({type: "ADD_COMMENT_TO_MENUS", commentI}) as const,
    saveComment: (commentI: CommentMainProperties, index: number, parentId:number) => ({
        type: "SAVE_COMMENT_TO_MENUS",
        commentI,
        index,
        parentId
    }) as const
}
