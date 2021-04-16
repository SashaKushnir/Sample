import React from 'react';
import Popup from 'reactjs-popup';
import {Customers} from "../Customer/Customers";
import s from "./popup.module.css"
export const PopupExample = () => (
    <Popup trigger={<button> Trigger</button>} position="right center">
        {/*<Customers/>*/}
        <div style={s.popup}>Popup content here !!</div>
    </Popup>
);
