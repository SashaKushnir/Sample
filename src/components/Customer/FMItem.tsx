import React from 'react'
import {FamilyMemberGetter} from "../../redux/customers/customersReducer";
import s from './FMItem.module.css'
interface FMItemProps {
    member: FamilyMemberGetter
}

export const FMItem: React.FC<FMItemProps> = ({member}) => {
    return <div className={s.main}>
        <div>
            Імя: {member.name}
        </div>
        <div>
            Рік народження: {member.birthdate}
        </div>
    </div>
}
