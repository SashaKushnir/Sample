import { Dispatch } from "redux";
import { ActionsTypes, RootState } from "../store";
import { MenuItem, ProductCategoriesItem } from "../newBanknote/newBanknoteReducer";
import { createObjActions } from "./createObjActions";
import { useDispatch } from "react-redux";
import { ServiceCategoriesItem } from "../services/servicesReducer";
import { commonActions } from "../forCommon/forCommonActions";
import { history } from "../../api/CreateNew/history";
import { BanquetType, Product } from "./createObjReducer";

const _ = require("lodash");

export const createPost = () => (d: any, getState: () => RootState) => {

    let mainPost: BanquetType, menu_ready = true, tickets_ready = true, services_ready = true

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
            name: "Some name",
            description: null,
            customer_id: 6,
            state_id: 1,
            advance_amount: 30000,
            child_guests_amount: 10,
            adult_guests_amount: 2,
            beg_datetime: "2021-05-25 17:00:00",
            end_datetime: "2021-05-25 21:00:13",
            product_order: {
                items: getState().createNew.menus?.reduce((acum: Array<Product>, menuI, index) =>
                    acum.concat(menuI.products.filter((productI) => productI.showAmount).map((obj) => {
                        const subset = _.pick(obj, ['id', 'amount'])
                        return subset
                    })), [])
            },
            ticket_order: {
                items: getState().tickets.tickets?.filter((ticketI) => ticketI.showAmount).map((obj) => {
                    const subset = _.pick(obj, ["id", "child_tickets_amount", "adult_tickets_amount", "birthday_tickets_amount"])
                    return subset
                })
            },
            service_order: {
                items: getState().services.services?.filter((serviceI) => serviceI.showAmount).map((obj) => {
                    const subset = _.omit(obj, ['showAmount', 'description', "category", "name", "period", "weight", "price",
                        'hourly_paid_price', "once_paid_price"])
                    return subset
                })
            }
        }
        d(createObjActions.setPostBanquetObj(mainPost))
        console.log(mainPost)

    } else {
        d(commonActions.needAmountToggle(true))
    }
    console.log("menu " + menu_ready)
    console.log("tickets " + tickets_ready)
    console.log("services " + services_ready)


}

export const postNewBanknote = (obj: BanquetType, api_token: string) => async (d: Dispatch<ActionsTypes<typeof createObjActions | typeof commonActions>>) => {

    try {
        d(commonActions.fetchingToggle(true))
        const res = await history.postHistory(obj, api_token)
        console.log(":POSRRESPA", res)
        if(true) {

        } else {

        }
        d(commonActions.fetchingToggle(false))
    } catch (error) {
        d(commonActions.fetchingToggle(false))
    }
}












