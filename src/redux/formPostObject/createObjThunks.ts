import {Dispatch} from "redux";
import {ActionsTypes, RootState} from "../store";
import {MenuItem, ProductCategoriesItem} from "../newBanknote/newBanknoteReducer";
import {createObjActions} from "./createObjActions";
import {ServiceCategoriesItem} from "../services/servicesReducer";
import {commonActions} from "../forCommon/forCommonActions";
import {history} from "../../api/CreateNew/history";
import {BanquetType, Product} from "./createObjReducer";
import {TicketItem} from "../tickets/ticketsReducer";
import {banquetActions} from "../banquetInfo/banquetInfoActions";
import {CommentItem} from "../history/newHistoryReducer";

const _ = require("lodash");

export const createPost = () => (d: any, getState: () => RootState) => {

    let mainPost: BanquetType, ready = true, menuComments: Array<any> | undefined,
        ticketComments: Array<any> | undefined,
        servicesComments: Array<any> | undefined,
        resultComments: Array<any> | undefined

    getState().createNew.menus?.forEach((obj: MenuItem) => {
        obj.products.filter((product: ProductCategoriesItem) => product.showAmount).forEach(item => {
            if (item.ready === false) {
                alert("Заповніть поля у стравах - " + item.name)
                ready = false
            }
        })
    })

    getState().tickets.tickets?.filter((obj: TicketItem) => obj.showAmount).forEach(item => {
        if (item.ready === false) {
            alert("Заповніть поля у квитках - " + item.name)
            ready = false
        }
    })

    getState().services.services?.filter((obj: ServiceCategoriesItem) => obj.showAmount).forEach((item: ServiceCategoriesItem) => {
        if (item.duration === undefined || item.duration === null) {
            item.duration = 0
        }
        if (item.ready === false) {
            alert("Заповніть поля у розвагах - " + item.name)
            ready = false
        }
    })

    if (getState().banquet.customer === undefined || getState().banquet.customer === null) {
        alert("Виберіть замовника")
        ready = false
    }

    if (getState().banquet.beginning === "") {
        alert("Виберіть дата початку")
        ready = false
    }

    if (getState().banquet.end === "") {
        alert("Виберіть дату кінця")
        ready = false
    }

    if (getState().banquet.advance_amount === null) {
        alert("Введіть предоплату")
        ready = false
    }
    if (!getState().banquet.name || getState().banquet.name.length < 2) {
        alert("Введіть імя (хоча б 2 символи)")
        ready = false
    }
    if (getState().banquet.state === null || getState().banquet.state === undefined) {
        alert("Виберіть стан банкета")
        ready = false
    }
    if (getState().banquet.description === null) {
        d(banquetActions.setDescription(""))
    }
    if (ready) {
        d(commonActions.needAmountToggle(false))

        menuComments = getState().createNew.menus?.reduce((acum: Array<CommentItem>, categoryI) => {
            categoryI.products.map((productI) => {
                if (productI.comments?.length > 0)
                    acum = acum.concat(productI.comments)
                return productI
            })
            return acum
        }, [])
        ticketComments = getState().tickets.tickets?.reduce((acum: Array<CommentItem>, ticketI) => {
            if (ticketI.comments?.length > 0)
                acum = acum.concat(ticketI.comments)
            return acum
        }, [])
        servicesComments = getState().services.services?.reduce((acum: Array<CommentItem>, serviceI) => {
            if (serviceI.comments?.length > 0)
                acum = acum.concat(serviceI.comments)
            return acum
        }, [])
        if (menuComments ? (menuComments.length > 0) : false) { // @ts-ignore
            resultComments = resultComments ? resultComments.concat(menuComments) : menuComments
        }
        if (ticketComments ? (ticketComments.length > 0) : false) { // @ts-ignore
            resultComments = resultComments ? resultComments.concat(ticketComments) : ticketComments
        }
        if (servicesComments ? (servicesComments.length > 0) : false) { // @ts-ignore
            resultComments = resultComments ? resultComments.concat(servicesComments) : servicesComments
        }
        resultComments?.filter((obj) => obj !== undefined)

        mainPost = {
            id: getState().banquet.id ? getState().banquet.id : undefined,
            name: getState().banquet.name,
            description: getState().banquet.description,
            customer_id: getState().banquet.customer?.id as number,
            creator_id: getState().common.userInfo?.id,
            state_id: getState().banquet.state?.id as number,
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
                    if (subset.duration === null) {
                        subset.duration = 1
                    }
                    return subset
                })
            },
            space_order: {
                discount_id: null,
                items:  getState().banquet.basicSpaces?.filter((spaceI)=>{
                    return spaceI.selected
                }).map((spaceI) => {
                        const item = _.pick(spaceI, "id")
                        item["beg_datetime"] = getState().banquet.beginning
                        item["end_datetime"] = getState().banquet.end
                        return item
                    })

            },
            comments: resultComments ? resultComments : []
        }
        d(createObjActions.setPostBanquetObj(mainPost))
    } else {
        d(commonActions.needAmountToggle(true))
    }

}

export const postNewBanknote = (obj: BanquetType, api_token: string) => async (d: Dispatch<ActionsTypes<typeof createObjActions | typeof commonActions>>) => {
    try {
        d(commonActions.fetchingToggle(true))
        const res = await history.postHistory(obj, api_token)
        if (res.data.success) {
            alert("Створено!!!")
        } else {
            alert("Невдало...")
        }
        d(commonActions.fetchingToggle(false))
    } catch (error) {
        alert("Помилка...")
        d(commonActions.fetchingToggle(false))
    }
}
