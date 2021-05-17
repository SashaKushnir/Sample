import React, {useState} from 'react'
import {Customers} from "../../Customer/Customers";
import {CreateNew} from "../CreateNew/CreateNew";


export const CreateNewWrapper: React.FC = () => {
    const [showMenu, setShowMenuToggle] = useState(false)
    return <div>
        {showMenu && <Customers  CusMenuSwitch={setShowMenuToggle}/>}
        {!showMenu &&  <div><CreateNew CusMenuSwitch={setShowMenuToggle}/></div>}
    </div>
}
