import { ApiServicesResultType, ApiTicketsResultType, myGetInstance } from "../api";
import { ProductCategoriesItem } from "../../redux/newBanknote/newBanknoteReducer";


export const tickets = {
    getAllTickets: () => {
        return myGetInstance.get<ApiTicketsResultType<Array<ProductCategoriesItem>>>('/tickets')
    }
}
