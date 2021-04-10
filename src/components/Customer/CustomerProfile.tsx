import React from "react";
import {useSelector} from "react-redux";
import {selectUsers} from "../../selectors/selectCreateNew";
import {CustomerType} from "../../redux/customers/customersReducer";
import {Customer} from "./Customer";




const CustomerProfile: React.FC = () => {

    const users = useSelector(selectUsers)

    const userProfiles = users?.map((obj:CustomerType) => <Customer/>)

    return(
        <div>
            {userProfiles}
        </div>
    )
}
