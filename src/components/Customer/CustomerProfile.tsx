import React from "react";
import {useSelector} from "react-redux";
import {selectUsers} from "../../selectors/selectCreateNew";
import {CustomerType} from "../../redux/customers/customersReducer";
import {Customers} from "./Customers";
import s from "./CustomerProfile.module.css"

type PropsType = {
    customer: CustomerType
}

export const CustomerProfile: React.FC<PropsType> = (props) => {

    const cus = props.customer

    return(<div className={s.profile}>
            <div className={s.name}>
                {cus.name}
            </div>
            <div className={s.email}>
                {cus.email}
            </div>
            <div className={s.phone}>
                {cus.phone}
            </div>
            <div className={s.birthdate}>
                {cus.birthdate}
            </div>
        </div>
    )
}
