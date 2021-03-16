import React from 'react'
import { useSelector } from "react-redux";
import { selectTickets } from "../../../selectors/selectCreateNew";
import { TicketItem } from "./TicketItem";
import styles from './CreateNewTickets.module.css'
import { MenuList } from "../CreateNewMenus/MenuList/MenuList";

export const CreateNewTickets = () => {
//    const tickets = useSelector(selectTickets).map((obj)=> <TicketItem ticketItem={obj}/>)
    return <div className={styles.tickets}>
        {/*{tickets}*/}
    </div>
}

// export const CreateNewMenus = () => {
//     const d = useDispatch()
//     useEffect(()=>{
//         d(setMenuT())
//     },[])
//     return <div className={styles.wrap}>
//         <MenuList showAmount={true} />
//         <MenuList/>
//     </div>
// }