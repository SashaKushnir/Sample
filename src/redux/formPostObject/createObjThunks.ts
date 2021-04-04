import { Dispatch } from "redux";
import { ActionsTypes, RootState } from "../store";
import { newBanknoteActions } from "../newBanknote/newBanknoteActions";
import { ProductCategoriesItem } from "../newBanknote/newBanknoteReducer";
const _ = require("lodash");

export const createPost = () => (dispatch: Dispatch<ActionsTypes<typeof newBanknoteActions>>, getState: ()=>RootState) => {
    let mainPost: any = {
        menus: getState().createNew.menus?.reduce((acum:Array<ProductCategoriesItem>,menuI,index)=>
            acum.concat(menuI.products.filter((productI)=> productI.showAmount).map((obj)=> {
                const subset = _.omit(obj, [ 'showAmount', 'description', "category", "name", "period", "weight", "price"])
                return subset
            })),[]),
        tickets: getState().tickets.tickets?.filter((ticketI)=>ticketI.showAmount).map((obj)=>{
            const subset = _.omit(obj, [ 'showAmount', 'description', "category", "name", "period", "weight", "price"])
            return subset
            return obj
        }),
        services: getState().services.services?.filter((serviceI)=> serviceI.showAmount).map((obj)=>{
            const subset = _.omit(obj, [ 'showAmount', 'description', "category", "name", "period", "weight", "price",
                'hourly_paid_price',"once_paid_price"])
            return subset
        })
    }
    console.log(mainPost)
    debugger

}
