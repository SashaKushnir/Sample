import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Customers} from "../../Customer/Customers";
import {CreateNewMenus} from "../CreateNewMenus/CreateNewMenus";
import {CreateNew} from "../CreateNew/CreateNew";


export const CreateNewWrapper: React.FC = () => {
    const d = useDispatch()
    const [showMenu, setShowMenuToggle] = useState(false)
    return <div>
        {showMenu && <CreateNew />}
        {!showMenu && <Customers openMenu={setShowMenuToggle} />}
    </div>
}
