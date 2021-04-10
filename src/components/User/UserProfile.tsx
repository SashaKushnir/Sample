import React from "react";
import {useSelector} from "react-redux";
import {selectUsers} from "../../selectors/selectCreateNew";
import {Customer} from "../../redux/customers/customersReducer";
import {Users} from "./Users";




const UserProfile: React.FC = () => {

    const users = useSelector(selectUsers)

    const userProfiles = users?.map((obj:Customer) => <Users/>)

    return(
        <div>
            {userProfiles}
        </div>
    )
}
