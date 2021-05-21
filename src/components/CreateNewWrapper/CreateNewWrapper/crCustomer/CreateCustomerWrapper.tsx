import React, {useState} from 'react'
import {CreateCustomerForm} from "./CreateCustomerForm";
import {useDispatch, useSelector} from "react-redux";
import {filterCustomersByName, setCustomersT} from "../../../../redux/customers/customersThunk";
import {RootState} from "../../../../redux/store";
import {FetchingComponent} from "../../../../common/compon/FetchingComponent/FetchingComponent";
import s from "./CreateCustomerWrapper.module.css"
export const CreateCustomerWrapper = () => {

    const d = useDispatch()
    const customerIsPosting = useSelector((state: RootState) => state.common.isCustomerPosting)
    const [input, setInputVal] = useState("")
    const [showForm, setShowForm] = useState(false)

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputVal(e.target.value)
    }

    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            search()
        }
    }

    const search = () => {
        d(filterCustomersByName(input))
    }

    const setAllDataBack = () => {
        d(setCustomersT())
        setInputVal("")
    }
    return <div>
        {!showForm && <h3 className={s.toCenter} onClick={() => setShowForm(true)}>Додати клієнта</h3>}
        {showForm && <h3 className={s.toCenter} onClick={() => setShowForm(false)}>Сховати</h3>}
        {customerIsPosting ? <FetchingComponent/> : <div>
            {showForm && <CreateCustomerForm/>}
        </div>
        }
        <div className={s.toCenter}>
        <input value={input} onKeyDown={handleKeyDown}  onChange={onChangeInput}/>
        <button onClick={search} className={s.button}>
            Search
        </button>
        <button onClick={setAllDataBack} className={s.button}>
            Cancel
        </button>
        </div>
    </div>
}
