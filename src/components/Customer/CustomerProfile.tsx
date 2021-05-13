import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {CustomerType} from "../../redux/customers/customersReducer";
import s from "./CustomerProfile.module.css"
import {banquetActions} from "../../redux/banquetInfo/banquetInfoActions";
import {CreateFMForm} from "./CreateFMForm";
import {FMItem} from "./FMItem";

type PropsType = {
    customer: CustomerType
    CusMenuSwitch: any
}

export const CustomerProfile: React.FC<PropsType> = (props) => {


    const [addFMmode, setAddFMmode] = useState(false)
    const familyMembers = props.customer.family_members.map((memberI, index) =>
    <FMItem member={memberI} key={index}/>)
    const d = useDispatch()
    const cus = props.customer

    const Select = () => {
        d(banquetActions.setCustomer(cus))
        props.CusMenuSwitch(false)
    }

    const hideForm = () => {
        setAddFMmode(false)
    }

    const addFamilyMember = () => {
        setAddFMmode(true)
    }

    return (<div className={s.profile}>
            <div className={s.name} onClick={Select}>
                {cus.name}
            </div>
            <div className={s.email}>
                {cus.email}
            </div>
            <div className={s.phone}>
                {cus.phone}
            </div>
            <div className={s.birthdate}>
                {cus.birthdate}
            </div>
            <div>
                {familyMembers}
            </div>
            {!addFMmode && <button onClick={addFamilyMember}>
                Add family member
            </button>}
            {addFMmode &&
            <div>
                <button onClick={hideForm}>
                    Hide Form
                </button>
                <div>
                    <CreateFMForm hideForm = {hideForm} customer={cus}/>
                </div>
            </div>}
        </div>
    )
}
