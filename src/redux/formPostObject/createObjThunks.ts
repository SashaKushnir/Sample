import { Dispatch } from "redux";
import { ActionsTypes, RootState } from "../store";
import { MenuItem, ProductCategoriesItem } from "../newBanknote/newBanknoteReducer";
import { createObjActions } from "./createObjActions";
import { useDispatch } from "react-redux";
import { ServiceCategoriesItem } from "../services/servicesReducer";
import { commonActions } from "../forCommon/forCommonActions";

const _ = require("lodash");

export const createPost = () => (d: Dispatch<ActionsTypes<typeof createObjActions | typeof commonActions>>, getState: () => RootState) => {

    let mainPost: any, menu_ready = true, tickets_ready = true, services_ready = true

    getState().createNew.menus?.map((obj: MenuItem) => {
        obj.products.filter((product: ProductCategoriesItem) => product.showAmount).map(item => {
            if (item.ready === false) {
                menu_ready = false
            }
        })
    })

    getState().tickets.tickets?.filter((obj: ProductCategoriesItem) => obj.showAmount).map(item => {
        if (item.ready === false) {
            tickets_ready = false
        }
    })

    getState().services.services?.filter((obj: ServiceCategoriesItem) => obj.showAmount).map((item: ServiceCategoriesItem) => {
        if (item.ready === false) {
            services_ready = false
        }
    })

    if (services_ready && tickets_ready && menu_ready) {
        d(commonActions.needAmountToggle(false))
        mainPost = {
            menus: getState().createNew.menus?.reduce((acum: Array<ProductCategoriesItem>, menuI, index) =>
                acum.concat(menuI.products.filter((productI) => productI.showAmount).map((obj) => {
                    const subset = _.omit(obj, ['showAmount', 'description', "category", "name", "period", "weight", "price"])
                    return subset
                })), []),
            tickets: getState().tickets.tickets?.filter((ticketI) => ticketI.showAmount).map((obj) => {
                const subset = _.omit(obj, ['showAmount', 'description', "category", "name", "period", "weight", "price"])
                return subset
                return obj
            }),
            services: getState().services.services?.filter((serviceI) => serviceI.showAmount).map((obj) => {
                const subset = _.omit(obj, ['showAmount', 'description', "category", "name", "period", "weight", "price",
                    'hourly_paid_price', "once_paid_price"])
                return subset
            })
        }

    } else {
        d(commonActions.needAmountToggle(true))
    }

    console.log("menu " + menu_ready)
    console.log("tickets " + tickets_ready)
    console.log("services " + services_ready)
    console.log(mainPost)


}
