import React, {useEffect} from "react";
import {CustomerType} from "../../redux/customers/customersReducer";
import {useDispatch, useSelector} from "react-redux";
import {selectUsers} from "../../selectors/selectCreateNew";
import {CustomerProfile} from "./CustomerProfile";
import {setHistoryT} from "../../redux/history/newHistoryThunk";
import {setCustomersT} from "../../redux/customers/customersThunk";

type ProptsType = {
    CusMenuSwitch: any
}


export const Customers: React.FC<ProptsType> = (props) => {

    const d = useDispatch()
    const customers = useSelector(selectUsers)

    useEffect(() => {
        d(setCustomersT())
    }, [])

    const customerProfiles = customers.customers?.map((obj:CustomerType) => <CustomerProfile customer={obj} CusMenuSwitch={props.CusMenuSwitch}/>)

    return(
        <div>
            Users
            <div>
                {customerProfiles}
            </div>
        </div>
    )
}
