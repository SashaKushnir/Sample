import React from 'react'
import {FamilyMemberGetter} from "../../redux/customers/customersReducer";
import s from './FMItem.module.css'
import {useSelector} from "react-redux";
import {selectUsers} from "../../selectors/selectCreateNew";
import {deleteHistoryT} from "../../redux/history/newHistoryThunk";
import {DeleteIcon} from "../../common/compon/HistoryIcons/DeleteIcon";
interface FMItemProps {
    member: FamilyMemberGetter
}



export const FMItem: React.FC<FMItemProps> = ({member}) => {

    const customers = useSelector(selectUsers)

    const Delete = () => {
        if (window.confirm("Delete this banquet? It can not be restored!!!")) {
            //d(deleteHistoryT(data.id, localStorage.getItem("api_token") as string)) //deleting family member
        }
    }

    return <div className={s.main}>
        <div>
            Імя: {member.name}
        </div>
        <div className={s.birth}>
            Рік народження: {member.birthdate}
        </div>
        <div className={s.delete} onClick={Delete}>
            X
        </div>
    </div>
}
