import React, {useEffect} from "react";
import {CustomerType} from "../../redux/customers/customersReducer";
import {useDispatch, useSelector} from "react-redux";
import {selectUsers} from "../../selectors/selectCreateNew";
import {CustomerProfile} from "./CustomerProfile";
import {setCustomersT} from "../../redux/customers/customersThunk";
import {CreateCustomerWrapper} from "../CreateNewWrapper/CreateNewWrapper/crCustomer/CreateCustomerWrapper";
import s from "./Customers.module.css"
import {CheckForDeleted} from "../../common/compon/DeletedItems/DeletedItems";

type ProptsType = {
    CusMenuSwitch: any
}


export const Customers: React.FC<ProptsType> = (props) => {

    const d = useDispatch()
    const customers = useSelector(selectUsers)

    useEffect(() => {
        d(setCustomersT())
    }, [])

    const customerProfiles = customers.customers?.map((obj: CustomerType, index) => {
        if (CheckForDeleted(obj)) return
        return <CustomerProfile customer={obj} key={index} CusMenuSwitch={props.CusMenuSwitch}/>
    })

    const GoBack = () => {
        props.CusMenuSwitch(false)
    }

    return (
        <div>
            <div onClick={GoBack} className={s.go_back}>
                Повернутись
            </div>
            <div>
                <CreateCustomerWrapper/>
            </div>
            <div className={s.customers}>
                {customerProfiles}
            </div>
        </div>
    )
}
