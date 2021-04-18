import {Dispatch} from "redux";
import {ActionsTypes, RootState} from "../store";
import {MenuItem, ProductCategoriesItem} from "../newBanknote/newBanknoteReducer";
import {createObjActions} from "./createObjActions";
import {ServiceCategoriesItem} from "../services/servicesReducer";
import {commonActions} from "../forCommon/forCommonActions";
import {history} from "../../api/CreateNew/history";
import {BanquetType, Product} from "./createObjReducer";

const _ = require("lodash");

export const createPost = () => (d: any, getState: () => RootState) => {

    let mainPost: BanquetType, ready = true

    getState().createNew.menus?.map((obj: MenuItem) => {
        obj.products.filter((product: ProductCategoriesItem) => product.showAmount).map(item => {
            if (item.ready === false) {
                console.log("select menus")
                ready = false
            }
        })
    })

    getState().tickets.tickets?.filter((obj: ProductCategoriesItem) => obj.showAmount).map(item => {
        if (item.ready === false) {
            console.log("select tickets")
            ready = false
        }
    })

    getState().services.services?.filter((obj: ServiceCategoriesItem) => obj.showAmount).map((item: ServiceCategoriesItem) => {
        if(item.duration === undefined || item.duration === null){
            item.duration = 0
        }
        if (item.ready === false) {
            console.log("select services")
            ready = false
        }
    })

    if(getState().banquet.customer === undefined){
        console.log("select customer")
        ready = false
    }

    if(getState().banquet.beginning === ""){
        console.log("select start time")
        ready = false
    }

    if(getState().banquet.end === ""){
        console.log("select end time")
        ready = false
    }

    if(getState().banquet.advance_amount === null){
        console.log("select advance_amount")
        ready = false
    }
    if (ready) {
        d(commonActions.needAmountToggle(false))
        mainPost = {
            name: getState().banquet.name,
            description: getState().banquet.description,
            customer_id: 1,
            creator_id: getState().common.userInfo?.id,
            state_id: 1,
            advance_amount: getState().banquet.advance_amount,
            beg_datetime: getState().banquet.beginning,
            end_datetime: getState().banquet.end,
            product_order: {
                items: getState().createNew.menus?.reduce((acum: Array<Product>, menuI, index) =>
                    acum.concat(menuI.products.filter((productI) => productI.showAmount).map((obj) => {
                        const subset = _.pick(obj, ['id', 'amount'])
                        return subset
                    })), [])
            },
            ticket_order: {
                items: getState().tickets.tickets?.filter((ticketI) => ticketI.showAmount).map((obj) => {
                    const subset = _.pick(obj, ["id", "amount"])
                    return subset
                })
            },
            service_order: {
                items: getState().services.services?.filter((serviceI) => serviceI.showAmount).map((obj) => {
                    const subset = _.pick(obj, ["id", 'amount', "duration"])
                    if(subset.duration === null){
                        subset.duration = 1
                    }
                    return subset
                })
            }
        }
        d(createObjActions.setPostBanquetObj(mainPost))
        console.log("Post obj ")
        console.log(mainPost)
    } else {
        d(commonActions.needAmountToggle(true))
    }
    console.log("is ready? " + ready)

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
