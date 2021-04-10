import React, {useEffect} from "react";
import {CustomerType} from "../../redux/customers/customersReducer";
import {useDispatch, useSelector} from "react-redux";
import {selectUsers} from "../../selectors/selectCreateNew";
import {CustomerProfile} from "./CustomerProfile";
import {setHistoryT} from "../../redux/history/newHistoryThunk";
import {setCustomersT} from "../../redux/customers/customersThunk";



export const Customers: React.FC = (props) => {

    const d = useDispatch()
    const users = useSelector(selectUsers)

    useEffect(() => {
        d(setCustomersT())
    }, [])

    const customerProfiles = users?.map((obj:CustomerType) => <CustomerProfile customer={obj}/>)

    return(
        <div>
            Users
            <div>
                {customerProfiles}
            </div>
        </div>
    )
}
