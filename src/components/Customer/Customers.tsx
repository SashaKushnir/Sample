import React, {useEffect} from "react";
import {CustomerType} from "../../redux/customers/customersReducer";
import {useDispatch, useSelector} from "react-redux";
import {selectUsers} from "../../selectors/selectCreateNew";
import {CustomerProfile} from "./CustomerProfile";
import {setCustomersT} from "../../redux/customers/customersThunk";
import {CreateCustomerWrapper} from "../CreateNewWrapper/CreateNewWrapper/crCustomer/CreateCustomerWrapper";

type ProptsType = {
    CusMenuSwitch:  any
}


export const Customers: React.FC<ProptsType> = (props) => {

    const d = useDispatch()
    const customers = useSelector(selectUsers)

    useEffect(() => {
        d(setCustomersT())
    }, [])

    const customerProfiles = customers.customers?.map((obj:CustomerType, index) =>
        <CustomerProfile customer={obj} key={index} CusMenuSwitch={props.CusMenuSwitch}/>)

    return(
        <div>
            Users
            <div>
                <CreateCustomerWrapper/>
            </div>
            <div>
                {customerProfiles}
            </div>
        </div>
    )
}
