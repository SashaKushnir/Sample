import React from "react";
import {useSelector} from "react-redux";
import {selectUsers} from "../../selectors/selectCreateNew";
import {User} from "../../redux/users/usersReducer";
import {Users} from "./Users";



const UserProfile: React.FC = () => {

    const users = useSelector(selectUsers)

    const userProfiles = users?.map((obj:User) => <Users/>)

    return(
        <div>
            {userProfiles}
        </div>
    )
}
