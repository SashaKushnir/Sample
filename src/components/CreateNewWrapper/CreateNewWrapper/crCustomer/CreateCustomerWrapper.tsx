import React, {ChangeEventHandler, useState} from 'react'
import {CreateCustomerForm} from "./CreateCustomerForm";
import {useDispatch} from "react-redux";
import {filterCustomersByName, setCustomersT} from "../../../../redux/customers/customersThunk";

export const CreateCustomerWrapper = () => {

    const d = useDispatch()
    const [input, setInputVal] = useState("")

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
        <CreateCustomerForm/>
        <input value={input} onKeyDown={handleKeyDown}  onChange={onChangeInput}/>
        <button onClick={search}>
            Search
        </button>
        <button onClick={setAllDataBack}>
            Cancel
        </button>
    </div>
}