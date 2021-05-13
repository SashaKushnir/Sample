import React from 'react'
import {FamilyMemberGetter} from "../../redux/customers/customersReducer";

interface FMItemProps {
    member: FamilyMemberGetter
}

export const FMItem: React.FC<FMItemProps> = ({member}) => {
    return <div>
        <div>
            {member.name}
        </div>
        <div>
            {member.birthdate}
        </div>
    </div>
}